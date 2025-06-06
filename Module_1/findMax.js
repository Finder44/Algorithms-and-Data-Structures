function findMax(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    return arr.reduce(function (accumulator, currentValue) {
        return Math.max(accumulator, currentValue);
    }, arr[0]);
}
var arr = [1, 44, 3, 4, 5, 6, 7, 111, 9, 10];
console.log(findMax(arr));
var emptyArr = [];
console.log(findMax(emptyArr));
