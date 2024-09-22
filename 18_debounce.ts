type F = (...args: number[]) => void;

function debounce(fn: F, t: number): F {
    let id: ReturnType<typeof setTimeout>; // Holds the ID for the timeout
    
    return function(...args: number[]) {   // Return a debounced version of fn
        clearTimeout(id);                  // Clear any previous timeout
        id = setTimeout(() => fn(...args), t);  // Set a new timeout to call fn
    };
}

/**
 * const log = debounce(console.log, 100);
 * log(1); // cancelled
 * log(2); // cancelled
 * log(3); // Logged at t=100ms
 */
