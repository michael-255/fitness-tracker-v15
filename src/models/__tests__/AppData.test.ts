import { describe, test, expect } from 'vitest'
import { AppData } from '../AppData'

describe('AppData', () => {
  const exercises: any[] = [{ test: 1 }]
  const exerciseRecords: any[] = [{ test: 2 }]
  const measurements: any[] = [{ test: 3 }]
  const measurementRecords: any[] = [{ test: 4 }]
  const workouts: any[] = [{ test: 5 }]
  const workoutRecords: any[] = [{ test: 6 }]
  const logs: any[] = [{ test: 7 }]
  const settings: any[] = [{ test: 8 }]

  const params = {
    exercises,
    exerciseRecords,
    measurements,
    measurementRecords,
    workouts,
    workoutRecords,
    logs,
    settings,
  }

  test('AppData should have correct properties', () => {
    const model = new AppData(params)
    const keys = Object.keys(model)
    expect(keys.length).toBe(8)
    expect(keys.includes('exercises')).toBe(true)
    expect(keys.includes('exerciseRecords')).toBe(true)
    expect(keys.includes('measurements')).toBe(true)
    expect(keys.includes('measurementRecords')).toBe(true)
    expect(keys.includes('workouts')).toBe(true)
    expect(keys.includes('workoutRecords')).toBe(true)
    expect(keys.includes('logs')).toBe(true)
    expect(keys.includes('settings')).toBe(true)
  })

  test('create AppData with params', () => {
    const model = new AppData(params)
    expect(model.exercises).toEqual(exercises)
    expect(model.exerciseRecords).toEqual(exerciseRecords)
    expect(model.measurements).toEqual(measurements)
    expect(model.measurementRecords).toEqual(measurementRecords)
    expect(model.workouts).toEqual(workouts)
    expect(model.workoutRecords).toEqual(workoutRecords)
    expect(model.logs).toEqual(logs)
    expect(model.settings).toEqual(settings)
  })
})
