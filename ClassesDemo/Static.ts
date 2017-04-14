/**
 * Created by gangcheng on 16/3/1.
 */


class Person {
    static name: string;

    tell(){
        alert('姓名:' + Person.name);
    }
}

var p = new Person();
Person.name = 'cg';
p.tell();