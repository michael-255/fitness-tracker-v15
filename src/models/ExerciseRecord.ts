import { _Record, type IRecord } from '@/models/_Record'
import { AppTable, Field, Operation } from '@/constants/data-enums'
import type { DataObject, DataTableProps } from '@/constants/types-interfaces'
import type { LocalDatabase } from '@/services/LocalDatabase'
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

  static async report(...params: any): Promise<void> {
    console.error('params:', params)
    throw new Error('Not Supported')
  }

  static async update(database: LocalDatabase, data: DataObject): Promise<void> {
    const { originalId, id, createdDate, parentId, weight, reps, distance, duration } = data
    await database.updateById(
      originalId,
      AppTable.EXERCISE_RECORDS,
      new ExerciseRecord({ id, createdDate, parentId, weight, reps, distance, duration })
    )
  }

  static async create(database: LocalDatabase, data: DataObject): Promise<void> {
    const { id, createdDate, parentId, weight, reps, distance, duration } = data
    await database.add(
      AppTable.EXERCISE_RECORDS,
      new ExerciseRecord({ id, createdDate, parentId, weight, reps, distance, duration })
    )
  }

  static async getAll(database: LocalDatabase): Promise<ExerciseRecord[]> {
    return await database.getAll(AppTable.EXERCISE_RECORDS)
  }

  static getLabelSingular(): string {
    return 'Exercise Record'
  }

  static getLabelPlural(): string {
    return 'Exercise Records'
  }

  static getParentTable(): AppTable | null {
    return AppTable.EXERCISES
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
    return [..._Record.getFields(), Field.WEIGHT, Field.REPS, Field.DISTANCE, Field.DURATION]
  }

  static getFieldComponents(): any {
    return [
      ..._Record.getFieldComponents(),
      // defineAsyncComponent(() => import('@/components/page-table/inputs/WeightInput.vue')),
    ]
  }

  static getColumns(): DataTableProps[] {
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
