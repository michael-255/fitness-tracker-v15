import { describe, test, expect } from 'vitest'
import { _Record } from '@/models/_Record'
import { RecordStatus } from '@/constants/data-enums'

describe('_Record', () => {
  const id = 'test-id'
  const createdDate = '2022-01-01T00:00:00.000Z'
  const parentId = 'test-parent-id'
  const note = 'test-note'
  const recordStatus = RecordStatus.COMPLETED

  const params = {
    id,
    createdDate,
    parentId,
    note,
    recordStatus,
  }

  test('_Record should have correct properties', () => {
    const model = new _Record(params)
    const keys = Object.keys(model)
    expect(keys.length).toBe(5)
    expect(keys.includes('id')).toBe(true)
    expect(keys.includes('createdDate')).toBe(true)
    expect(keys.includes('parentId')).toBe(true)
    expect(keys.includes('note')).toBe(true)
    expect(keys.includes('recordStatus')).toBe(true)
  })

  test('create _Record with params', () => {
    const model = new _Record(params)
    expect(model.id).toBe(id)
    expect(model.createdDate).toBe(createdDate)
    expect(model.parentId).toBe(parentId)
    expect(model.note).toBe(note)
    expect(model.recordStatus).toBe(recordStatus)
  })
})
