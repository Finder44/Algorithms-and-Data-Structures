let array = [1,2,3,4,5,6,7,8,89, -4234, -1, -13240];
function searchMin(arr){
    return Math.min.apply(Math,arr);
}

console.log("min value: ",searchMin(array));