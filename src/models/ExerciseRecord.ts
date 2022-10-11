import { _Record, type IRecord } from '@/models/_Record'
import { Field } from '@/constants/data-enums'
import type { ColumnProps } from '@/constants/types-interfaces'
// import { defineAsyncComponent } from 'vue'

export interface IExerciseRecord extends IRecord {
  weight?: number[]
  reps?: number[]
  distance?: number[]
  duration?: number[]
}

/**
 * ExerciseRecord Class
 * @param obj IExerciseRecord
 */
export class ExerciseRecord extends _Record {
  weight?: number[]
  reps?: number[]
  distance?: number[]
  duration?: number[]

  constructor(params: IExerciseRecord) {
    super({
      id: params.id,
      createdDate: params.createdDate,
      parentId: params.parentId,
    })
    this.weight = params.weight
    this.reps = params.reps
    this.distance = params.distance
    this.duration = params.duration
  }

  static getFields() {
    return [..._Record.getFields(), Field.WEIGHT, Field.REPS, Field.DISTANCE, Field.DURATION]
  }

  static getFieldComponents(): any {
    return [
      ..._Record.getFieldComponents(),
      // defineAsyncComponent(() => import('@/components/page-table/inputs/WeightInput.vue')),
    ]
  }

  static getColumns(): ColumnProps[] {
    return [
      ..._Record.getColumns(),
      {
        name: Field.WEIGHT,
        label: 'Parent Type',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[Field.WEIGHT],
        format: (val: number[]) => val,
      },
    ]
  }
}
