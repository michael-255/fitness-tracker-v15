import { describe, test, expect } from 'vitest'
import { Workout } from '@/models/Workout'
import { ActivityStatus } from '@/constants/data-enums'

describe('Workout', () => {
  const id = 'test-id'
  const createdDate = '2022-01-01T00:00:00.000Z'
  const name = 'test-name'
  const description = 'test-description'
  const activityStatus = ActivityStatus.ENABLED
  const exerciseIds = ['id-1', 'id-2']

  const params = {
    id,
    createdDate,
    name,
    description,
    activityStatus,
    exerciseIds,
  }

  test('Workout should have correct properties', () => {
    const model = new Workout(params)
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
    const model = new Workout(params)
    expect(model.id).toBe(id)
    expect(model.createdDate).toBe(createdDate)
    expect(model.name).toBe(name)
    expect(model.description).toBe(description)
    expect(model.activityStatus).toBe(activityStatus)
    expect(model.exerciseIds).toBe(exerciseIds)
  })
})
