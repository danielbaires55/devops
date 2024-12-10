import { formatLower } from './lib/formatters.js';
const testString = "   Hello World!   ";
const formattedString = formatLower(testString);

console.log(`Original: "${testString}"`);
console.log(`Formatted: "${formattedString}"`);

// Output atteso:
// Original: "   Hello World!   "
// Formatted: "hello world!"