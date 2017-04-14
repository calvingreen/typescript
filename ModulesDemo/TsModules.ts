/**
 * Created by gangcheng on 16/3/17.
 */


//interface StringValidator {
//    isAcceptable(s: string): boolean;
//}
//
//var lettersRegexp = /^[A-Za-z]+$/;
//var numberRegexp = /^[0-9]+$]/;
//
//class LettersOnluValidator implements StringValidator {
//
//    isAcceptable(s: string): boolean {
//        return lettersRegexp.test(s);
//    }
//}
//
//class ZipCodeValidator implements StringValidator {
//    isAcceptable(s: string): boolean {
//        return s.length === 5 && numberRegexp.test(s);
//    }
//}


module Validation {
    export interface StringValidator{
        isAcceptable(s: string): boolean;
    }

    var lettersRegexp = /^[A-Za-z]+$/;
    var numberRegexp = /^[0-9]+$]/;

    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }

    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length && numberRegexp.test(s);
        }
    }
}