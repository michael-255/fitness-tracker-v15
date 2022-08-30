import { describe, test, expect } from 'vitest'
import { MeasurementRecord } from '@/models/MeasurementRecord'
import { RecordStatus, MeasurementType } from '@/constants/data-enums'

describe('MeasurementRecord', () => {
  const id = 'test-id'
  const createdDate = '2022-01-01T00:00:00.000Z'
  const parentId = 'test-parent-id'
  const note = 'test-note'
  const recordStatus = RecordStatus.COMPLETED
  const parentMeasurementType = MeasurementType.LBS
  const measurementValue = 42

  const params = {
    id,
    createdDate,
    parentId,
    note,
    recordStatus,
    parentMeasurementType,
    measurementValue,
  }

  test('MeasurementRecord should have correct properties', () => {
    const model = new MeasurementRecord(params)
    const keys = Object.keys(model)
    expect(keys.length).toBe(7)
    expect(keys.includes('id')).toBe(true)
    expect(keys.includes('createdDate')).toBe(true)
    expect(keys.includes('parentId')).toBe(true)
    expect(keys.includes('note')).toBe(true)
    expect(keys.includes('recordStatus')).toBe(true)
    expect(keys.includes('parentMeasurementType')).toBe(true)
    expect(keys.includes('measurementValue')).toBe(true)
  })

  test('create MeasurementRecord with params', () => {
    const model = new MeasurementRecord(params)
    expect(model.id).toBe(id)
    expect(model.createdDate).toBe(createdDate)
    expect(model.parentId).toBe(parentId)
    expect(model.note).toBe(note)
    expect(model.recordStatus).toBe(recordStatus)
    expect(model.parentMeasurementType).toBe(parentMeasurementType)
    expect(model.measurementValue).toBe(measurementValue)
  })
})
