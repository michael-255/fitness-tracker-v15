import { Field } from '@/constants/data-enums'
import { isoToDisplayDate } from '@/utils/luxon'
import { truncateString } from '@/utils/common'
import type { ColumnProps } from '@/constants/types-interfaces'

/**
 * Field display properties for columns in QTables. There should be one for every class field for
 * classes that pair with a database table.
 * @param exactField
 * @returns Object with properties for QTable columns
 */
export function getFieldColumnProps(exactField: Field): ColumnProps {
  /**
   * @see
   * MUST ADD NEW EXACT FIELDS BELOW
   */
  return {
    [Field.ID]: createColumnProps({
      name: Field.ID,
      label: 'Id',
      required: true,
      format: (val: string) => val,
    }),
    [Field.CREATED_DATE]: createColumnProps({
      name: Field.CREATED_DATE,
      label: 'Created Date',
      format: (val: string) => isoToDisplayDate(val),
    }),
    [Field.NAME]: createColumnProps({
      name: Field.NAME,
      label: 'Name',
      format: (val: string) => truncateString(val),
    }),
    [Field.DESCRIPTION]: createColumnProps({
      name: Field.DESCRIPTION,
      label: 'Description',
      format: (val: string) => truncateString(val),
    }),
    [Field.PARENT_ID]: createColumnProps({
      name: Field.PARENT_ID,
      label: 'Parent',
      format: (val: string) => val,
    }),
    [Field.NOTE]: createColumnProps({
      name: Field.NOTE,
      label: 'Note',
      format: (val: string) => truncateString(val),
    }),
    [Field.ACTIVITY_STATUS]: createColumnProps({
      name: Field.ACTIVITY_STATUS,
      label: 'Status',
      format: (val: string) => val,
    }),
    [Field.RECORD_STATUS]: createColumnProps({
      name: Field.RECORD_STATUS,
      label: 'Status',
      format: (val: string) => val,
    }),
    [Field.EXERCISE_TRACKS]: createColumnProps({
      name: Field.EXERCISE_TRACKS,
      label: 'Tracks',
      format: (val: string) => val,
    }),
    [Field.EXERCISE_IDS]: createColumnProps({
      name: Field.EXERCISE_IDS,
      label: 'Exercise Ids',
      format: (val: string) => val,
    }),
    [Field.FINISHED_DATE]: createColumnProps({
      name: Field.FINISHED_DATE,
      label: 'Finished Date',
      format: (val: string) => isoToDisplayDate(val),
    }),
    [Field.EXERCISE_RECORD_IDS]: createColumnProps({
      name: Field.EXERCISE_RECORD_IDS,
      label: 'Record Ids',
      format: (val: string) => val,
    }),
    [Field.MEASUREMENT_TYPE]: createColumnProps({
      name: Field.MEASUREMENT_TYPE,
      label: 'Type',
      format: (val: string) => val,
    }),
    [Field.PARENT_MEASUREMENT_TYPE]: createColumnProps({
      name: Field.PARENT_MEASUREMENT_TYPE,
      label: 'Parent Type',
      format: (val: string) => val,
    }),
    [Field.MEASUREMENT_VALUE]: createColumnProps({
      name: Field.MEASUREMENT_VALUE,
      label: 'Value',
      format: (val: number) => val,
    }),
    [Field.WEIGHT]: createColumnProps({
      name: Field.WEIGHT,
      label: 'Weight (lbs)',
      format: (val: number[]) => val,
    }),
    [Field.REPS]: createColumnProps({
      name: Field.REPS,
      label: 'Reps',
      format: (val: number[]) => val,
    }),
    [Field.DISTANCE]: createColumnProps({
      name: Field.DISTANCE,
      label: 'Distance (miles)',
      format: (val: number[]) => val,
    }),
    [Field.DURATION]: createColumnProps({
      name: Field.DURATION,
      label: 'Duration (minutes)',
      format: (val: number[]) => val,
    }),
    [Field.KEY]: createColumnProps({
      name: Field.KEY,
      label: 'Key',
      format: (val: string) => val,
    }),
    [Field.VALUE]: createColumnProps({
      name: Field.VALUE,
      label: 'Value',
      format: (val: boolean | string | number) => val,
    }),
    [Field.SEVERITY]: createColumnProps({
      name: Field.SEVERITY,
      label: 'Severity',
      format: (val: string) => val,
    }),
    [Field.DETAILS]: createColumnProps({
      name: Field.DETAILS,
      label: 'Details',
      format: (val: string) => truncateString(val),
    }),
    [Field.MESSAGE]: createColumnProps({
      name: Field.MESSAGE,
      label: 'Messages',
      format: (val: string) => truncateString(val),
    }),
    [Field.STACK]: createColumnProps({
      name: Field.STACK,
      label: 'Stack',
      format: (val: string) => truncateString(val),
    }),
  }[exactField]
}

function createColumnProps(columnProps: Partial<ColumnProps>): ColumnProps {
  return {
    name: columnProps.name as Field,
    label: columnProps.label as string,
    align: columnProps?.align || 'left',
    sortable: columnProps?.sortable || true,
    required: columnProps?.required || false,
    field: (row: any) => row[columnProps.name as Field],
    format: columnProps.format as (x: any) => any,
  }
}
