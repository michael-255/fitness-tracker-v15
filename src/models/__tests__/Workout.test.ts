import { describe, test, expect } from 'vitest'
import { Workout } from '@/models/Workout'
import { ActivityStatus } from '@/constants/data-enums'

describe('Workout', () => {
  const testId = 'test-id'
  const testDate = '2022-01-01T00:00:00.000Z'
  const testName = 'test-name'
  const testDescription = 'test-description'
  const testStatus = ActivityStatus.ENABLED
  const testExerciseIds = ['id-1', 'id-2']

  const testParams = {
    id: testId,
    createdDate: testDate,
    name: testName,
    description: testDescription,
    activityStatus: testStatus,
    exerciseIds: testExerciseIds,
  }

  test('Workout should have correct properties', () => {
    const model = new Workout(testParams)
    const keys = Object.keys(model)
    expect(keys.length).toBe(6)
    expect(keys.includes('id')).toBe(true)
    expect(keys.includes('createdDate')).toBe(true)
    expect(keys.includes('name')).toBe(true)
    expect(keys.includes('description')).toBe(true)
    expect(keys.includes('activityStatus')).toBe(true)
    expect(keys.includes('exerciseIds')).toBe(true)
  })

  test('create Workout with params', () => {
    const model = new Workout(testParams)
    expect(model.id).toBe(testId)
    expect(model.createdDate).toBe(testDate)
    expect(model.name).toBe(testName)
    expect(model.description).toBe(testDescription)
    expect(model.activityStatus).toBe(testStatus)
    expect(model.exerciseIds).toBe(testExerciseIds)
  })
})
