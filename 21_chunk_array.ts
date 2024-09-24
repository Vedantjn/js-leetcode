type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
    let i: number = 0;
    let result: Obj[][] = [];

    while (i < arr.length) {
        result.push(arr.slice(i, i + size));
        i += size;
    } 

    return result;
}
