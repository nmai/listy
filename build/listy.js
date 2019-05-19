"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
exports.__esModule = true;
var fspath = require("path");
var CommandLineArgs = require("command-line-args");
var long_stats_1 = require("./transform/long-stats");
var reverse_1 = require("./transform/reverse");
var hide_hidden_1 = require("./transform/hide-hidden");
var stringify_list_1 = require("./util/stringify-list");
var read_dir_1 = require("./util/read-dir");
// Define the arguments we can accept from command line
var optionDefinitions = [
    { name: 'path', type: String, defaultOption: true },
    { name: 'long', alias: 'l', type: Boolean },
    { name: 'all', alias: 'a', type: Boolean },
    { name: 'reverse', alias: 'r', type: Boolean }
];
// Resolve an absolute path
var _a = CommandLineArgs(optionDefinitions), path = _a.path, flags = __rest(_a, ["path"]);
var givenPath = path || '';
var resolvedPath;
if (fspath.isAbsolute(givenPath))
    resolvedPath = givenPath;
else
    resolvedPath = fspath.join(process.cwd(), givenPath);
// Grab the list of files/directories at the resolved path
var list = read_dir_1.readDir(resolvedPath);
// Apply flag transforms to the data
if (!flags.all)
    list = hide_hidden_1.hideHidden(list);
if (flags.long)
    list = long_stats_1.longStats(list);
if (flags.reverse)
    list = reverse_1.reverse(list);
// Deliver results :)
console.log(stringify_list_1.stringifyList(list));
