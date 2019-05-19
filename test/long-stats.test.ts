import * as mockfs from 'mock-fs'
import { expect } from 'chai'
import { longStats } from '../src/transform/long-stats'

describe('longStats', () => {

  before(() => {
    mockfs({
      '/dir1': {
        'file1': mockfs.file({
          content: 'asdf',
          ctime: new Date(1),
          mtime: new Date(1)
        }),
        'file2': mockfs.file({
          content: 'asdfasdf',
          ctime: new Date(1),
          mtime: new Date(1)
        }),
      }
    })
  })

  after(() => {
    mockfs.restore()
  })

  it('stats on single file', () => {
    let before = {
      0: { name: 'file1', parent: '/dir1' }
    }

    let after = {
      0: { name: 'file1', parent: '/dir1', dateModified: new Date(1), mode: 33206 }
    }

    let result = longStats(before)

    expect(before).to.deep.equal(after)
  })

  it('stats on multiple file', () => {
    let before = {
      0: { name: 'file1', parent: '/dir1' },
      1: { name: 'file2', parent: '/dir1' }
    }

    let after = {
      0: { name: 'file1', parent: '/dir1', dateModified: new Date(1), mode: 33206 },
      1: { name: 'file2', parent: '/dir1', dateModified: new Date(1), mode: 33206 }
    }

    let result = longStats(before)

    expect(before).to.deep.equal(after)
  })
})
