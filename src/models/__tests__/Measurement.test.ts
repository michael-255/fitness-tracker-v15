import { describe, test, expect } from 'vitest'
import { Measurement } from '@/models/Measurement'
import { ActivityStatus, MeasurementType } from '@/constants/data-enums'

describe('Measurement', () => {
  const id = 'test-id'
  const createdDate = '2022-01-01T00:00:00.000Z'
  const name = 'test-name'
  const description = 'test-description'
  const activityStatus = ActivityStatus.ENABLED
  const measurementType = MeasurementType.LBS

  const params = {
    id,
    createdDate,
    name,
    description,
    activityStatus,
    measurementType,
  }

  test('Measurement should have correct properties', () => {
    const model = new Measurement(params)
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
    const model = new Measurement(params)
    expect(model.id).toBe(id)
    expect(model.createdDate).toBe(createdDate)
    expect(model.name).toBe(name)
    expect(model.description).toBe(description)
    expect(model.activityStatus).toBe(activityStatus)
    expect(model.measurementType).toBe(measurementType)
  })
})
