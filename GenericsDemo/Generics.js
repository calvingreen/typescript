/**
 * Created by gangcheng on 16/3/17.
 */
//function Hello(num: number): number {
//    return num;
//}
//function Hello(str: any): any {
//    return str;
//}
//泛型<T>
//function Hello<T>(arg: T): T {
//    return arg;
//}
//
//var output = Hello<string>('hello');
//
//alert(output);
//function Hello<T>(num: T): T {
//    alert(num.length);
//    return num;
//}
//function Hello<T>(str: T[]): T[]{
//    return str;
//}
//
//var list: Array<string> = Hello<string>(['1', '2', '3']);
//for(var i = 0; i< list.length; i++){
//    alert(list[i]);
//}
//泛型类型
//function Hello<T>(arg: T): T{
//    return arg;
//}
//var myHello:<K>(arg: K) => K = Hello;
//alert(myHello('hello'));
//var myHello: {<T>(arg: T): T} = Hello;
//alert(myHello('hello'));
//interface Hello{
//    <T>(arg: T): T;
//}
//function myHello<T>(arg: T): T{
//    return arg;
//}
//
//var MH:Hello = myHello;
//alert(MH<string>('hello'));
//interface Hello<T> {
//    (arg: T): T;
//}
//function myHello<T>(arg: T): T{
//    return arg;
//}
//
//var mh: Hello<number> = myHello;
//alert(mh(100));
//泛型类
var HelloNumber = (function () {
    function HelloNumber() {
    }
    return HelloNumber;
})();
var myHelloNumber = new HelloNumber();
myHelloNumber.zero = 0;
myHelloNumber.add = function (x, y) {
    return x + y;
};
alert(myHelloNumber.zero);
alert(myHelloNumber.add(myHelloNumber.zero, 100));
//# sourceMappingURL=Generics.js.map