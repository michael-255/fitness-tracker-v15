import { AppTable, Operation, type SettingKey } from '@/constants/data-enums'
import type { DataTableProps, SettingValue } from '@/constants/types-interfaces'
import { Field } from '@/constants/data-enums'
import type { LocalDatabase } from '@/services/LocalDatabase'

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

  static async report(...params: any): Promise<void> {
    console.error('params:', params)
    throw new Error('Not Supported')
  }

  static async update(...params: any): Promise<void> {
    console.error('params:', params)
    throw new Error('Not Supported')
  }

  static async create(...params: any): Promise<void> {
    console.error('params:', params)
    throw new Error('Not Supported')
  }

  static async getAll(database: LocalDatabase): Promise<Setting[]> {
    return await database.getAll(AppTable.SETTINGS)
  }

  static getLabelSingular(): string {
    return 'Setting'
  }

  static getLabelPlural(): string {
    return 'Settings'
  }

  static getParentTable(): AppTable | null {
    return null
  }

  static getOperations(): Operation[] {
    return [Operation.INSPECT]
  }

  static getVisibleColumns(): Field[] {
    return []
  }

  static getFields(): Field[] {
    return [Field.KEY, Field.VALUE]
  }

  static getFieldComponents(): any {
    return []
  }

  static getColumns(): DataTableProps[] {
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
