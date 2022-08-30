import { AppTable } from '@/constants/data-enums'

/**
 * Gets the singular or plural label for a table.
 * @param table
 * @param type
 * @returns The label string
 */
export function getTableLabel(table: AppTable, type: 'singular' | 'plural'): string {
  if (type === 'singular') {
    return {
      [AppTable.EXERCISES]: 'Exercise',
      [AppTable.EXERCISE_RECORDS]: 'Exercise Record',
      [AppTable.MEASUREMENTS]: 'Measurement',
      [AppTable.MEASUREMENT_RECORDS]: 'Measurement Record',
      [AppTable.WORKOUTS]: 'Workout',
      [AppTable.WORKOUT_RECORDS]: 'Workout Record',
      [AppTable.LOGS]: 'Log',
      [AppTable.SETTINGS]: 'Setting',
    }[table]
  } else {
    return {
      [AppTable.EXERCISES]: 'Exercises',
      [AppTable.EXERCISE_RECORDS]: 'Exercise Records',
      [AppTable.MEASUREMENTS]: 'Measurements',
      [AppTable.MEASUREMENT_RECORDS]: 'Measurement Records',
      [AppTable.WORKOUTS]: 'Workouts',
      [AppTable.WORKOUT_RECORDS]: 'Workout Records',
      [AppTable.LOGS]: 'Logs',
      [AppTable.SETTINGS]: 'Settings',
    }[table]
  }
}
