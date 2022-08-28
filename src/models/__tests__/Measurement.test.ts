import { describe, test, expect } from 'vitest'
import { Measurement } from '@/models/Measurement'
import { ActivityStatus, MeasurementType } from '@/constants/data-enums'

describe('Measurement', () => {
  const testId = 'test-id'
  const testDate = '2022-01-01T00:00:00.000Z'
  const testName = 'test-name'
  const testDescription = 'test-description'
  const testStatus = ActivityStatus.ENABLED
  const testType = MeasurementType.LBS

  const testParams = {
    id: testId,
    createdDate: testDate,
    name: testName,
    description: testDescription,
    activityStatus: testStatus,
    measurementType: testType,
  }

  test('Measurement should have correct properties', () => {
    const model = new Measurement(testParams)
    const keys = Object.keys(model)
    expect(keys.length).toBe(6)
    expect(keys.includes('id')).toBe(true)
    expect(keys.includes('createdDate')).toBe(true)
    expect(keys.includes('name')).toBe(true)
    expect(keys.includes('description')).toBe(true)
    expect(keys.includes('activityStatus')).toBe(true)
    expect(keys.includes('measurementType')).toBe(true)
  })

  test('create Measurement with params', () => {
    const model = new Measurement(testParams)
    expect(model.id).toBe(testId)
    expect(model.createdDate).toBe(testDate)
    expect(model.name).toBe(testName)
    expect(model.description).toBe(testDescription)
    expect(model.activityStatus).toBe(testStatus)
    expect(model.measurementType).toBe(testType)
  })
})
