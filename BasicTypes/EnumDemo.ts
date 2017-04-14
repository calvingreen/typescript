/**
 * Created by gangcheng on 16/2/29.
 */
enum Color {Red, Green, Blue};

var colorName: string = Color[1];

var c: Color = Color.Red;

function tell(){
    alert(c);
}
tell();