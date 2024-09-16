// /**
//  * @param {number[]} arr
//  * @param {Function} fn
//  * @return {number[]}
//  */
// var map = function(arr, fn) {
//     const result = [];
//     for(let i = 0; i < arr.length; i++) {
//         result.push(fn(arr, i));
//     }
//     return result;
// };
// -----------------------------------------------------
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        let a = fn(arr[i], i);
        result.push(a);
    }
    return result;
};