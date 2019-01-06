// 元組類型用來表示已知元素數量和類型的數組，各元素的類型不必相同
let x: [string, number];
x = ['Angular', 25];
// x = [25, 'Angular']; // 會報錯
console.log(x[0]);
console.log(x[1]);
