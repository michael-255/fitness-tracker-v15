import { describe, test, expect } from 'vitest'
import { WorkoutRecord } from '@/models/WorkoutRecord'
import { RecordStatus } from '@/constants/data-enums'

describe('WorkoutRecord', () => {
  const id = 'test-id'
  const createdDate = '2022-01-01T00:00:00.000Z'
  const parentId = 'test-parent-id'
  const note = 'test-note'
  const recordStatus = RecordStatus.COMPLETED
  const finishedDate = '2022-01-02T00:00:00.000Z'
  const exerciseRecordIds = ['id-1', 'id-2']

  const params = {
    id,
    createdDate,
    parentId,
    note,
    recordStatus,
    finishedDate,
    exerciseRecordIds,
  }

  test('WorkoutRecord should have correct properties', () => {
    const model = new WorkoutRecord(params)
    const keys = Object.keys(model)
    expect(keys.length).toBe(7)
    expect(keys.includes('id')).toBe(true)
    expect(keys.includes('createdDate')).toBe(true)
    expect(keys.includes('parentId')).toBe(true)
    expect(keys.includes('note')).toBe(true)
    expect(keys.includes('recordStatus')).toBe(true)
    expect(keys.includes('finishedDate')).toBe(true)
    expect(keys.includes('exerciseRecordIds')).toBe(true)
  })

  test('create WorkoutRecord with params', () => {
    const model = new WorkoutRecord(params)
    expect(model.id).toBe(id)
    expect(model.createdDate).toBe(createdDate)
    expect(model.parentId).toBe(parentId)
    expect(model.note).toBe(note)
    expect(model.recordStatus).toBe(recordStatus)
    expect(model.finishedDate).toBe(finishedDate)
    expect(model.exerciseRecordIds).toBe(exerciseRecordIds)
  })
})
