import { _Record, type IRecord } from '@/models/_Record'
import { Field } from '@/constants/data-enums'
import type { ColumnProps } from '@/constants/types-interfaces'
// import { defineAsyncComponent } from 'vue'

export interface IMeasurementRecord extends IRecord {
  measurementValue: number
}

/**
 * MeasurementRecord Class
 * @param params IMeasurementRecord
 */
export class MeasurementRecord extends _Record {
  measurementValue: number

  constructor(params: IMeasurementRecord) {
    super({
      id: params.id,
      createdDate: params.createdDate,
      parentId: params.parentId,
    })
    this.measurementValue = params.measurementValue
  }

  static getFields() {
    return [..._Record.getFields(), Field.MEASUREMENT_VALUE]
  }

  static getFieldComponents(): any {
    return [
      ..._Record.getFieldComponents(),
      // defineAsyncComponent(() => import('@/components/page-table/inputs/MeasurementValueInput.vue')),
    ]
  }

  static getColumns(): ColumnProps[] {
    return [
      ..._Record.getColumns(),
      {
        name: Field.MEASUREMENT_VALUE,
        label: 'Value',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[Field.MEASUREMENT_VALUE],
        format: (val: number) => val,
      },
    ]
  }
}
