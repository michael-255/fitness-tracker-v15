import { _Entity, type IEntity } from '@/models/_Entity'
import { defineAsyncComponent } from 'vue'
import { Field } from '@/constants/data-enums'
import type { ColumnProps } from '@/constants/types-interfaces'
import { truncateString } from '@/utils/common'

export interface IActivity extends IEntity {
  name: string
}

/**
 * _Activity Class
 * @param params IActivity
 */
export class _Activity extends _Entity {
  name: string

  constructor(params: IActivity) {
    super({ id: params.id, createdDate: params.createdDate })
    this.name = params.name
  }

  static getFields(): Field[] {
    return [..._Entity.getFields(), Field.NAME]
  }

  static getFieldComponents(): any {
    return [
      ..._Entity.getFieldComponents(),
      defineAsyncComponent(() => import('@/components/page-table/inputs/NameInput.vue')),
    ]
  }

  static getColumns(): ColumnProps[] {
    return [
      ..._Entity.getColumns(),
      {
        name: Field.NAME,
        label: 'Name',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[Field.NAME],
        format: (val: string) => truncateString(val),
      },
    ]
  }
}
