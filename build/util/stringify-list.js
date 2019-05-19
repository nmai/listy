"use strict";
exports.__esModule = true;
var stringifyList = function (list) {
    var length = Object.keys(list).length;
    var output = '';
    // Construct the header first - it's a bit tricky because we should handle empty lists but we also need to check if we are displaying long fields
    if (length > 0 && 'mode' in list[0])
        output += 'Mode\tModified\t\t\t\t\t\t\t';
    output += 'Name\n';
    for (var i = 0; i < length; i++) {
        var dirent = list[i];
        if ('mode' in dirent)
            output += dirent.mode + '\t';
        if ('dateModified' in dirent)
            output += dirent.dateModified + '\t';
        output += dirent.name + '\n';
    }
    return output;
};
exports.stringifyList = stringifyList;
