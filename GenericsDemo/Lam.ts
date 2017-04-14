/**
 * Created by gangcheng on 16/3/17.
 */


var myFunc: (a: number) => string = function(a: number): string{
    return 'hello' + a;
}

alert(myFunc(2));