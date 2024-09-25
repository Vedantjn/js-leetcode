interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>;
}

Array.prototype.groupBy = function<T>(this: T[], fn: (item: T) => string): Record<string, T[]> {
    return this.reduce((result: Record<string, T[]>, item: T) => {
        const key = fn(item);
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
        return result;
    }, {} as Record<string, T[]>);
};

/**
 * Example:
 * console.log([1, 2, 3].groupBy(String)); // {"1": [1], "2": [2], "3": [3]}
 */
