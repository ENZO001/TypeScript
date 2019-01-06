// 默認從0開始
enum Color {Red, Green, Blue};
let c: Color = Color.Blue;
console.log(c);

// 也可給值
enum Color2 {Red = 2, Green, Blue = 6};
let c2: Color2 = Color2.Green;
console.log(c2); // 3