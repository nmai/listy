import { DirList } from '../interface/dirlist'

const reverse = function (list: DirList): DirList {
  const length = Object.keys(list).length

  for (let i = 0; i < length / 2; i++) {
    let first = list[i]
    let second = list[length - i - 1]

    list[i] = second
    list[length - i - 1] = first
  }

  return list
}

export { reverse }