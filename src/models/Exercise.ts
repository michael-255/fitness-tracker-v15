import { _Activity, type IActivity } from '@/models/_Activity'
import type { ExerciseTracks } from '@/constants/data-enums'
import { Field } from '@/constants/data-enums'
import type { ColumnProps } from '@/constants/types-interfaces'
// import type { LocalDatabase } from '@/services/LocalDatabase'
// import { defineAsyncComponent } from 'vue'

export interface IExercise extends IActivity {
  exerciseTracks: ExerciseTracks[]
}

/**
 * Exercise Class
 * @param params IExercise
 */
export class Exercise extends _Activity {
  exerciseTracks: ExerciseTracks[]

  constructor(params: IExercise) {
    super({
      id: params.id,
      createdDate: params.createdDate,
      name: params.name,
    })
    this.exerciseTracks = params.exerciseTracks
  }

  // static getAll(database: LocalDatabase): never {
  //   throw new Error(`Method not supported (params: ${params})`)
  // }

  // static create(...params: any): never {
  //   throw new Error(`Method not supported (params: ${params})`)
  // }

  // static update(...params: any): never {
  //   throw new Error(`Method not supported (params: ${params})`)
  // }

  // static delete(...params: any): never {
  //   throw new Error(`Method not supported (params: ${params})`)
  // }

  // static generateReport(...params: any): never {
  //   throw new Error(`Method not supported (params: ${params})`)
  // }

  // static getLabel(...params: any): never {
  //   throw new Error(`Method not supported (params: ${params})`)
  // }

  // static getParentTable(...params: any): never {
  //   throw new Error(`Method not supported (params: ${params})`)
  // }

  // static getOperations(...params: any): never {
  //   throw new Error(`Method not supported (params: ${params})`)
  // }

  static getVisibleColumns(): Field[] {
    return [Field.NAME]
  }

  static getFields(): Field[] {
    return [..._Activity.getFields(), Field.EXERCISE_TRACKS]
  }

  static getFieldComponents(): any {
    return [
      ..._Activity.getFieldComponents(),
      // defineAsyncComponent(() => import('@/components/page-table/inputs/ExerciseTracksInput.vue')),
    ]
  }

  static getColumns(): ColumnProps[] {
    return [
      ..._Activity.getColumns(),
      {
        name: Field.EXERCISE_TRACKS,
        label: 'Tracks',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[Field.EXERCISE_TRACKS],
        format: (val: string) => val,
      },
    ]
  }
}
