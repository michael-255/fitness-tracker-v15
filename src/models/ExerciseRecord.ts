import { _Record, type IRecord } from '@/models/_Record'
import { ExactField, InputField } from '@/constants/data-enums'
import type { ColumnProps } from '@/constants/types-interfaces'

export interface IExerciseRecord extends IRecord {
  weightLbsPerSet?: number[]
  repsPerSet?: number[]
  distanceMilesPerSet?: number[]
  durationMinutesPerSet?: number[]
}

/**
 * ExerciseRecord Class
 * @param obj IExerciseRecord
 */
export class ExerciseRecord extends _Record {
  weightLbsPerSet?: number[]
  repsPerSet?: number[]
  distanceMilesPerSet?: number[]
  durationMinutesPerSet?: number[]

  constructor(params: IExerciseRecord) {
    super({
      id: params.id,
      createdDate: params.createdDate,
      parentId: params.parentId,
      note: params.note,
      recordStatus: params.recordStatus,
    })
    this.weightLbsPerSet = params.weightLbsPerSet
    this.repsPerSet = params.repsPerSet
    this.distanceMilesPerSet = params.distanceMilesPerSet
    this.durationMinutesPerSet = params.durationMinutesPerSet
  }

  static getFields() {
    return [
      ..._Record.getFields(),
      ExactField.WEIGHT_LBS_PER_SET,
      ExactField.REPS_PER_SET,
      ExactField.DISTANCE_MILES_PER_SET,
      ExactField.DURATION_MINUTES_PER_SET,
    ]
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
        name: ExactField.WEIGHT_LBS_PER_SET,
        label: 'Parent Type',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[ExactField.WEIGHT_LBS_PER_SET],
        format: (val: number[]) => val,
      },
    ]
  }
}
