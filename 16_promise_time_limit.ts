type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
    return async function (...args: any[]): Promise<any> {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);

            fn(...args)
                .then((result) => {
                    clearTimeout(timer); 
                    resolve(result);
                })
                .catch((error) => {
                    clearTimeout(timer); 
                    reject(error);
                });
        });
    };
}

/**
 * Example:
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log); // Output: "Time Limit Exceeded" at t=100ms
 */
