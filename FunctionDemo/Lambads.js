/**
 * Created by gangcheng on 16/3/16.
 */
var people = {
    name: ['iwen', 'ime', 'if', 'bean'],
    getName: function () {
        var _this = this;
        return function () {
            var i = Math.floor(Math.random() * 4);
            return {
                n: _this.name[i]
            };
        };
    }
};
var my_name = people.getName();
alert("名字:" + my_name().n);
//# sourceMappingURL=Lambads.js.map