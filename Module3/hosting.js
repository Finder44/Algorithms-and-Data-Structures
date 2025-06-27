for (let j = 0; j < 3; j++) {
    var globalVar = 'v_' + j;
    let scopedLet = 'l_' + j;
    const scopedConst = 'c_' + j;
}

console.log('globalVar после выполнения цикла:', globalVar);
console.log('scopedLet после выполнения цикла:', scopedLet);
console.log('scopedConst после выполнения цикла:', scopedConst);

//видно после выполнения цикла
//var
//не видно
//let
//const
