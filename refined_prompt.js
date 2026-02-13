/*
Refined Prompt: Write a robust camelCase function with error handling for 
non-string inputs, empty strings, and special characters.
*/
function toCamelCase(str) {
    // Error handling for non-string inputs
    if (str === null || str === undefined) {
        throw new Error('Input cannot be null or undefined');
    }

    if (typeof str !== 'string') {
        throw new Error(`Expected a string, but received ${typeof str}`);
    }

    // Handle empty strings
    if (str.length === 0) {
        return '';
    }

    // Remove leading/trailing whitespace
    str = str.trim();

    // Split by common delimiters (hyphens, underscores, spaces) and special characters
    const words = str.split(/[\s\-_]+/);

    // Filter out empty strings and convert to camelCase
    return words
        .filter(word => word.length > 0)
        .map((word, index) => {
            // Remove any remaining special characters
            const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '');

            if (cleanWord.length === 0) {
                return '';
            }

            // First word is lowercase, subsequent words are capitalized
            if (index === 0) {
                return cleanWord.toLowerCase();
            }

            return cleanWord.charAt(0).toUpperCase() + cleanWord.slice(1).toLowerCase();
        })
        .join('');
}

// Example usage
console.log(toCamelCase('hello-world')); // 'helloWorld'
console.log(toCamelCase('hello_world_test')); // 'helloWorldTest'
console.log(toCamelCase('hello world')); // 'helloWorld'
console.log(toCamelCase('')); // ''

// Error cases
try {
    toCamelCase(null);
} catch (error) {
    console.error(error.message); // 'Input cannot be null or undefined'
}

try {
    toCamelCase(123);
} catch (error) {
    console.error(error.message); // 'Expected a string, but received number'
}