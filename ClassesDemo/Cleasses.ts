/**
 * Created by gangcheng on 16/2/29.
 */

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    print() {
        return this.name + ":" + this.age;
    }
}

class Student extends Person{
    school: string;
    constructor(school: string) {
        this.school = school;
        super('cg', 80);
    }
    tell() {
        return this.name + ":" + this.age + ":" + this.school;
    }
}

var s = new Student('jj');
//s.school = 'aaa';
//s.age = 10;
//s.name = 'cg';

alert(s.tell());