import { describe, test, expect } from 'vitest'
import { _Activity } from '@/models/_Activity'
import { ActivityStatus } from '@/constants/data-enums'

describe('_Activity', () => {
  const testId = 'test-id'
  const testDate = '2022-01-01T00:00:00.000Z'
  const testName = 'test-name'
  const testDescription = 'test-description'
  const testStatus = ActivityStatus.ENABLED

  const testParams = {
    id: testId,
    createdDate: testDate,
    name: testName,
    description: testDescription,
    activityStatus: testStatus,
  }

  test('_Activity should have correct properties', () => {
    const model = new _Activity(testParams)
    const keys = Object.keys(model)
    expect(keys.length).toBe(5)
    expect(keys.includes('id')).toBe(true)
    expect(keys.includes('createdDate')).toBe(true)
    expect(keys.includes('name')).toBe(true)
    expect(keys.includes('description')).toBe(true)
    expect(keys.includes('activityStatus')).toBe(true)
  })

  test('create _Activity with params', () => {
    const model = new _Activity(testParams)
    expect(model.id).toBe(testId)
    expect(model.createdDate).toBe(testDate)
    expect(model.name).toBe(testName)
    expect(model.description).toBe(testDescription)
    expect(model.activityStatus).toBe(testStatus)
  })
})
