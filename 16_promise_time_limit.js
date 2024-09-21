/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    return async function(...args) {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);
            
            fn(...args).then((result) => {
                clearTimeout(timer); 
                resolve(result);
            }).catch((error) => {
                clearTimeout(timer); 
                reject(error);
            });
        });
    };
};

/**
 * Example 1:
 * const fn = async (n) => { 
 *   await new Promise(res => setTimeout(res, 100)); 
 *   return n * n; 
 * }
 * const limited = timeLimit(fn, 50);
 * limited(5).catch(console.log); // "Time Limit Exceeded"
 */

/**
 * Example 2:
 * const fn = async (n) => { 
 *   await new Promise(res => setTimeout(res, 100)); 
 *   return n * n; 
 * }
 * const limited = timeLimit(fn, 150);
 * limited(5).then(console.log); // 25
 */
