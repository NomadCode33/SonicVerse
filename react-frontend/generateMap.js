import { targetTypeMap } from './src/utils/verse-hub/config.js';
import { writeFileSync } from 'fs';

// This script only ever runs locally so we always use localhost:8000 directly
const ENDPOINTS = [
  { name: "characters", path: "/characters/" },
  // { name: "transformations", path: "/transformations/" },
  // { name: "zones", path: "/zones/" },
  // { name: "games", path: "/games/" },
  // Subcategory endpoints use /all to get merged flat object for map building
  // { name: "gameplayFeatures", path: "/gameplay-features/all" },
];

// Always localhost since this script only runs locally
const LOCAL_BASE = "http://localhost:8000/api";

// Loops through all endpoints and generates a map file for each one
for (const endpoint of ENDPOINTS) {
  // config.js now handles all response shapes so this works for any endpoint
  const map = await targetTypeMap(`${LOCAL_BASE}${endpoint.path}`);
  console.log(`✅ ${endpoint.name}: map generated`);

  // Each endpoint gets its own named export (e.g. targetCharacterMap, targetTransformationMap)
  const output = `// Auto-generated — do not edit by hand
export const target${capitalize(endpoint.name.slice(0, -1))}Map = ${JSON.stringify(map, null, 2)};
`;

  // Each endpoint gets its own map file (e.g. charMap.js, transformationMap.js)
  const fileName = `./src/utils/verse-hub/maps/${endpoint.name.slice(0, -1)}Map.js`;
  writeFileSync(fileName, output);
  console.log(`📝 ${fileName} written!`);
}

// Helper to capitalize first letter for the export name
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}