/**
 * Created by gangcheng on 16/3/1.
 */
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello," + this.greeting;
    };
    return Greeter;
})();
var greet;
greet = new Greeter('cg');
alert(greet.greet());
//# sourceMappingURL=Greeter.js.map