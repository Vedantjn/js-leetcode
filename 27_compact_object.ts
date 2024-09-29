type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function compactObject(obj: Obj): Obj {
    // Check if the object is an array
    if (Array.isArray(obj)) {
        // Recursively compact each element and filter out falsy values
        return obj
            .map((item: JSONValue) => compactObject(item as Obj)) // recursively compact nested arrays/objects
            .filter(Boolean) as JSONValue[]; // remove falsy values and ensure correct return type
    }

    // If it's not an array, assume it's an object
    if (typeof obj === 'object' && obj !== null) {
        const result: Record<string, JSONValue> = {};
        // Iterate over object keys and apply compacting logic
        for (let key in obj) {
            const value = compactObject(obj[key] as Obj); // recursively compact
            if (Boolean(value)) { // only include truthy values
                result[key] = value;
            }
        }
        return result;
    }

    // For non-object values, return the value as is
    return obj;
}
