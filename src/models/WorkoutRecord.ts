import { _Record, type IRecord } from '@/models/_Record'
import { AppTable, Field, Operation } from '@/constants/data-enums'
import type { DataObject, DataTableProps } from '@/constants/types-interfaces'
import { isoToDisplayDate } from '@/utils/luxon'
import type { LocalDatabase } from '@/services/LocalDatabase'
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

  // static async report(database: LocalDatabase, data: DataObject): Promise<void> {
  //   await 1
  // }

  static async update(database: LocalDatabase, data: DataObject): Promise<void> {
    const { originalId, id, createdDate, parentId, finishedDate, exerciseRecordIds } = data
    await database.updateById(
      originalId,
      AppTable.WORKOUT_RECORDS,
      new WorkoutRecord({ id, createdDate, parentId, finishedDate, exerciseRecordIds })
    )
  }

  static async create(database: LocalDatabase, data: DataObject): Promise<void> {
    const { id, createdDate, parentId, finishedDate, exerciseRecordIds } = data
    await database.add(
      AppTable.WORKOUT_RECORDS,
      new WorkoutRecord({ id, createdDate, parentId, finishedDate, exerciseRecordIds })
    )
  }

  static async getAll(database: LocalDatabase): Promise<WorkoutRecord[]> {
    return await database.getAll(AppTable.WORKOUT_RECORDS)
  }

  static getLabelSingular(): string {
    return 'Workout Record'
  }

  static getLabelPlural(): string {
    return 'Workout Records'
  }

  static getParentTable(): AppTable | null {
    return AppTable.WORKOUTS
  }

  static getOperations(): Operation[] {
    return [
      Operation.CREATE,
      Operation.UPDATE,
      Operation.DELETE,
      Operation.CLEAR,
      Operation.INSPECT,
    ]
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

  static getColumns(): DataTableProps[] {
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
