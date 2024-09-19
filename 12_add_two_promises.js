/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise<number>}
 */
var addTwoPromises = async function(promise1, promise2) {
    const data1 = await promise1;
    const data2 = await promise2;

    return data1 + data2;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

// -------------------------------------------------------------------

var addTwoPromises = async function (promise1, promise2) {
    const [value1, value2] = await Promise.all([promise1, promise2]);
    return value1 + value2;
};