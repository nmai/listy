"use strict";
exports.__esModule = true;
var fs = require("fs");
var fpath = require("path");
var longStats = function (list) {
    var length = Object.keys(list).length;
    for (var i = 0; i < length; i++) {
        var dirent = list[i];
        var fullPath = fpath.join(dirent.parent, dirent.name);
        var stats = fs.lstatSync(fullPath);
        dirent.dateModified = new Date(stats.mtimeMs);
        dirent.mode = stats.mode;
    }
    return list;
};
exports.longStats = longStats;
