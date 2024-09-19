type P = Promise<number>;

async function addTwoPromises(promise1: P, promise2: P): P {
    const data1: number = await promise1;
    const data2: number = await promise2;

    return data1 + data2;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

// ---------------------------------------------------------------

type P = Promise<number>;

async function addTwoPromises(promise1: P, promise2: P): P {
    const [data1, data2]: [number, number] = await Promise.all([promise1, promise2]);
    return data1 + data2;
}

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

