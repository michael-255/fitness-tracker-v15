import { AppTable, Field, InputField } from '@/constants/data-enums'

/**
 * Get all the fields used internally by a database class.
 * @param table
 * @returns Field[]
 */
export function getTableFields(table: AppTable): Field[] {
  return {
    [AppTable.EXERCISES]: [
      Field.ID,
      Field.CREATED_DATE,
      Field.NAME,
      Field.DESCRIPTION,
      Field.ACTIVITY_STATUS,
      Field.EXERCISE_TRACKS,
    ],
    [AppTable.EXERCISE_RECORDS]: [
      Field.ID,
      Field.CREATED_DATE,
      Field.PARENT_ID,
      Field.NOTE,
      Field.RECORD_STATUS,
      Field.WEIGHT,
      Field.REPS,
      Field.DISTANCE,
      Field.DURATION,
    ],
    [AppTable.MEASUREMENTS]: [
      Field.ID,
      Field.CREATED_DATE,
      Field.NAME,
      Field.DESCRIPTION,
      Field.ACTIVITY_STATUS,
      Field.MEASUREMENT_TYPE,
    ],
    [AppTable.MEASUREMENT_RECORDS]: [
      Field.ID,
      Field.CREATED_DATE,
      Field.PARENT_ID,
      Field.NOTE,
      Field.RECORD_STATUS,
      Field.PARENT_MEASUREMENT_TYPE,
      Field.MEASUREMENT_VALUE,
    ],
    [AppTable.WORKOUTS]: [
      Field.ID,
      Field.CREATED_DATE,
      Field.NAME,
      Field.DESCRIPTION,
      Field.ACTIVITY_STATUS,
      Field.EXERCISE_IDS,
    ],
    [AppTable.WORKOUT_RECORDS]: [
      Field.ID,
      Field.CREATED_DATE,
      Field.PARENT_ID,
      Field.NOTE,
      Field.RECORD_STATUS,
      Field.FINISHED_DATE,
      Field.EXERCISE_RECORD_IDS,
    ],
    [AppTable.LOGS]: [
      Field.ID,
      Field.CREATED_DATE,
      Field.SEVERITY,
      Field.DETAILS,
      Field.NAME,
      Field.MESSAGE,
      Field.STACK,
    ],
    [AppTable.SETTINGS]: [Field.KEY, Field.VALUE],
  }[table]
}

/**
 * Gets fields that have a related input from the class.
 * @param table
 * @returns InputField[]
 */
export function getTableInputFields(table: AppTable): InputField[] {
  return {
    [AppTable.EXERCISES]: [
      InputField.ID,
      InputField.CREATED_DATE,
      InputField.NAME,
      InputField.DESCRIPTION,
    ],
    [AppTable.EXERCISE_RECORDS]: [InputField.ID, InputField.CREATED_DATE, InputField.PARENT_ID],
    [AppTable.MEASUREMENTS]: [
      InputField.ID,
      InputField.CREATED_DATE,
      InputField.NAME,
      InputField.DESCRIPTION,
    ],
    [AppTable.MEASUREMENT_RECORDS]: [InputField.ID, InputField.CREATED_DATE, InputField.PARENT_ID],
    [AppTable.WORKOUTS]: [
      InputField.ID,
      InputField.CREATED_DATE,
      InputField.NAME,
      InputField.DESCRIPTION,
    ],
    [AppTable.WORKOUT_RECORDS]: [InputField.ID, InputField.CREATED_DATE, InputField.PARENT_ID],
    [AppTable.LOGS]: [],
    [AppTable.SETTINGS]: [],
  }[table]
}
