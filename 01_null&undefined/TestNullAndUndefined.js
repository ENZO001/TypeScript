// tsc .\TestNullAndUndefined.ts --strictNullChecks
// 啟用 --strictNullChecks
var x;
x = 1; // OK
// x = undefined; // Error
// x = null; // Error
var a;
var b;
var c;
a = 1;
b = 1;
c = 1;
// a = undefined; // Error
b = undefined; // OK
c = undefined; // OK
// a = null; // Error
// b = null; // Error
c = null; // OK
// a = b; // Error
// a = c; // Error
b = a; // OK
// b = c; // Error
c = a; // OK
c = b; // OK
