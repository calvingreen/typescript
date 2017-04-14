/**
 * Created by gangcheng on 16/3/1.
 */
var Person = (function () {
    function Person() {
    }
    Person.prototype.tell = function () {
        alert('姓名:' + Person.name);
    };
    return Person;
})();
var p = new Person();
Person.name = 'cg';
p.tell();
//# sourceMappingURL=Static.js.map