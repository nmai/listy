"use strict";
exports.__esModule = true;
var hideHidden = function (list) {
    var offset = 0;
    var length = Object.keys(list).length;
    for (var i = 0; i < length; i++) {
        var dirent = list[i];
        delete list[i];
        if (dirent.name.charAt(0) === '.')
            offset++;
        else
            list[i - offset] = dirent;
    }
    return list;
};
exports.hideHidden = hideHidden;
