/**
 * Created by gangcheng on 16/2/29.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.print = function () {
        return this.name + ":" + this.age;
    };
    return Person;
})();
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(school) {
        this.school = school;
        _super.call(this, 'cg', 80);
    }
    Student.prototype.tell = function () {
        return this.name + ":" + this.age + ":" + this.school;
    };
    return Student;
})(Person);
var s = new Student('jj');
//s.school = 'aaa';
//s.age = 10;
//s.name = 'cg';
alert(s.tell());
//# sourceMappingURL=Cleasses.js.map