/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    const resolvedValues = [];
    let completedPromises = 0;

    return new Promise((resolve, reject) => {
        functions.forEach((fn, index) => {
            fn().then((value) => {
                resolvedValues[index] = value;
                completedPromises++;
                if (completedPromises === functions.length) {
                    resolve(resolvedValues);
                }
            }).catch(reject);
        });
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
