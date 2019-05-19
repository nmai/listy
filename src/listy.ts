import * as fspath from 'path'
import * as CommandLineArgs from 'command-line-args'
import { longStats } from './transform/long-stats'
import { reverse } from './transform/reverse'
import { hideHidden } from './transform/hide-hidden'
import { stringifyList } from './util/stringify-list'
import { readDir } from './util/read-dir'

// Define the arguments we can accept from command line
let optionDefinitions = [
  { name: 'path', type: String, defaultOption: true },
  { name: 'long', alias: 'l', type: Boolean },
  { name: 'all', alias: 'a', type: Boolean },
  { name: 'reverse', alias: 'r', type: Boolean}
]

// Resolve an absolute path
let { path, ...flags } = CommandLineArgs(optionDefinitions)
let givenPath = path || ''
let resolvedPath 

if (fspath.isAbsolute(givenPath))
  resolvedPath = givenPath
else
  resolvedPath = fspath.join(process.cwd(), givenPath)

// Grab the list of files/directories at the resolved path
let list = readDir(resolvedPath)

// Apply flag transforms to the data
if ( ! flags.all)
  list = hideHidden(list)

if (flags.long)
  list = longStats(list)

if (flags.reverse)
  list = reverse(list)

// Deliver results :)
console.log(stringifyList(list))
