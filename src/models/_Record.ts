import { _Entity, type IEntity } from '@/models/_Entity'
import { Field } from '@/constants/data-enums'
import type { ColumnProps } from '@/constants/types-interfaces'
import { defineAsyncComponent } from 'vue'

export interface IRecord extends IEntity {
  parentId: string
}

/**
 * _Record Class
 * @param params IRecord
 */
export class _Record extends _Entity {
  parentId: string

  constructor(params: IRecord) {
    super({ id: params.id, createdDate: params.createdDate })
    this.parentId = params.parentId
  }

  static getFields(): Field[] {
    return [..._Entity.getFields(), Field.PARENT_ID]
  }

  static getFieldComponents(): any {
    return [
      ..._Entity.getFieldComponents(),
      defineAsyncComponent(() => import('@/components/page-table/inputs/ParentIdSelect.vue')),
    ]
  }

  static getColumns(): ColumnProps[] {
    return [
      ..._Entity.getColumns(),
      {
        name: Field.PARENT_ID,
        label: 'Parent',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[Field.PARENT_ID],
        format: (val: string) => val,
      },
    ]
  }
}
