import { _Record, type IRecord } from '@/models/_Record'
import { Field } from '@/constants/data-enums'
import type { ColumnProps } from '@/constants/types-interfaces'
import { isoToDisplayDate } from '@/utils/luxon'
// import { defineAsyncComponent } from 'vue'

export interface IWorkoutRecord extends IRecord {
  finishedDate: string
  exerciseRecordIds: string[]
}

/**
 * WorkoutRecord Class
 * @param params IWorkoutRecord
 */
export class WorkoutRecord extends _Record {
  finishedDate: string
  exerciseRecordIds: string[]

  constructor(params: IWorkoutRecord) {
    super({
      id: params.id,
      createdDate: params.createdDate,
      parentId: params.parentId,
    })
    this.finishedDate = params.finishedDate
    this.exerciseRecordIds = params.exerciseRecordIds
  }

  static getFields() {
    return [..._Record.getFields(), Field.FINISHED_DATE, Field.EXERCISE_RECORD_IDS]
  }

  static getFieldComponents(): any {
    return [
      ..._Record.getFieldComponents(),
      // defineAsyncComponent(() => import('@/components/page-table/inputs/FinishedDateInput.vue')),
      // defineAsyncComponent(() => import('@/components/page-table/inputs/ExerciseRecordIdsSelect.vue')),
    ]
  }

  static getColumns(): ColumnProps[] {
    return [
      ..._Record.getColumns(),
      {
        name: Field.FINISHED_DATE,
        label: 'Finished Date',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[Field.FINISHED_DATE],
        format: (val: string) => isoToDisplayDate(val),
      },
      {
        name: Field.EXERCISE_RECORD_IDS,
        label: 'Record Ids',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[Field.EXERCISE_RECORD_IDS],
        format: (val: string) => val,
      },
    ]
  }
}
