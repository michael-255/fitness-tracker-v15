import type { SettingKey } from '@/constants/data-enums'
import type { ColumnProps, SettingValue } from '@/constants/types-interfaces'
import { ExactField } from '@/constants/data-enums'

export interface ISetting {
  key: SettingKey
  value: SettingValue
}

/**
 * Setting Class
 * @param params ISetting
 */
export class Setting {
  key: SettingKey
  value: SettingValue

  constructor(params: ISetting) {
    this.key = params.key
    this.value = params.value
  }

  static getFields(): ExactField[] {
    return [ExactField.KEY, ExactField.VALUE]
  }

  static getFieldComponents(): any {
    return []
  }

  static getColumns(): ColumnProps[] {
    return [
      {
        name: ExactField.KEY,
        label: 'Key',
        align: 'left',
        sortable: true,
        required: true,
        field: (row: any) => row[ExactField.KEY],
        format: (val: string) => val,
      },
      {
        name: ExactField.VALUE,
        label: 'Value',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[ExactField.VALUE],
        format: (val: string) => val,
      },
    ]
  }
}
