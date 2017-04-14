/**
 * Created by gangcheng on 16/3/1.
 */
//可选参数
function buildName(firstName, lastName) {
    return firstName + " " + lastName;
}
var result1 = buildName('iwen', 'ime');
var result2 = buildName('ime');
function buildName2(firstName, lastName) {
    if (lastName === void 0) { lastName = 'iwen'; }
    return firstName + " " + lastName;
}
var result3 = buildName2('iwen');
var result4 = buildName2('iwen', 'ime');
//# sourceMappingURL=Functions.js.map