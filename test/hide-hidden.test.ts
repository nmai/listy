import { expect } from 'chai'
import { hideHidden } from '../src/transform/hide-hidden'

describe('hideHidden', () => {

  it('removes nothing from a completely visible list', () => {
    let before = {
      0: { name: 'file1', parent: '/dir1' },
      1: { name: 'file2', parent: '/dir1' },
      2: { name: 'file3', parent: '/dir1' }
    }

    let after = {
      0: { name: 'file1', parent: '/dir1' },
      1: { name: 'file2', parent: '/dir1' },
      2: { name: 'file3', parent: '/dir1' }
    }

    let result = hideHidden(before)

    expect(before).to.deep.equal(after)
  })

  it('removes hidden file first in list', () => {
    let before = {
      0: { name: '.file1', parent: '/dir1' },
      1: { name: 'file2', parent: '/dir1' },
      2: { name: 'file3', parent: '/dir1' }
    }

    let after = {
      0: { name: 'file2', parent: '/dir1' },
      1: { name: 'file3', parent: '/dir1' }
    }

    let result = hideHidden(before)

    expect(before).to.deep.equal(after)
  })

  it('removes hidden file last in list', () => {
    let before = {
      0: { name: 'file1', parent: '/dir1' },
      1: { name: 'file2', parent: '/dir1' },
      2: { name: '.file3', parent: '/dir1' }
    }

    let after = {
      0: { name: 'file1', parent: '/dir1' },
      1: { name: 'file2', parent: '/dir1' }
    }

    let result = hideHidden(before)

    expect(before).to.deep.equal(after)
  })

  it('removes multiple hidden files', () => {
    let before = {
      0: { name: 'file1', parent: '/dir1' },
      1: { name: '.file2', parent: '/dir1' },
      2: { name: 'file3', parent: '/dir1' },
      3: { name: '.file4', parent: '/dir1' },
      4: { name: 'file5', parent: '/dir1' }
    }

    let after = {
      0: { name: 'file1', parent: '/dir1' },
      1: { name: 'file3', parent: '/dir1' },
      2: { name: 'file5', parent: '/dir1' }
    }

    let result = hideHidden(before)

    expect(before).to.deep.equal(after)
  })
})