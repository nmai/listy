"use strict";
exports.__esModule = true;
var reverse = function (list) {
    var length = Object.keys(list).length;
    for (var i = 0; i < length / 2; i++) {
        var first = list[i];
        var second = list[length - i - 1];
        list[i] = second;
        list[length - i - 1] = first;
    }
    return list;
};
exports.reverse = reverse;
