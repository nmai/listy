import * as fs from 'fs'
import * as fpath from 'path'
import { DirList } from '../interface/dirlist'

const longStats = function(list: DirList): DirList {
  const length = Object.keys(list).length

  for (let i = 0; i < length; i++) {
    let dirent = list[i]
    let fullPath = fpath.join(dirent.parent, dirent.name)

    let stats = fs.lstatSync(fullPath)
    dirent.dateModified = new Date(stats.mtimeMs)
    dirent.mode = stats.mode
  }

  return list
}

export { longStats }