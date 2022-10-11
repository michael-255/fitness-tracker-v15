import { _Record, type IRecord } from '@/models/_Record'
import type { MeasurementType } from '@/constants/data-enums'
import { ExactField } from '@/constants/data-enums'
import type { ColumnProps } from '@/constants/types-interfaces'

export interface IMeasurementRecord extends IRecord {
  parentMeasurementType: MeasurementType
  measurementValue: number
}

/**
 * MeasurementRecord Class
 * @param params IMeasurementRecord
 */
export class MeasurementRecord extends _Record {
  parentMeasurementType: MeasurementType
  measurementValue: number

  constructor(params: IMeasurementRecord) {
    super({
      id: params.id,
      createdDate: params.createdDate,
      parentId: params.parentId,
      note: params.note,
      recordStatus: params.recordStatus,
    })
    this.parentMeasurementType = params.parentMeasurementType
    this.measurementValue = params.measurementValue
  }

  static getFields() {
    return [
      ..._Record.getFields(),
      ExactField.PARENT_MEASUREMENT_TYPE,
      ExactField.MEASUREMENT_VALUE,
    ]
  }

  static getFieldComponents(): any {
    return [
      ..._Record.getFieldComponents(),
      // defineAsyncComponent(() => import('@/components/page-table/inputs/ParentMeasurementTypeSelect.vue')),
    ]
  }

  static getColumns(): ColumnProps[] {
    return [
      ..._Record.getColumns(),
      {
        name: ExactField.PARENT_MEASUREMENT_TYPE,
        label: 'Parent Type',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[ExactField.PARENT_MEASUREMENT_TYPE],
        format: (val: string) => val,
      },
      {
        name: ExactField.MEASUREMENT_VALUE,
        label: 'Value',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[ExactField.MEASUREMENT_VALUE],
        format: (val: string) => val,
      },
    ]
  }
}
