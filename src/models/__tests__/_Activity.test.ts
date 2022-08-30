import { describe, test, expect } from 'vitest'
import { _Activity } from '@/models/_Activity'
import { ActivityStatus } from '@/constants/data-enums'

describe('_Activity', () => {
  const id = 'test-id'
  const createdDate = '2022-01-01T00:00:00.000Z'
  const name = 'test-name'
  const description = 'test-description'
  const activityStatus = ActivityStatus.ENABLED

  const params = {
    id,
    createdDate,
    name,
    description,
    activityStatus,
  }

  test('_Activity should have correct properties', () => {
    const model = new _Activity(params)
    const keys = Object.keys(model)
    expect(keys.length).toBe(5)
    expect(keys.includes('id')).toBe(true)
    expect(keys.includes('createdDate')).toBe(true)
    expect(keys.includes('name')).toBe(true)
    expect(keys.includes('description')).toBe(true)
    expect(keys.includes('activityStatus')).toBe(true)
  })

  test('create _Activity with params', () => {
    const model = new _Activity(params)
    expect(model.id).toBe(id)
    expect(model.createdDate).toBe(createdDate)
    expect(model.name).toBe(name)
    expect(model.description).toBe(description)
    expect(model.activityStatus).toBe(activityStatus)
  })
})
