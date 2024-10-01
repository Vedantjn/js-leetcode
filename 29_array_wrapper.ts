class ArrayWrapper {
    private array: number[];  // Declare the array property with its type

    constructor(nums: number[]) {
        this.array = nums;  // Initialize the array in the constructor
    }
    
    valueOf(): number {
        return this.array.reduce((acc, curr) => acc + curr, 0);  // Return the sum of the array
    }
    
    toString(): string {
        return JSON.stringify(this.array);  // Convert the array to a string
    }
}

/**
 * const obj1 = new ArrayWrapper([1, 2]);
 * const obj2 = new ArrayWrapper([3, 4]);
 * console.log(obj1 + obj2); // 10
 * console.log(String(obj1)); // "[1,2]"
 * console.log(String(obj2)); // "[3,4]"
 */
