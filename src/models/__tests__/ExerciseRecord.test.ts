import { describe, test, expect } from 'vitest'
import { ExerciseRecord } from '@/models/ExerciseRecord'
import { RecordStatus } from '@/constants/data-enums'

describe('ExerciseRecord', () => {
  const testId = 'test-id'
  const testDate = '2022-01-01T00:00:00.000Z'
  const testParentId = 'test-parent-id'
  const testNote = 'test-note'
  const testStatus = RecordStatus.COMPLETED
  const testWeight = [1, 2, 3]
  const testReps = [4, 5, 6]
  const testDistance = [7, 8, 9]
  const testDuration = [10, 11, 12]

  const testParams = {
    id: testId,
    createdDate: testDate,
    parentId: testParentId,
    note: testNote,
    recordStatus: testStatus,
    weightLbsPerSet: testWeight,
    repsPerSet: testReps,
    distanceMilesPerSet: testDistance,
    durationMinutesPerSet: testDuration,
  }

  test('ExerciseRecord should have correct properties', () => {
    const model = new ExerciseRecord(testParams)
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
    const model = new ExerciseRecord(testParams)
    expect(model.id).toBe(testId)
    expect(model.createdDate).toBe(testDate)
    expect(model.parentId).toBe(testParentId)
    expect(model.note).toBe(testNote)
    expect(model.recordStatus).toBe(testStatus)
    expect(model.weightLbsPerSet).toBe(testWeight)
    expect(model.repsPerSet).toBe(testReps)
    expect(model.distanceMilesPerSet).toBe(testDistance)
    expect(model.durationMinutesPerSet).toBe(testDuration)
  })
})
