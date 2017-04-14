/**
 * Created by gangcheng on 16/3/16.
 */

//函数
//function printLabel(labelObj: {label: string}) {
//    console.log(labelObj.label);
//}
//var myObj = {label: 'Hello'};
//console.log(myObj);
//printLabel(myObj);

//创建接口
//interface LabelValue {
//    label: string;
//}
//
//function printLabel(labelObj: LabelValue){
//    console.log(labelObj);
//}
//
//var myObj = {label: 'hello'};
//printLabel(myObj);


//可选属性
//interface USB {
//    name?: string;
//    age?: number;
//}
//
//function printUSB(pu: USB){
//    console.log(pu.name);
//    //console.log(pu.age);
//}
//
//var pu = {name: 'ime'};
//printUSB(pu);


//函数类型
//interface SearchFunc {
//    (source: string, subString: string): boolean;
//}
//
//var mySearch: SearchFunc;
//mySearch = function(source: string, subString: string) {
//    var result = source.search(subString);
//    if(result != -1){
//        return true;
//    }else{
//        return false;
//    }
//}

//数组类型
//interface StringArray {
//    [index: number]: string;
//}
//
//var myArray: StringArray;
//myArray = ['iwen', 'ime'];
//alert(myArray[1]);

//类类型
//interface ClockInterface {
//    currentTime: Date;
//    setTime(d: Date);
//}
//
//class Clock implements ClockInterface {
//    currentTime: Date;
//    setTime(d: Date){
//        this.currentTime = d;
//    }
//    constructor(h: number, m: number){
//
//    }
//}



//接口继承
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends  Shape,PenStroke {
    sideLength: number;
}


var s = <Square>{};
s.color = 'blue';
s.penWidth = 10;
s.sideLength = 10;

//混合类型
interface Counter {
    interval: number;
    reset(): void;
    (start: number): string;
}

var c: Counter;
c(10);
c.reset();
