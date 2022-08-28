import { describe, test, expect } from 'vitest'
import { WorkoutRecord } from '@/models/WorkoutRecord'
import { RecordStatus } from '@/constants/data-enums'

describe('WorkoutRecord', () => {
  const testId = 'test-id'
  const testDate = '2022-01-01T00:00:00.000Z'
  const testParentId = 'test-parent-id'
  const testNote = 'test-note'
  const testStatus = RecordStatus.COMPLETED
  const testFinishedAt = '2022-01-02T00:00:00.000Z'
  const testExerciseRecordIds = ['id-1', 'id-2']

  const testParams = {
    id: testId,
    createdDate: testDate,
    parentId: testParentId,
    note: testNote,
    recordStatus: testStatus,
    finishedAt: testFinishedAt,
    exerciseRecordIds: testExerciseRecordIds,
  }

  test('WorkoutRecord should have correct properties', () => {
    const model = new WorkoutRecord(testParams)
    const keys = Object.keys(model)
    expect(keys.length).toBe(7)
    expect(keys.includes('id')).toBe(true)
    expect(keys.includes('createdDate')).toBe(true)
    expect(keys.includes('parentId')).toBe(true)
    expect(keys.includes('note')).toBe(true)
    expect(keys.includes('recordStatus')).toBe(true)
    expect(keys.includes('finishedAt')).toBe(true)
    expect(keys.includes('exerciseRecordIds')).toBe(true)
  })

  test('create WorkoutRecord with params', () => {
    const model = new WorkoutRecord(testParams)
    expect(model.id).toBe(testId)
    expect(model.createdDate).toBe(testDate)
    expect(model.parentId).toBe(testParentId)
    expect(model.note).toBe(testNote)
    expect(model.recordStatus).toBe(testStatus)
    expect(model.finishedAt).toBe(testFinishedAt)
    expect(model.exerciseRecordIds).toBe(testExerciseRecordIds)
  })
})
