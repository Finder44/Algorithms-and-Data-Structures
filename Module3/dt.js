let valueA = 144;
let valueB = 0;

function isDivisible(a, b) {
    if (b === 0) {
        return 'Ошибка: деление на ноль';
    }
    return (a % b === 0) ? true : false;
}

console.log("Результат:", isDivisible(valueA, valueB));
