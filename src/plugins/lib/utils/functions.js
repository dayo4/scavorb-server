"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isDef(i) {
    return i !== undefined && i !== null;
}
exports.isDef = isDef;
function isString(i) {
    return isDef(i) && typeof i === 'string';
}
exports.isString = isString;
function isNum(i) {
    return isDef(i) && typeof i === 'number';
}
exports.isNum = isNum;
function isObj(obj) {
    return obj !== null && typeof obj === 'object';
}
exports.isObj = isObj;
function isEmptyObj(obj) {
    return isObj(obj) && Object.keys(obj).length <= 0;
}
exports.isEmptyObj = isEmptyObj;
function hasIt(arr, item) {
    return arr.some(function (x) { return x === item; });
}
exports.hasIt = hasIt;
