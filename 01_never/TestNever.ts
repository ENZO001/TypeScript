/**
 * never是其他類型(包含null和undefined)的子類型，代表從不會出現的值。
 * 這意味著聲明為never類型的變數只能被never類型所賦值，在函數中它通常表現為
 * 拋出異常或無法執行到終止點(ex: 無限循環)
 */
let x: never;
let y: number;

// x = 123;
x = (() => { throw new Error('exception occur') })();
y = (() => { throw new Error('exception occur') })();

function error(message: string): never {
    throw new Error(message);
}

function loop(): never {
    while (true) {

    }
}