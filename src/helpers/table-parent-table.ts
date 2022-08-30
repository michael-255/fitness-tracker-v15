import { AppTable } from '@/constants/data-enums'

/**
 * Gets the parent table for a table if it has one.
 * @param table
 * @returns AppTable or null
 */
export function getTableParentTable(table: AppTable): AppTable | null {
  return {
    [AppTable.EXERCISES]: null,
    [AppTable.EXERCISE_RECORDS]: AppTable.EXERCISES,
    [AppTable.MEASUREMENTS]: null,
    [AppTable.MEASUREMENT_RECORDS]: AppTable.MEASUREMENTS,
    [AppTable.WORKOUTS]: null,
    [AppTable.WORKOUT_RECORDS]: AppTable.WORKOUTS,
    [AppTable.LOGS]: null,
    [AppTable.SETTINGS]: null,
  }[table]
}
