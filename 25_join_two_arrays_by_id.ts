type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { id: number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
    let items = arr1.concat(arr2); // Combine both arrays

    let result: { [key: number]: ArrayType } = {}; // Use an object to store by id

    for (const obj of items) {
        if (!result[obj.id]) {
            result[obj.id] = obj; // Add new object if the id doesn't exist
            continue;
        }

        result[obj.id] = { ...result[obj.id], ...obj }; // Merge objects with the same id
    }

    return Object.values(result); // Return array of merged objects
}
