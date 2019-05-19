"use strict";
exports.__esModule = true;
var fs = require("fs");
var readDir = function (path) {
    var rawList = fs.readdirSync(path);
    var list = {};
    rawList.forEach(function (element, index) {
        list[index] = {
            name: element,
            parent: path
        };
    });
    return list;
};
exports.readDir = readDir;
