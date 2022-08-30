import { AppTable, ExactField, InputField } from '@/constants/data-enums'

/**
 * Get all the fields used internally by a database class.
 * @param table
 * @returns ExactField[]
 */
export function getTableExactFields(table: AppTable): ExactField[] {
  return {
    [AppTable.EXERCISES]: [
      ExactField.ID,
      ExactField.CREATED_DATE,
      ExactField.NAME,
      ExactField.DESCRIPTION,
      ExactField.ACTIVITY_STATUS,
      ExactField.EXERCISE_TRACKS,
    ],
    [AppTable.EXERCISE_RECORDS]: [
      ExactField.ID,
      ExactField.CREATED_DATE,
      ExactField.PARENT_ID,
      ExactField.NOTE,
      ExactField.RECORD_STATUS,
      ExactField.WEIGHT_LBS_PER_SET,
      ExactField.REPS_PER_SET,
      ExactField.DISTANCE_MILES_PER_SET,
      ExactField.DURATION_MINUTES_PER_SET,
    ],
    [AppTable.MEASUREMENTS]: [
      ExactField.ID,
      ExactField.CREATED_DATE,
      ExactField.NAME,
      ExactField.DESCRIPTION,
      ExactField.ACTIVITY_STATUS,
      ExactField.MEASUREMENT_TYPE,
    ],
    [AppTable.MEASUREMENT_RECORDS]: [
      ExactField.ID,
      ExactField.CREATED_DATE,
      ExactField.PARENT_ID,
      ExactField.NOTE,
      ExactField.RECORD_STATUS,
      ExactField.PARENT_MEASUREMENT_TYPE,
      ExactField.MEASUREMENT_VALUE,
    ],
    [AppTable.WORKOUTS]: [
      ExactField.ID,
      ExactField.CREATED_DATE,
      ExactField.NAME,
      ExactField.DESCRIPTION,
      ExactField.ACTIVITY_STATUS,
      ExactField.EXERCISE_IDS,
    ],
    [AppTable.WORKOUT_RECORDS]: [
      ExactField.ID,
      ExactField.CREATED_DATE,
      ExactField.PARENT_ID,
      ExactField.NOTE,
      ExactField.RECORD_STATUS,
      ExactField.FINISHED_DATE,
      ExactField.EXERCISE_RECORD_IDS,
    ],
    [AppTable.LOGS]: [
      ExactField.ID,
      ExactField.CREATED_DATE,
      ExactField.SEVERITY,
      ExactField.DETAILS,
      ExactField.NAME,
      ExactField.MESSAGE,
      ExactField.STACK,
    ],
    [AppTable.SETTINGS]: [ExactField.KEY, ExactField.VALUE],
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
