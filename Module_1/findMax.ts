function findMax(arr: number[]): number | undefined {
    if (arr.length === 0) {
        return undefined;
    }
    return arr.reduce((accumulator:number, currentValue:number):number => {
        return Math.max(accumulator, currentValue);
    },arr[0]);
}

let arr = [1, 44, 3, 4, 5, 6, 7, 111, 9, 10];
console.log(findMax(arr))

let emptyArr = []
console.log(findMax(emptyArr))