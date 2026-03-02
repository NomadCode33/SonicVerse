import { targetTypeMap } from './src/utils/sonic-hub/config.js';
import { writeFileSync } from 'fs';

// NEW: define all endpoints here — add new ones as you build them out
// this script only ever runs locally so we always use localhost:8000 directly
const ENDPOINTS = [
  { name: "characters", path: "/characters/" },
  // { name: "transformations", path: "/transformations/" },
  // { name: "zones", path: "/zones/" },
  // { name: "games", path: "/games/" },
];

// NEW: always localhost since this script only runs locally
const LOCAL_BASE = "http://localhost:8000/api";

// NEW: loops through all endpoints and generates a map file for each one
for (const endpoint of ENDPOINTS) {
  const map = await targetTypeMap(`${LOCAL_BASE}${endpoint.path}`);
  console.log(`✅ ${endpoint.name}: map generated`);

  // NEW: each endpoint gets its own named export (e.g. targetCharactersMap, targetTransformationsMap)
  const output = `// Auto-generated — do not edit by hand
export const target${capitalize(endpoint.name.slice(0, -1))}Map = ${JSON.stringify(map, null, 2)};
`;

  // NEW: each endpoint gets its own map file (e.g. charMap.js, transformationMap.js)
  const fileName = `./src/utils/sonic-hub/${endpoint.name.slice(0, -1)}Map.js`;
  writeFileSync(fileName, output);
  console.log(`📝 ${fileName} written!`);
}

// NEW: helper to capitalize first letter for the export name
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}