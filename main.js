const { formatLower } = require('./lib/formatters');

const testString = "   Hello World!   ";
const formattedString = formatLower(testString);

console.log(`Original: "${testString}"`);
console.log(`Formatted: "${formattedString}"`);

// Output atteso:
// Original: "   Hello World!   "
// Formatted: "hello world!"