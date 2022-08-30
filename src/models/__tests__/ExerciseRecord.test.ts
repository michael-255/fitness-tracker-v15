import { describe, test, expect } from 'vitest'
import { ExerciseRecord } from '@/models/ExerciseRecord'
import { RecordStatus } from '@/constants/data-enums'

describe('ExerciseRecord', () => {
  const id = 'test-id'
  const createdDate = '2022-01-01T00:00:00.000Z'
  const parentId = 'test-parent-id'
  const note = 'test-note'
  const recordStatus = RecordStatus.COMPLETED
  const weightLbsPerSet = [1, 2, 3]
  const repsPerSet = [4, 5, 6]
  const distanceMilesPerSet = [7, 8, 9]
  const durationMinutesPerSet = [10, 11, 12]

  const params = {
    id,
    createdDate,
    parentId,
    note,
    recordStatus,
    weightLbsPerSet,
    repsPerSet,
    distanceMilesPerSet,
    durationMinutesPerSet,
  }

  test('ExerciseRecord should have correct properties', () => {
    const model = new ExerciseRecord(params)
    const keys = Object.keys(model)
    expect(keys.length).toBe(9)
    expect(keys.includes('id')).toBe(true)
    expect(keys.includes('createdDate')).toBe(true)
    expect(keys.includes('parentId')).toBe(true)
    expect(keys.includes('note')).toBe(true)
    expect(keys.includes('recordStatus')).toBe(true)
    expect(keys.includes('weightLbsPerSet')).toBe(true)
    expect(keys.includes('repsPerSet')).toBe(true)
    expect(keys.includes('distanceMilesPerSet')).toBe(true)
    expect(keys.includes('durationMinutesPerSet')).toBe(true)
  })

  test('create ExerciseRecord with params', () => {
    const model = new ExerciseRecord(params)
    expect(model.id).toBe(id)
    expect(model.createdDate).toBe(createdDate)
    expect(model.parentId).toBe(parentId)
    expect(model.note).toBe(note)
    expect(model.recordStatus).toBe(recordStatus)
    expect(model.weightLbsPerSet).toBe(weightLbsPerSet)
    expect(model.repsPerSet).toBe(repsPerSet)
    expect(model.distanceMilesPerSet).toBe(distanceMilesPerSet)
    expect(model.durationMinutesPerSet).toBe(durationMinutesPerSet)
  })
})
