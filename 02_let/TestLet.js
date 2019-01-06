function ff(input) {
    var a = 100;
    if (input) {
        var b = a + 1;
        return b;
    }
    // return b; // Error 因為b沒被定義
}
console.log(ff(true)); // 101
// ===================================================
// a++; // Error 不可在聲明前使用
var a;
// ===================================================
// let聲明的變量只在塊級作用域內有效
// let不允許變量被重複聲明 / var 可重複聲明，只會得到最近一次聲明的那個值
var aaa = 2;
console.log(aaa + 3); // 5
var aaa = 3;
console.log(aaa + 3); // 6
var bbb = 2;
// let bbb = 3; // Error
// ===================================================
function funA(x) {
    // let x = 100; // Error 已在參數中聲明
}
// ===================================================
// 增加了判斷條件組成的新的塊級作用域
function funB(condition, x) {
    if (condition) {
        var x_1 = 100;
        return x_1;
    }
    return x;
}
console.log(funB(false, 0));
console.log(funB(true, 50));
