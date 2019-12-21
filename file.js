"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var _a;
var period = 1;
var baseUrl = 'http://localhost';
var firstName = 'Ihor';
var account = {
    firstName: firstName,
    getName: function () {
        return this.firstName;
    },
};
var p = __assign({}, account);
var dates = [1, 2, 3];
var newDates = __spreadArrays(dates);
var myName = account.firstName;
var secondDate = dates[1];
for (var _i = 0, dates_1 = dates; _i < dates_1.length; _i++) {
    var date = dates_1[_i];
    console.log(date);
}
var sum = function (a, b) { return a + b; };
var Point = /** @class */ (function () {
    function Point() {
        this.x = 1;
        this.y = 2;
    }
    Point.prototype.sum = function () {
        return this.x + this.y;
    };
    return Point;
}());
function userMassage(_a, _b) {
    var start = _a[0], end = _a[1];
    var newName = _b.firstName;
    return "" + start + newName + end;
}
var b = (_a = account) === null || _a === void 0 ? void 0 : _a.firstName; // ?? sum(1, 2);
