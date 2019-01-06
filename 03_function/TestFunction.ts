// --------- 函數聲明 ---------
function maxA(x: number, y: number): number {
    return x > y ? x : y;
}







// --------- 函數表達式 ---------
let maxB = function (x: number, y: number): number {
    return x > y ? x : y;
}
// let result1 = maxA(2); // Error
let result2 = maxA(2, 3);
// let result3 = maxA(2, 3, 4); // Error







// --------- 可選參數(必須放在必選參數的後面) ---------
function max(x: number, y?: number): number {
    if (y) {
        return x > y ? x : y;
    } else {
        return x;
    }
}
let result4 = max(2);
let result5 = max(2, 3);
// let result6 = max(2, 3, 4); // Error







// --------- 默認參數 ---------
function maxDefaultValue(x: number, y = 4): number {
    return x > y ? x : y;
}
let result7 = maxDefaultValue(2);
let result8 = maxDefaultValue(2, 3);
let result9 = maxDefaultValue(2, undefined);
// let result10 = maxDefaultValue(2, 3, 4); // Error

function maxDefaultValue2(x = 2, y: number): number {
    return x > y ? x : y;
}
let result11 = maxDefaultValue(2);
let result12 = maxDefaultValue(2, 3);
let result13 = maxDefaultValue(undefined, 4);
// let result14 = maxDefaultValue(2, 3, 4); // Error





// --------- 剩餘參數 ---------
function sum(x: number, ...restOfNumber: number[]): number {
    let result = x;
    for (let i = 0; i < restOfNumber.length; i++) {
        result += restOfNumber[i];
    }
    return result;
}
let result15 = sum(1, 2, 3, 4, 5);
console.log(result15); // 15







// --------- 函數重載 ---------
function css(config: {});
function css(config: string, value: string);
function css(config: any, value?: any) {
    if (typeof config === 'string') {
        // ......
    } else if (typeof config === 'object') {
        // ......
    }

}








// --------- 箭頭函數 ---------
function timeout() {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            console.log('timeout >>>>>>> ' + i);
        }, 1000 * (i + 1));
    }
}
timeout();

function timeout2() {
    for (var i = 0; i < 5; i++) {
        setTimeout(function () {
            console.log('timeout2 >>>>>>> ' + i);
        }, 1000 * (i + 1));
    }

    // var temp = function (i) {
    //     setTimeout(function () {
    //         console.log('timeout2 >>>>>>> ' + i);
    //     }, 1000 * (i + 1));
    // };
    // for (var i = 0; i < 5; i++) {
    //     temp(i);
    // }
}
timeout2();
