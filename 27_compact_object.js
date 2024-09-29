var compactObject = function(obj) {
    // Check if the object is an array
    if (Array.isArray(obj)) {
        // Recursively compact each element and filter out falsy values
        return obj
            .map(compactObject) // recursively compact nested arrays/objects
            .filter(Boolean); // remove falsy values
    }
    
    // If it's not an array, assume it's an object
    if (typeof obj === 'object' && obj !== null) {
        const result = {};
        // Iterate over object keys and apply compacting logic
        for (let key in obj) {
            const value = compactObject(obj[key]); // recursively compact
            if (Boolean(value)) { // only include truthy values
                result[key] = value;
            }
        }
        return result;
    }
    
    // For non-object values, return the value as is
    return obj;
};
