import { AppTable, Operation } from '@/constants/data-enums'

/**
 * Gets all the supported operations for a table.
 * @param table
 * @returns Operation[]
 */
export function getTableOperations(table: AppTable): Operation[] {
  return {
    [AppTable.EXERCISES]: [Operation.INSPECT],
    [AppTable.EXERCISE_RECORDS]: [Operation.INSPECT],
    [AppTable.MEASUREMENTS]: [Operation.INSPECT],
    [AppTable.MEASUREMENT_RECORDS]: [Operation.INSPECT],
    [AppTable.WORKOUTS]: [Operation.INSPECT],
    [AppTable.WORKOUT_RECORDS]: [Operation.INSPECT],
    [AppTable.LOGS]: [Operation.DELETE, Operation.CLEAR, Operation.INSPECT],
    [AppTable.SETTINGS]: [Operation.INSPECT],
  }[table]
}

/**
 * Check table operation to see if it is supported.
 * @param table
 * @param operation
 * @returns boolean
 */
export function isSupported(table: AppTable, operation: Operation): boolean {
  return getTableOperations(table).includes(operation)
}
