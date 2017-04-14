/**
 * Created by gangcheng on 16/3/16.
 */

function attrs(name: string): string;
function attrs(age: number): number;

function attrs(nameorage: any): any {
    if(nameorage && typeof nameorage === 'string'){
        alert('姓名');
    }else{
        alert('年龄');
    }
}

attrs("HELLO");
attrs(10);