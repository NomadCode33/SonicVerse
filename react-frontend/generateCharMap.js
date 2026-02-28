import { targetTypeMap } from './src/utils/characters/config.js';
import { writeFileSync } from 'fs';

const searchURL = 'https://sonicverse-y2s6.onrender.com/api/characters/';

const map = await targetTypeMap(searchURL);

const output = `// Auto-generated — do not edit by hand
export const targetCharacterMap = ${JSON.stringify(map, null, 2)};
`;

writeFileSync('./src/utils/sonic-hub/charMap.js', output);
console.log('charMap.js written!');