type Counter = {
    increment: () => number;
    decrement: () => number;
    reset: () => number;
}

function createCounter(init: number): Counter {
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
}

/**
 * Usage example:
 * const counter = createCounter(5);
 * console.log(counter.increment()); // 6
 * console.log(counter.reset());    // 5
 * console.log(counter.decrement()); // 4
 */
