/**
 * Created by gangcheng on 16/2/29.
 */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var colorName = Color[1];
var c = Color.Red;
function tell() {
    alert(c);
}
tell();
//# sourceMappingURL=EnumDemo.js.map