let customerName: string = "Enzo";
let customerAge: number = 26;
// 可使用反引號 + ${}，來嵌入變數
let words: string = `這位客人名叫 ${ customerName }，今年${ customerAge }歲`;

console.log(words);