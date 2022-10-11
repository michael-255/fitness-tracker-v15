import { _Activity, type IActivity } from './_Activity'
import { AppTable, Operation, type MeasurementType } from '@/constants/data-enums'
import { ExactField } from '@/constants/data-enums'
import type { ColumnProps, DataObject } from '@/constants/types-interfaces'
import type { LocalDatabase } from '@/services/LocalDatabase'

export interface IMeasurement extends IActivity {
  measurementType: MeasurementType
}

/**
 * Measurement Class
 * @param params IMeasurement
 */
export class Measurement extends _Activity {
  measurementType: MeasurementType

  constructor(params: IMeasurement) {
    super({
      id: params.id,
      createdDate: params.createdDate,
      name: params.name,
      description: params.description,
      activityStatus: params.activityStatus,
    })
    this.measurementType = params.measurementType
  }

  static async getAll(database: LocalDatabase): Promise<Measurement[]> {
    return await database.getAll(AppTable.MEASUREMENTS)
  }

  static async create(database: LocalDatabase, data: DataObject): Promise<void> {
    const { id, createdDate, name, description, activityStatus, measurementType } = data
    await database.add(
      AppTable.MEASUREMENTS,
      new Measurement({
        id,
        createdDate,
        name,
        description,
        activityStatus,
        measurementType,
      })
    )
  }

  static async update(database: LocalDatabase, data: DataObject): Promise<void> {
    const { originalId, id, createdDate, name, description, activityStatus, measurementType } = data
    await database.updateById(
      AppTable.MEASUREMENTS,
      originalId,
      new Measurement({
        id,
        createdDate,
        name,
        description,
        activityStatus,
        measurementType,
      })
    )
  }

  // static async report(database: LocalDatabase, id: string): Promise<void> {
  //   const records = await database.getByParentId(AppTable.MEASUREMENT_RECORDS, id)
  //   const parent = await database.getById(AppTable.MEASUREMENTS, id)

  //   const measurementValues = records.map((r: any) => r?.measurementValue)

  //   const datasets = []
  //   datasets.push({
  //     label: parent?.measurementType,
  //     borderColor: '#1976D2',
  //     data: measurementValues,
  //   })

  //   this.options.plugins.title.text = parent?.name
  //   this.chartData.labels = records.map(() => '')
  //   this.chartData.datasets = datasets
  //   this.firstDate = isoToDisplayDate(records[0]?.createdDate)
  //   this.lastDate = isoToDisplayDate(records[records.length - 1]?.createdDate)
  // }

  static getLabelSingular(): string {
    return 'Measurement'
  }

  static getLabelPlural(): string {
    return 'Measurements'
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

  static getVisibleColumns(): ExactField[] {
    return [ExactField.NAME]
  }

  static getFields(): ExactField[] {
    return [..._Activity.getFields(), ExactField.MEASUREMENT_TYPE]
  }

  static getFieldComponents(): any {
    return [
      ..._Activity.getFieldComponents(),
      // defineAsyncComponent(() => import('@/components/page-table/inputs/MeasurementTypeSelect.vue')),
    ]
  }

  static getColumns(): ColumnProps[] {
    return [
      ..._Activity.getColumns(),
      {
        name: ExactField.MEASUREMENT_TYPE,
        label: 'Tracks',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[ExactField.MEASUREMENT_TYPE],
        format: (val: string) => val,
      },
    ]
  }
}
