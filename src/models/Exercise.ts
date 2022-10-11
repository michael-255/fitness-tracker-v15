import { _Activity, type IActivity } from '@/models/_Activity'
import { AppTable, Operation, type ExerciseTracks } from '@/constants/data-enums'
import { Field } from '@/constants/data-enums'
import type { DataObject, DataTableProps } from '@/constants/types-interfaces'
import type { LocalDatabase } from '@/services/LocalDatabase'
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

  // static create(database: LocalDatabase, data: DataObject): Promise<void> {
  //   await 1
  // }

  // static update(database: LocalDatabase, data: DataObject): Promise<void> {
  //   await 1
  // }

  // static report(database: LocalDatabase, data: DataObject): Promise<void> {
  //   await 1
  // }

  static async getAll(database: LocalDatabase): Promise<Exercise[]> {
    return await database.getAll(AppTable.EXERCISES)
  }

  static getLabelSingular(): string {
    return 'Exercise'
  }

  static getLabelPlural(): string {
    return 'Exercises'
  }

  static getParentTable(): AppTable | null {
    return null
  }

  static getOperations(): Operation[] {
    return [
      Operation.CREATE,
      Operation.UPDATE,
      Operation.REPORT,
      Operation.DELETE,
      Operation.CLEAR,
      Operation.INSPECT,
    ]
  }

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

  static getColumns(): DataTableProps[] {
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
