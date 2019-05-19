import * as mockfs from 'mock-fs'
import { expect } from 'chai'
import { stringifyList } from '../src/util/stringify-list'
import { readDir } from '../src/util/read-dir'

describe('readDir', () => {
  before(() => {
    mockfs({
      '/dir1': {
        'file1': 'asdf',
        'file2': 'asdfasdf'
      }
    })
  })

  after(() => {
    mockfs.restore()
  })

  it('generate dirlist from given path', () => {
    let actual = {
      0: { name: 'file1', parent: '/dir1' },
      1: { name: 'file2', parent: '/dir1' }
    }

    let result = readDir('/dir1')

    expect(result).to.deep.equal(actual)
  })
})

describe('stringifyList', () => {
  it('short version', () => {
    let list = {
      0: { name: 'file1', parent: '/dir1' },
      1: { name: 'file2', parent: '/dir1' },
      2: { name: 'file3', parent: '/dir1' },
      3: { name: 'file4', parent: '/dir1' }
    }

    let after = 'Name\nfile1\nfile2\nfile3\nfile4\n'

    let result = stringifyList(list)

    expect(result).to.equal(after)
  })

  it('long version', () => {
    let list = {
      0: { name: 'file1', parent: '/dir1', dateModified: new Date(1), mode: 33206 },
      1: { name: 'file2', parent: '/dir1', dateModified: new Date(1), mode: 33206 }
    }
    
    let after = 'Mode\tModified\t\t\t\t\t\t\tName\n33206\tWed Dec 31 1969 16:00:00 GMT-0800 (Pacific Standard Time)\tfile1\n33206\tWed Dec 31 1969 16:00:00 GMT-0800 (Pacific Standard Time)\tfile2\n'

    let result = stringifyList(list)

    expect(result).to.equal(after)
  })
})
