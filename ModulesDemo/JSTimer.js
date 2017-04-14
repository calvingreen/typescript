/**
 * Created by gangcheng on 16/3/17.
 */


var div = document.createElement('div');
document.body.appendChild(div);
var obj = new Time.Test(div);
var button = document.createElement('button');
button.innerHTML = 'start';
button.onclick = function(){
    obj.start();
}
document.body.appendChild(button);

var btn = document.createElement('button');
btn.innerHTML = 'stop';
btn.onclick = function(){
    obj.stop();
}
document.body.appendChild(btn);