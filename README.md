# listy
### usage:
`node ./build/listy.js <path (optional)> [options]`
options:
`-a, --all`     show hidden files
`-l, --long`    show long version, including date modified and mode
`-r, --reverse` reverse the list order

note: flag options can be mixed and matched, i.e. `-ar` will show all files in reverse order
another note: flags were implemented in a very flexible manner.. I only implemented 3 flags, but the architecture allows me to easily define new transform functions and chain them indefinitely.

### setup:
`npm install`

### run tests:
`npm test`

### key resources:
  + Node FS API comprehensive https://nodejs.org/api/fs.html
  + mock-fs readme https://www.npmjs.com/package/mock-fs
  + mocha testing in typescript https://medium.com/@FizzyInTheHall/run-typescript-mocha-tests-in-visual-studio-code-58e62a173575
  + command line args library, for adding some structure https://www.npmjs.com/package/command-line-args
