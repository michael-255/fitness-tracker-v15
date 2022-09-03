import { AppTable, ExactField } from '@/constants/data-enums'

/**
 * Gets the fields that are visible by default for a table when used for the column select.
 * @param table
 * @returns Default visible fields
 */
export function getTableVisibleColumns(table: AppTable): ExactField[] {
  return {
    [AppTable.EXERCISES]: [ExactField.NAME],
    [AppTable.EXERCISE_RECORDS]: [],
    [AppTable.MEASUREMENTS]: [ExactField.NAME],
    [AppTable.MEASUREMENT_RECORDS]: [],
    [AppTable.WORKOUTS]: [ExactField.NAME],
    [AppTable.WORKOUT_RECORDS]: [],
    [AppTable.LOGS]: [
      ExactField.CREATED_DATE,
      ExactField.SEVERITY,
      ExactField.DETAILS,
      ExactField.NAME,
    ],
    [AppTable.SETTINGS]: [],
  }[table]
}
