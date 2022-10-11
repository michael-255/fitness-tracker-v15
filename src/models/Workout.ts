import { _Activity, type IActivity } from '@/models/_Activity'
import { ExactField } from '@/constants/data-enums'
import type { ColumnProps } from '@/constants/types-interfaces'
import { defineAsyncComponent } from 'vue'

export interface IWorkout extends IActivity {
  exerciseIds: string[]
}

/**
 * Workout Class
 * @param params IWorkout
 */
export class Workout extends _Activity {
  exerciseIds: string[]

  constructor(params: IWorkout) {
    super({
      id: params.id,
      createdDate: params.createdDate,
      name: params.name,
      description: params.description,
      activityStatus: params.activityStatus,
    })
    this.exerciseIds = params.exerciseIds
  }

  //

  static getFields(): ExactField[] {
    return [..._Activity.getFields(), ExactField.EXERCISE_IDS]
  }

  static getFieldComponents(): any {
    return [
      ..._Activity.getFieldComponents(),
      // defineAsyncComponent(() => import('@/components/page-table/inputs/ExerciseIdsSelect.vue')),
    ]
  }

  static getColumns(): ColumnProps[] {
    return [
      ..._Activity.getColumns(),
      {
        name: ExactField.EXERCISE_IDS,
        label: 'Exercise Ids',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[ExactField.EXERCISE_IDS],
        format: (val: string) => val,
      },
    ]
  }
}
