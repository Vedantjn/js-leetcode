/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: function(val1) {
            if (val1 === val) {
                return true;
            }
            throw new Error("Not Equal");
        },
        notToBe: function(val2) {
            if (val2 !== val) {
                return true;
            }
            throw new Error("Equal");
        }
    };
};

/**
 * Usage examples:
 * console.log(expect(5).toBe(5)); // true
 * console.log(expect(5).notToBe(5)); // throws "Equal"
 */
