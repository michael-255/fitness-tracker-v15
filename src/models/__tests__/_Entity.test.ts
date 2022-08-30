import { describe, test, expect } from 'vitest'
import { _Entity } from '@/models/_Entity'

describe('_Entity', () => {
  const id = 'test-id'
  const createdDate = '2022-01-01T00:00:00.000Z'

  const params = {
    id,
    createdDate,
  }

  test('_Entity should have correct properties', () => {
    const model = new _Entity(params)
    const keys = Object.keys(model)
    expect(keys.length).toBe(2)
    expect(keys.includes('id')).toBe(true)
    expect(keys.includes('createdDate')).toBe(true)
  })

  test('create _Entity with params', () => {
    const model = new _Entity(params)
    expect(model.id).toBe(id)
    expect(model.createdDate).toBe(createdDate)
  })
})
