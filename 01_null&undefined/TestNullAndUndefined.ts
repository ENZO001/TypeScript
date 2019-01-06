// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html
// tsc .\TestNullAndUndefined.ts --strictNullChecks
// 啟用 --strictNullChecks
let x: number;
x = 1; // OK
// x = undefined; // Error
// x = null; // Error

let a: number;
let b: number | undefined;
let c: number | null | undefined;

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