type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    return {
        toBe: function(val1: any) {
            if (val1 === val) {
                return true;
            }
            throw new Error("Not Equal");
        },
        notToBe: function(val2: any) {
            if (val2 !== val) {
                return true;
            }
            throw new Error("Equal");
        }
    };
}

/**
 * Usage examples:
 * console.log(expect(5).toBe(5)); // true
 * try {
 *     console.log(expect(5).notToBe(5)); // Throws "Equal"
 * } catch (e) {
 *     console.error(e.message); // Output: "Equal"
 * }
 */
