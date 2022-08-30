import { AppTable, ExactField } from '@/constants/data-enums'

/**
 * Gets the fields that are visible by default for a table when used for the column select.
 * @param table
 * @returns Default visible fields
 */
export function getTableVisibleColumns(table: AppTable): ExactField[] {
  return {
    [AppTable.EXERCISES]: [ExactField.CREATED_DATE],
    [AppTable.EXERCISE_RECORDS]: [ExactField.CREATED_DATE],
    [AppTable.MEASUREMENTS]: [ExactField.CREATED_DATE],
    [AppTable.MEASUREMENT_RECORDS]: [ExactField.CREATED_DATE],
    [AppTable.WORKOUTS]: [ExactField.CREATED_DATE],
    [AppTable.WORKOUT_RECORDS]: [ExactField.CREATED_DATE],
    [AppTable.LOGS]: [
      ExactField.CREATED_DATE,
      ExactField.SEVERITY,
      ExactField.DETAILS,
      ExactField.NAME,
    ],
    [AppTable.SETTINGS]: [],
  }[table]
}
