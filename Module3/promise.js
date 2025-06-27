const calcPromise = new Promise(function (resolve) {
    let start = 2;
    resolve(start);
});

calcPromise
    .then((value) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let squared = value * value;
                console.log(`Шаг 1: ${squared}`);
                resolve(squared);
            }, 2500);
        });
    })
    .then((value) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let squared = value * value;
                console.log(`Шаг 2: ${squared}`);
                resolve(squared);
            }, 2500);
        });
    })
    .then((value) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let squared = value * value;
                console.log(`Результат вычислений: ${squared}`);
                resolve(squared);
            }, 2500);
        });
    });

console.log(calcPromise);
