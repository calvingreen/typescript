/**
 * Created by gangcheng on 16/3/16.
 */

var people = {
    name: ['iwen', 'ime', 'if', 'bean'],
    getName: function(){
        return () => {
            var i = Math.floor(Math.random() * 4);
            return {
                n: this.name[i]
            }
        }
    }
}

var my_name = people.getName();
alert("名字:" + my_name().n);