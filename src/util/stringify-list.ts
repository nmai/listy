import { DirList } from '../interface/dirlist'

const stringifyList = function (list: DirList): string {
  const length = Object.keys(list).length
  let output = ''

  // Construct the header first - it's a bit tricky because we should handle empty lists but we also need to check if we are displaying long fields
  if (length > 0 && 'mode' in list[0])
    output += 'Mode\tModified\t\t\t\t\t\t\t'
  
  output += 'Name\n'

  for (let i = 0; i < length; i++) {
    let dirent = list[i]

    if('mode' in dirent)
      output += dirent.mode + '\t'

    if ('dateModified' in dirent)
      output += dirent.dateModified + '\t'
    
    output += dirent.name + '\n'
  }

  return output
}

export { stringifyList }