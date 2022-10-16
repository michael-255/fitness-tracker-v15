import { _Activity, type IActivity } from '@/models/_Activity'
import { AppTable, Field, Operation } from '@/constants/data-enums'
import type { DataObject, DataTableProps } from '@/constants/types-interfaces'
import type { LocalDatabase } from '@/services/LocalDatabase'
import type { WorkoutRecord } from './WorkoutRecord'
import { isoToDisplayDate } from '@/utils/luxon'
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

  /**
   * Creates the chart data and settings for the reports.
   * @param database
   * @param id
   */
  static async report(database: LocalDatabase, id: string): Promise<any> {
    const records = (await database.getByParentId(AppTable.WORKOUT_RECORDS, id)) as WorkoutRecord[]
    const parent = (await database.getById(AppTable.WORKOUTS, id)) as Workout

    const duration = records.map((r) => {
      const started = new Date(r?.createdDate).getTime()
      const finished = new Date(r?.finishedDate).getTime()
      return (finished - started) / 1000 / 60 // gets the minutes
    })

    const datasets = []
    datasets.push({
      label: 'Duration (minutes)',
      borderColor: '#1976D2',
      data: duration,
    })

    return {
      title: parent?.name,
      chartData: {
        labels: records.map(() => ''),
        datasets: datasets,
      },
      firstDate: isoToDisplayDate(records[0]?.createdDate),
      lastDate: isoToDisplayDate(records[records.length - 1]?.createdDate),
    }
  }

  static async update(database: LocalDatabase, data: DataObject): Promise<void> {
    const { originalId, id, createdDate, name, exerciseIds } = data
    await database.updateById(
      originalId,
      AppTable.WORKOUTS,
      new Workout({ id, createdDate, name, exerciseIds })
    )
  }

  static async create(database: LocalDatabase, data: DataObject): Promise<void> {
    const { id, createdDate, name, exerciseIds } = data
    await database.add(AppTable.WORKOUTS, new Workout({ id, createdDate, name, exerciseIds }))
  }

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

  static getVisibleColumns(): Field[] {
    return [Field.NAME]
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
