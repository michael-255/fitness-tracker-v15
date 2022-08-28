import type { Log } from '@/models/Log'
import type { Setting } from './Setting'
import type { Exercise } from './Exercise'
import type { ExerciseRecord } from './ExerciseRecord'
import type { Measurement } from './Measurement'
import type { MeasurementRecord } from './MeasurementRecord'
import type { Workout } from './Workout'
import type { WorkoutRecord } from './WorkoutRecord'

interface AppDataParams {
  exercises?: Exercise[]
  exerciseRecords?: ExerciseRecord[]
  measurements?: Measurement[]
  measurementRecords?: MeasurementRecord[]
  workouts?: Workout[]
  workoutRecords?: WorkoutRecord[]
  logs?: Log[]
  settings?: Setting[]
}

/**
 * AppData Class
 * @param obj AppDataParams
 */
export class AppData {
  exercises?: Exercise[]
  exerciseRecords?: ExerciseRecord[]
  measurements?: Measurement[]
  measurementRecords?: MeasurementRecord[]
  workouts?: Workout[]
  workoutRecords?: WorkoutRecord[]
  logs?: Log[]
  settings?: Setting[]

  constructor({
    exercises = [],
    exerciseRecords = [],
    measurements = [],
    measurementRecords = [],
    workouts = [],
    workoutRecords = [],
    logs = [],
    settings = [],
  }: AppDataParams = {}) {
    this.exercises = exercises
    this.exerciseRecords = exerciseRecords
    this.measurements = measurements
    this.measurementRecords = measurementRecords
    this.workouts = workouts
    this.workoutRecords = workoutRecords
    this.logs = logs
    this.settings = settings
  }
}
