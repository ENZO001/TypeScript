// --------- 函數聲明 ---------
function maxA(x, y) {
    return x > y ? x : y;
}
// --------- 函數表達式 ---------
var maxB = function (x, y) {
    return x > y ? x : y;
};
// let result1 = maxA(2); // Error
var result2 = maxA(2, 3);
// let result3 = maxA(2, 3, 4); // Error
// --------- 可選參數(必須放在必選參數的後面) ---------
function max(x, y) {
    if (y) {
        return x > y ? x : y;
    }
    else {
        return x;
    }
}
var result4 = max(2);
var result5 = max(2, 3);
// let result6 = max(2, 3, 4); // Error
// --------- 默認參數 ---------
function maxDefaultValue(x, y) {
    if (y === void 0) { y = 4; }
    return x > y ? x : y;
}
var result7 = maxDefaultValue(2);
var result8 = maxDefaultValue(2, 3);
var result9 = maxDefaultValue(2, undefined);
// let result10 = maxDefaultValue(2, 3, 4); // Error
function maxDefaultValue2(x, y) {
    if (x === void 0) { x = 2; }
    return x > y ? x : y;
}
var result11 = maxDefaultValue(2);
var result12 = maxDefaultValue(2, 3);
var result13 = maxDefaultValue(undefined, 4);
// let result14 = maxDefaultValue(2, 3, 4); // Error
// --------- 剩餘參數 ---------
function sum(x) {
    var restOfNumber = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfNumber[_i - 1] = arguments[_i];
    }
    var result = x;
    for (var i = 0; i < restOfNumber.length; i++) {
        result += restOfNumber[i];
    }
    return result;
}
var result15 = sum(1, 2, 3, 4, 5);
console.log(result15); // 15
function css(config, value) {
    if (typeof config === 'string') {
        // ......
    }
    else if (typeof config === 'object') {
        // ......
    }
}
// --------- 箭頭函數 ---------
function timeout() {
    var _loop_1 = function (i) {
        setTimeout(function () {
            console.log('timeout >>>>>>> ' + i);
        }, 1000 * (i + 1));
    };
    for (var i = 0; i < 5; i++) {
        _loop_1(i);
    }
}
timeout();
function timeout2() {
    var temp = function (i) {
        setTimeout(function () {
            console.log('timeout2 >>>>>>> ' + i);
        }, 1000 * (i + 1));
    };
    for (var i = 0; i < 5; i++) {
        temp(i);
    }
    // for (var i = 0; i < 5; i++) {
    //     setTimeout(function () {
    //         console.log('timeout2 >>>>>>> ' + i);
    //     }, 1000 * (i + 1));
    // }
}
timeout2();
