import { describe, test, expect } from 'vitest'
import { MeasurementRecord } from '@/models/MeasurementRecord'
import { RecordStatus, MeasurementType } from '@/constants/data-enums'

describe('MeasurementRecord', () => {
  const testId = 'test-id'
  const testDate = '2022-01-01T00:00:00.000Z'
  const testParentId = 'test-parent-id'
  const testNote = 'test-note'
  const testStatus = RecordStatus.COMPLETED
  const testParentType = MeasurementType.LBS
  const testValue = 42

  const testParams = {
    id: testId,
    createdDate: testDate,
    parentId: testParentId,
    note: testNote,
    recordStatus: testStatus,
    parentType: testParentType,
    measurementValue: testValue,
  }

  test('MeasurementRecord should have correct properties', () => {
    const model = new MeasurementRecord(testParams)
    const keys = Object.keys(model)
    expect(keys.length).toBe(7)
    expect(keys.includes('id')).toBe(true)
    expect(keys.includes('createdDate')).toBe(true)
    expect(keys.includes('parentId')).toBe(true)
    expect(keys.includes('note')).toBe(true)
    expect(keys.includes('recordStatus')).toBe(true)
    expect(keys.includes('parentType')).toBe(true)
    expect(keys.includes('measurementValue')).toBe(true)
  })

  test('create MeasurementRecord with params', () => {
    const model = new MeasurementRecord(testParams)
    expect(model.id).toBe(testId)
    expect(model.createdDate).toBe(testDate)
    expect(model.parentId).toBe(testParentId)
    expect(model.note).toBe(testNote)
    expect(model.recordStatus).toBe(testStatus)
    expect(model.parentType).toBe(testParentType)
    expect(model.measurementValue).toBe(testValue)
  })
})
