import { expect } from 'chai'
import { reverse } from '../src/transform/reverse'

describe('reverse', () => {
  it('single item', () => {
    let before = {
      0: { name: 'file1', parent: '/dir1' }
    }

    let after = {
      0: { name: 'file1', parent: '/dir1' }
    }

    let result = reverse(before)

    expect(before).to.deep.equal(after)
  })

  it('even number of items', () => {
    let before = {
      0: { name: 'file1', parent: '/dir1' },
      1: { name: 'file2', parent: '/dir1' },
      2: { name: 'file3', parent: '/dir1' },
      3: { name: 'file4', parent: '/dir1' }
    }

    let after = {
      0: { name: 'file4', parent: '/dir1' },
      1: { name: 'file3', parent: '/dir1' },
      2: { name: 'file2', parent: '/dir1' },
      3: { name: 'file1', parent: '/dir1' }
    }

    let result = reverse(before)

    expect(before).to.deep.equal(after)
  })

  it('odd number of items', () => {
    let before = {
      0: { name: 'file1', parent: '/dir1' },
      1: { name: 'file2', parent: '/dir1' },
      2: { name: 'file3', parent: '/dir1' },
      3: { name: 'file4', parent: '/dir1' },
      4: { name: 'file5', parent: '/dir1' }
    }

    let after = {
      0: { name: 'file5', parent: '/dir1' },
      1: { name: 'file4', parent: '/dir1' },
      2: { name: 'file3', parent: '/dir1' },
      3: { name: 'file2', parent: '/dir1' },
      4: { name: 'file1', parent: '/dir1' }
    }

    let result = reverse(before)

    expect(before).to.deep.equal(after)
  })
})
