/**
 * Created by gangcheng on 16/2/29.
 */

var notSure: any = 10;

notSure = "hello";

notSure = false;

var list: any[] = [123, 'hello', false];

function tell() {
    alert(notSure);
    alert(list[1]);
}

tell();