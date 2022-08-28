import { describe, test, expect } from 'vitest'
import { AppData } from '../AppData'

describe('AppData', () => {
  const testExercises: any[] = [{ test: 1 }]
  const testExerciseRecords: any[] = [{ test: 2 }]
  const testMeasurements: any[] = [{ test: 3 }]
  const testMeasurementRecords: any[] = [{ test: 4 }]
  const testWorkouts: any[] = [{ test: 5 }]
  const testWorkoutRecords: any[] = [{ test: 6 }]
  const testLogs: any[] = [{ test: 7 }]
  const testSettings: any[] = [{ test: 8 }]

  const testParams = {
    exercises: testExercises,
    exerciseRecords: testExerciseRecords,
    measurements: testMeasurements,
    measurementRecords: testMeasurementRecords,
    workouts: testWorkouts,
    workoutRecords: testWorkoutRecords,
    logs: testLogs,
    settings: testSettings,
  }

  test('AppData should have correct properties', () => {
    const model = new AppData(testParams)
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
    const model = new AppData(testParams)
    expect(model.exercises).toEqual(testExercises)
    expect(model.exerciseRecords).toEqual(testExerciseRecords)
    expect(model.measurements).toEqual(testMeasurements)
    expect(model.measurementRecords).toEqual(testMeasurementRecords)
    expect(model.workouts).toEqual(testWorkouts)
    expect(model.workoutRecords).toEqual(testWorkoutRecords)
    expect(model.logs).toEqual(testLogs)
    expect(model.settings).toEqual(testSettings)
  })
})
