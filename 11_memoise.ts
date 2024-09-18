type Fn = (...params: number[]) => number;

function memoize(fn: Fn): Fn {
    const cache = new Map<string, number>(); 
        
    return function(...args: number[]): number {
        const key = JSON.stringify(args); 
        
        if (cache.has(key)) {
            return cache.get(key)!;  
        }

        const result = fn(...args);
        cache.set(key, result);
        return result;
    }
}

// Example usage:

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *   callCount += 1;
 *   return a + b;
 * })
 * 
 * console.log(memoizedFn(2, 3)) // 5
 * console.log(memoizedFn(2, 3)) // 5
 * console.log(callCount) // 1 
 */

