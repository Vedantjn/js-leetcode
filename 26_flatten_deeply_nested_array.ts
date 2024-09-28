type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
    let result: MultiDimensionalArray = [];

    for (const a of arr) {
        if (Array.isArray(a) && n > 0) {
            // Recursively flatten the array if it's an array and depth n > 0
            result.push(...flat(a, n - 1));
        } else {
            // If it's a number or depth limit is reached, push it directly
            result.push(a);
        }
    }

    return result;
};
