import { AppTable, Field } from '@/constants/data-enums'

/**
 * Gets the fields that are visible by default for a table when used for the column select.
 * @param table
 * @returns Default visible fields
 */
export function getTableVisibleColumns(table: AppTable): Field[] {
  return {
    [AppTable.EXERCISES]: [Field.NAME],
    [AppTable.EXERCISE_RECORDS]: [],
    [AppTable.MEASUREMENTS]: [Field.NAME],
    [AppTable.MEASUREMENT_RECORDS]: [],
    [AppTable.WORKOUTS]: [Field.NAME],
    [AppTable.WORKOUT_RECORDS]: [],
    [AppTable.LOGS]: [Field.CREATED_DATE, Field.SEVERITY, Field.DETAILS, Field.NAME],
    [AppTable.SETTINGS]: [],
  }[table]
}
