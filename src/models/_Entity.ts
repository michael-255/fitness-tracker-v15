import { defineAsyncComponent } from 'vue'
import { ExactField } from '@/constants/data-enums'
import type { ColumnProps } from '@/constants/types-interfaces'
import { isoToDisplayDate } from '@/utils/luxon'

export interface IEntity {
  id: string
  createdDate: string
}

/**
 *_Entity Class
 * @param params IEntity
 */
export class _Entity {
  id: string
  createdDate: string

  constructor(params: IEntity) {
    this.id = params.id
    this.createdDate = params.createdDate
  }

  static getFields(): ExactField[] {
    return [ExactField.ID, ExactField.CREATED_DATE]
  }

  static getFieldComponents(): any {
    return [
      defineAsyncComponent(() => import('@/components/page-table/inputs/IdInput.vue')),
      defineAsyncComponent(() => import('@/components/page-table/inputs/CreatedDateInput.vue')),
    ]
  }

  static getColumns(): ColumnProps[] {
    return [
      {
        name: ExactField.ID,
        label: 'Id',
        align: 'left',
        sortable: true,
        required: true,
        field: (row: any) => row[ExactField.ID],
        format: (val: string) => val,
      },
      {
        name: ExactField.CREATED_DATE,
        label: 'Created Date',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[ExactField.CREATED_DATE],
        format: (val: string) => isoToDisplayDate(val),
      },
    ]
  }
}
