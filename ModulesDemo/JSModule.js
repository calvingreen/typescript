/**
 * Created by gangcheng on 16/3/17.
 */


var cModule = function(vip) {
    //生命私有成员
    var Yvip = document.getElementById(vip);
    console.log(Yvip);
    YQ = '123456789';

    return {
        Yq: YQ,
        //公开的成员
        add: function(t) {
            if(t >= 12){
                var Yv = t;
                Yvip.innerHTML = '年费:' + Yv + '~~~QQ群:' + this.Yq;
            }else{
                var Mv = t;
                Yvip.innerHTML = '月费:' + Mv;
            }
        }
    }
}

var c = new cModule('vip');
c.Yq = '123123';
c.add(12);