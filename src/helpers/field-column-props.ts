import { Field } from '@/constants/data-enums'
import { isoToDisplayDate } from '@/utils/luxon'
import { truncateString } from '@/utils/common'
import type { DataTableProps } from '@/constants/types-interfaces'

/**
 * Field display properties for columns in QTables. There should be one for every class field for
 * classes that pair with a database table.
 * @param exactField
 * @returns Object with properties for QTable columns
 */
export function getFieldDataTableProps(exactField: Field): DataTableProps {
  /**
   * @see
   * MUST ADD NEW EXACT FIELDS BELOW
   */
  return {
    [Field.ID]: createDataTableProps({
      name: Field.ID,
      label: 'Id',
      required: true,
      format: (val: string) => val,
    }),
    [Field.CREATED_DATE]: createDataTableProps({
      name: Field.CREATED_DATE,
      label: 'Created Date',
      format: (val: string) => isoToDisplayDate(val),
    }),
    [Field.NAME]: createDataTableProps({
      name: Field.NAME,
      label: 'Name',
      format: (val: string) => truncateString(val),
    }),
    [Field.DESCRIPTION]: createDataTableProps({
      name: Field.DESCRIPTION,
      label: 'Description',
      format: (val: string) => truncateString(val),
    }),
    [Field.PARENT_ID]: createDataTableProps({
      name: Field.PARENT_ID,
      label: 'Parent',
      format: (val: string) => val,
    }),
    [Field.NOTE]: createDataTableProps({
      name: Field.NOTE,
      label: 'Note',
      format: (val: string) => truncateString(val),
    }),
    [Field.ACTIVITY_STATUS]: createDataTableProps({
      name: Field.ACTIVITY_STATUS,
      label: 'Status',
      format: (val: string) => val,
    }),
    [Field.RECORD_STATUS]: createDataTableProps({
      name: Field.RECORD_STATUS,
      label: 'Status',
      format: (val: string) => val,
    }),
    [Field.EXERCISE_TRACKS]: createDataTableProps({
      name: Field.EXERCISE_TRACKS,
      label: 'Tracks',
      format: (val: string) => val,
    }),
    [Field.EXERCISE_IDS]: createDataTableProps({
      name: Field.EXERCISE_IDS,
      label: 'Exercise Ids',
      format: (val: string) => val,
    }),
    [Field.FINISHED_DATE]: createDataTableProps({
      name: Field.FINISHED_DATE,
      label: 'Finished Date',
      format: (val: string) => isoToDisplayDate(val),
    }),
    [Field.EXERCISE_RECORD_IDS]: createDataTableProps({
      name: Field.EXERCISE_RECORD_IDS,
      label: 'Record Ids',
      format: (val: string) => val,
    }),
    [Field.MEASUREMENT_TYPE]: createDataTableProps({
      name: Field.MEASUREMENT_TYPE,
      label: 'Type',
      format: (val: string) => val,
    }),
    [Field.PARENT_MEASUREMENT_TYPE]: createDataTableProps({
      name: Field.PARENT_MEASUREMENT_TYPE,
      label: 'Parent Type',
      format: (val: string) => val,
    }),
    [Field.MEASUREMENT_VALUE]: createDataTableProps({
      name: Field.MEASUREMENT_VALUE,
      label: 'Value',
      format: (val: number) => val,
    }),
    [Field.WEIGHT]: createDataTableProps({
      name: Field.WEIGHT,
      label: 'Weight (lbs)',
      format: (val: number[]) => val,
    }),
    [Field.REPS]: createDataTableProps({
      name: Field.REPS,
      label: 'Reps',
      format: (val: number[]) => val,
    }),
    [Field.DISTANCE]: createDataTableProps({
      name: Field.DISTANCE,
      label: 'Distance (miles)',
      format: (val: number[]) => val,
    }),
    [Field.DURATION]: createDataTableProps({
      name: Field.DURATION,
      label: 'Duration (minutes)',
      format: (val: number[]) => val,
    }),
    [Field.KEY]: createDataTableProps({
      name: Field.KEY,
      label: 'Key',
      format: (val: string) => val,
    }),
    [Field.VALUE]: createDataTableProps({
      name: Field.VALUE,
      label: 'Value',
      format: (val: boolean | string | number) => val,
    }),
    [Field.SEVERITY]: createDataTableProps({
      name: Field.SEVERITY,
      label: 'Severity',
      format: (val: string) => val,
    }),
    [Field.DETAILS]: createDataTableProps({
      name: Field.DETAILS,
      label: 'Details',
      format: (val: string) => truncateString(val),
    }),
    [Field.MESSAGE]: createDataTableProps({
      name: Field.MESSAGE,
      label: 'Messages',
      format: (val: string) => truncateString(val),
    }),
    [Field.STACK]: createDataTableProps({
      name: Field.STACK,
      label: 'Stack',
      format: (val: string) => truncateString(val),
    }),
  }[exactField]
}

function createDataTableProps(columnProps: Partial<DataTableProps>): DataTableProps {
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
