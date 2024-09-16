function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    let result: number[] = [];

    for(let i = 0; i < arr.length; i++) {
        const a : number = fn(arr[i], i);
        result.push(a);
    }

    return result;
};