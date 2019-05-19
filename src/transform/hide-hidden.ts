import { DirList } from '../interface/dirlist'

const hideHidden = function (list: DirList ): DirList {
  let offset = 0
  const length = Object.keys(list).length

  for (let i = 0; i < length; i ++) {
    let dirent = list[i]
    delete list[i]

    if (dirent.name.charAt(0) === '.')
      offset++
    else
      list[i - offset] = dirent
  }

  return list
}

export { hideHidden }