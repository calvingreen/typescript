/**
 * Created by gangcheng on 16/2/29.
 */
var Hello = (function () {
    function Hello() {
    }
    Hello.prototype.tell = function () {
        return this.name;
    };
    Object.defineProperty(Hello.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newname) {
            this._name = newname;
        },
        enumerable: true,
        configurable: true
    });
    return Hello;
})();
var h = new Hello();
h.name = 'cg';
alert(h.tell());
//# sourceMappingURL=Accessors.js.map