import type { SettingKey } from '@/constants/data-enums'
import type { ColumnProps, SettingValue } from '@/constants/types-interfaces'
import { Field } from '@/constants/data-enums'

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

  static getFields(): Field[] {
    return [Field.KEY, Field.VALUE]
  }

  static getFieldComponents(): any {
    return []
  }

  static getColumns(): ColumnProps[] {
    return [
      {
        name: Field.KEY,
        label: 'Key',
        align: 'left',
        sortable: true,
        required: true,
        field: (row: any) => row[Field.KEY],
        format: (val: string) => val,
      },
      {
        name: Field.VALUE,
        label: 'Value',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[Field.VALUE],
        format: (val: string) => val,
      },
    ]
  }
}
