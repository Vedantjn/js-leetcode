/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    let result = [];

    for(const a of arr) {
        if(Array.isArray(a) && n > 0) {
            result.push(...flat(a, n-1));
        }
        else {
            result.push(a);
        }
    }

    return result;
};