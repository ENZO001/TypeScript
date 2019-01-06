var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Blue;
console.log(c);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 2] = "Red";
    Color2[Color2["Green"] = 3] = "Green";
    Color2[Color2["Blue"] = 6] = "Blue";
})(Color2 || (Color2 = {}));
;
var c2 = Color2.Green;
console.log(c2);
