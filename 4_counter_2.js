/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let originalValue = init;
    
    return {
        increment: function() {
            init += 1;
            return init;
        },
        decrement: function() {
            init -= 1;
            return init;
        },
        reset: function() {
            init = originalValue;
            return init;
        }
    };
};

/**
 * Usage example:
 * const counter = createCounter(5);
 * console.log(counter.increment()); // 6
 * console.log(counter.reset());    // 5
 * console.log(counter.decrement()); // 4
 */
