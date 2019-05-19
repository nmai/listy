import * as fs from 'fs'
import { DirList } from '../interface/dirlist'

const readDir = function (path: string): DirList {
  let rawList = fs.readdirSync(path)
  let list = {}

  rawList.forEach((element, index) => {
    list[index] = {
      name: element,
      parent: path
    }
  })

  return list
}

export { readDir }
