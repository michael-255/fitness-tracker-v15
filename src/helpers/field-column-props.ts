import { ExactField } from '@/constants/data-enums'
import { isoToDisplayDate } from '@/utils/luxon'
import { truncateString } from '@/utils/common'
import type { ColumnProps } from '@/constants/types-interfaces'

/**
 * Field display properties for columns in QTables. There should be one for every class field for
 * classes that pair with a database table.
 * @param exactField
 * @returns Object with properties for QTable columns
 */
export function getExactFieldColumnProps(exactField: ExactField): ColumnProps {
  /**
   * @see
   * MUST ADD NEW EXACT FIELDS BELOW
   */
  return {
    [ExactField.ID]: createColumnProps({
      name: ExactField.ID,
      label: 'Id',
      required: true,
      format: (val: string) => val,
    }),
    [ExactField.CREATED_DATE]: createColumnProps({
      name: ExactField.CREATED_DATE,
      label: 'Created Date',
      format: (val: string) => isoToDisplayDate(val),
    }),
    [ExactField.NAME]: createColumnProps({
      name: ExactField.NAME,
      label: 'Name',
      format: (val: string) => truncateString(val),
    }),
    [ExactField.DESCRIPTION]: createColumnProps({
      name: ExactField.DESCRIPTION,
      label: 'Description',
      format: (val: string) => truncateString(val),
    }),
    [ExactField.PARENT_ID]: createColumnProps({
      name: ExactField.PARENT_ID,
      label: 'Parent',
      format: (val: string) => val,
    }),
    [ExactField.NOTE]: createColumnProps({
      name: ExactField.NOTE,
      label: 'Note',
      format: (val: string) => truncateString(val),
    }),
    [ExactField.ACTIVITY_STATUS]: createColumnProps({
      name: ExactField.ACTIVITY_STATUS,
      label: 'Status',
      format: (val: string) => val,
    }),
    [ExactField.RECORD_STATUS]: createColumnProps({
      name: ExactField.RECORD_STATUS,
      label: 'Status',
      format: (val: string) => val,
    }),
    [ExactField.EXERCISE_TRACKS]: createColumnProps({
      name: ExactField.EXERCISE_TRACKS,
      label: 'Tracks',
      format: (val: string) => val,
    }),
    [ExactField.EXERCISE_IDS]: createColumnProps({
      name: ExactField.EXERCISE_IDS,
      label: 'Exercise Ids',
      format: (val: string) => val,
    }),
    [ExactField.FINISHED_DATE]: createColumnProps({
      name: ExactField.FINISHED_DATE,
      label: 'Finished Date',
      format: (val: string) => isoToDisplayDate(val),
    }),
    [ExactField.EXERCISE_RECORD_IDS]: createColumnProps({
      name: ExactField.EXERCISE_RECORD_IDS,
      label: 'Record Ids',
      format: (val: string) => val,
    }),
    [ExactField.MEASUREMENT_TYPE]: createColumnProps({
      name: ExactField.MEASUREMENT_TYPE,
      label: 'Type',
      format: (val: string) => val,
    }),
    [ExactField.PARENT_MEASUREMENT_TYPE]: createColumnProps({
      name: ExactField.PARENT_MEASUREMENT_TYPE,
      label: 'Parent Type',
      format: (val: string) => val,
    }),
    [ExactField.MEASUREMENT_VALUE]: createColumnProps({
      name: ExactField.MEASUREMENT_VALUE,
      label: 'Value',
      format: (val: number) => val,
    }),
    [ExactField.WEIGHT_LBS_PER_SET]: createColumnProps({
      name: ExactField.WEIGHT_LBS_PER_SET,
      label: 'Weight (lbs)',
      format: (val: number[]) => val,
    }),
    [ExactField.REPS_PER_SET]: createColumnProps({
      name: ExactField.REPS_PER_SET,
      label: 'Reps',
      format: (val: number[]) => val,
    }),
    [ExactField.DISTANCE_MILES_PER_SET]: createColumnProps({
      name: ExactField.DISTANCE_MILES_PER_SET,
      label: 'Distance (miles)',
      format: (val: number[]) => val,
    }),
    [ExactField.DURATION_MINUTES_PER_SET]: createColumnProps({
      name: ExactField.DURATION_MINUTES_PER_SET,
      label: 'Duration (minutes)',
      format: (val: number[]) => val,
    }),
    [ExactField.KEY]: createColumnProps({
      name: ExactField.KEY,
      label: 'Key',
      format: (val: string) => val,
    }),
    [ExactField.VALUE]: createColumnProps({
      name: ExactField.VALUE,
      label: 'Value',
      format: (val: boolean | string | number) => val,
    }),
    [ExactField.SEVERITY]: createColumnProps({
      name: ExactField.SEVERITY,
      label: 'Severity',
      format: (val: string) => val,
    }),
    [ExactField.DETAILS]: createColumnProps({
      name: ExactField.DETAILS,
      label: 'Details',
      format: (val: string) => truncateString(val),
    }),
    [ExactField.MESSAGE]: createColumnProps({
      name: ExactField.MESSAGE,
      label: 'Messages',
      format: (val: string) => truncateString(val),
    }),
    [ExactField.STACK]: createColumnProps({
      name: ExactField.STACK,
      label: 'Stack',
      format: (val: string) => truncateString(val),
    }),
  }[exactField]
}

function createColumnProps(columnProps: Partial<ColumnProps>): ColumnProps {
  return {
    name: columnProps.name as ExactField,
    label: columnProps.label as string,
    align: columnProps?.align || 'left',
    sortable: columnProps?.sortable || true,
    required: columnProps?.required || false,
    field: (row: any) => row[columnProps.name as ExactField],
    format: columnProps.format as (x: any) => any,
  }
}
