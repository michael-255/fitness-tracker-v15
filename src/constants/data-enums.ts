/**
 * These represent the available tables in Dexie for the app and provide the name they are
 * referenced by.
 */
export enum AppTable {
  WORKOUTS = 'workouts',
  WORKOUT_RECORDS = 'workoutRecords',
  EXERCISES = 'exercises',
  EXERCISE_RECORDS = 'exerciseRecords',
  MEASUREMENTS = 'measurements',
  MEASUREMENT_RECORDS = 'measurementRecords',
  LOGS = 'logs',
  SETTINGS = 'settings',
}

/**
 * These are the exact fields used internally by all models that are stored in the database. You
 * should have all the class fields in this enum.
 */
export enum ExactField {
  ID = 'id',
  CREATED_DATE = 'createdDate',
  NAME = 'name',
  DESCRIPTION = 'description',
  PARENT_ID = 'parentId',
  NOTE = 'note',
  ACTIVITY_STATUS = 'activityStatus',
  RECORD_STATUS = 'recordStatus',
  EXERCISE_TRACKS = 'exerciseTracks',
  EXERCISE_IDS = 'exerciseIds',
  FINISHED_DATE = 'finishedDate',
  EXERCISE_RECORD_IDS = 'exerciseRecordIds',
  MEASUREMENT_TYPE = 'measurementType',
  PARENT_MEASUREMENT_TYPE = 'parentMeasurementType',
  MEASUREMENT_VALUE = 'measurementValue',
  WEIGHT_LBS_PER_SET = 'weightLbsPerSet',
  REPS_PER_SET = 'repsPerSet',
  DISTANCE_MILES_PER_SET = 'distanceMilesPerSet',
  DURATION_MINUTES_PER_SET = 'durationMinutesPerSet',
  SEVERITY = 'severity',
  DETAILS = 'details',
  MESSAGE = 'message',
  STACK = 'stack',
  KEY = 'key',
  VALUE = 'value',
}

/**
 * These are the fields that have input components mapped to them. Groups of class fields
 * (ExactField) might have one component that is used to edit them.
 */
export enum InputField {
  ID = 'id',
  CREATED_DATE = 'createdDate',
  NAME = 'name',
  DESCRIPTION = 'description',
  PARENT_ID = 'parentId',
}

/**
 * These are the operations that are supported within the app. Each table may only support a subset
 * of these operations.
 */
export enum Operation {
  NOOP = 'No Operation',
  CREATE = 'Create',
  UPDATE = 'Update',
  DELETE = 'Delete',
  CLEAR = 'Clear',
  INSPECT = 'Inspect',
  REPORT = 'Report',
}

/**
 * These are the keys for the supported settings within the app.
 */
export enum SettingKey {
  DEBUG = 'debug-logging',
  NOTIFY = 'all-alerts',
  INFO = 'save-info-logs',
}

/**
 * Log severity (also known as Log Level)
 */
export enum Severity {
  DEBUG = 'Debug',
  INFO = 'Info',
  WARN = 'Warning',
  ERROR = 'Error',
  CRITICAL = 'Critical',
}

/**
 * Statuses for any child of Activity.
 */
export enum ActivityStatus {
  ENABLED = 'Enabled',
  DISABLED = 'Disabled',
  ARCHIVED = 'Archived',
}

/**
 * Statuses for any child of Record.
 */
export enum RecordStatus {
  IN_PROGRESS = 'In Progress',
  COMPLETED = 'Completed',
  SKIPPED = 'Skipped',
}

/**
 * Unit type for the Measurement.
 */
export enum MeasurementType {
  LBS = 'Lbs',
  INCHES = 'Inches',
  PERCENT = '%',
}

/**
 * Which exercise fields are used by a specific Exercise.
 */
export enum ExerciseTracks {
  MULTIPLE_SETS = 'Multiple Sets',
  WEIGHT_LBS = 'Weight (lbs)',
  REPS = 'Reps',
  DURATION_MINUTES = 'Duration (minutes)',
  DISTANCE_MILES = 'Distance (miles)',
}
