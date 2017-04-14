/**
 * Created by gangcheng on 16/3/1.
 */

class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        return "Hello," + this.greeting;
    }
}

var greet: Greeter;
greet = new Greeter('cg');
alert(greet.greet());