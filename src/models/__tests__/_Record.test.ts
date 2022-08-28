import { describe, test, expect } from 'vitest'
import { _Record } from '@/models/_Record'
import { RecordStatus } from '@/constants/data-enums'

describe('_Record', () => {
  const testId = 'test-id'
  const testDate = '2022-01-01T00:00:00.000Z'
  const testParentId = 'test-parent-id'
  const testNote = 'test-note'
  const testStatus = RecordStatus.COMPLETED

  const testParams = {
    id: testId,
    createdDate: testDate,
    parentId: testParentId,
    note: testNote,
    recordStatus: testStatus,
  }

  test('_Record should have correct properties', () => {
    const model = new _Record(testParams)
    const keys = Object.keys(model)
    expect(keys.length).toBe(5)
    expect(keys.includes('id')).toBe(true)
    expect(keys.includes('createdDate')).toBe(true)
    expect(keys.includes('parentId')).toBe(true)
    expect(keys.includes('note')).toBe(true)
    expect(keys.includes('recordStatus')).toBe(true)
  })

  test('create _Record with params', () => {
    const model = new _Record(testParams)
    expect(model.id).toBe(testId)
    expect(model.createdDate).toBe(testDate)
    expect(model.parentId).toBe(testParentId)
    expect(model.note).toBe(testNote)
    expect(model.recordStatus).toBe(testStatus)
  })
})
