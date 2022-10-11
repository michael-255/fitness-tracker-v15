import { _Activity, type IActivity } from '@/models/_Activity'
import { AppTable, Field, Operation } from '@/constants/data-enums'
import type { DataTableProps } from '@/constants/types-interfaces'
import type { LocalDatabase } from '@/services/LocalDatabase'
// import { defineAsyncComponent } from 'vue'

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
    })
    this.exerciseIds = params.exerciseIds
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

  static async getAll(database: LocalDatabase): Promise<Workout[]> {
    return await database.getAll(AppTable.WORKOUTS)
  }

  static getLabelSingular(): string {
    return 'Workout'
  }

  static getLabelPlural(): string {
    return 'Workouts'
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

  static getFields(): Field[] {
    return [..._Activity.getFields(), Field.EXERCISE_IDS]
  }

  static getFieldComponents(): any {
    return [
      ..._Activity.getFieldComponents(),
      // defineAsyncComponent(() => import('@/components/page-table/inputs/ExerciseIdsSelect.vue')),
    ]
  }

  static getColumns(): DataTableProps[] {
    return [
      ..._Activity.getColumns(),
      {
        name: Field.EXERCISE_IDS,
        label: 'Exercise Ids',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[Field.EXERCISE_IDS],
        format: (val: string) => val,
      },
    ]
  }
}
