type Fn<T> = () => Promise<T>;

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
    const resolvedValues: T[] = new Array(functions.length); 
    let resolvedPromises = 0;

    return new Promise((resolve, reject) => {
        functions.forEach((fn, ind) => {
            fn().then((result) => {
                resolvedValues[ind] = result;
                resolvedPromises++;
                if (resolvedPromises === functions.length) {
                    resolve(resolvedValues);
                }
            }).catch(reject);
        });
    });
}

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
