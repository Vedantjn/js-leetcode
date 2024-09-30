class EventEmitter {
    private events: Map<string, Function[]>;

    constructor() {
        this.events = new Map<string, Function[]>();
    }

    /**
     * Subscribes a callback to an event.
     * @param {string} eventName - The name of the event.
     * @param {Function} callback - The callback to subscribe.
     * @return {Object} An object with an unsubscribe method.
     */
    subscribe(eventName: string, callback: (...args: any[]) => any): { unsubscribe: () => void } {
        if (!this.events.has(eventName)) {
            this.events.set(eventName, []);
        }
        const listeners = this.events.get(eventName)!;
        listeners.push(callback);

        return {
            unsubscribe: () => {
                const index = listeners.indexOf(callback);
                if (index !== -1) {
                    listeners.splice(index, 1);
                }
            }
        };
    }

    /**
     * Emits an event and invokes all callbacks subscribed to it.
     * @param {string} eventName - The name of the event.
     * @param {Array} args - The arguments to pass to the callbacks.
     * @return {Array} An array of results from the callback invocations.
     */
    emit(eventName: string, args: any[] = []): any[] {
        if (!this.events.has(eventName)) {
            return [];
        }

        const listeners = this.events.get(eventName)!;
        const results: any[] = [];

        for (const listener of listeners) {
            results.push(listener(...args));
        }

        return results;
    }
}
