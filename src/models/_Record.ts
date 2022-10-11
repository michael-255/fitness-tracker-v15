import { _Entity, type IEntity } from '@/models/_Entity'
import type { RecordStatus } from '@/constants/data-enums'
import { ExactField } from '@/constants/data-enums'
import type { ColumnProps } from '@/constants/types-interfaces'
import { truncateString } from '@/utils/common'
import { defineAsyncComponent } from 'vue'

export interface IRecord extends IEntity {
  parentId: string
  note: string
  recordStatus: RecordStatus
}

/**
 * _Record Class
 * @param params IRecord
 */
export class _Record extends _Entity {
  parentId: string
  note: string
  recordStatus: RecordStatus

  constructor(params: IRecord) {
    super({ id: params.id, createdDate: params.createdDate })
    this.parentId = params.parentId
    this.note = params.note
    this.recordStatus = params.recordStatus
  }

  static getFields(): ExactField[] {
    return [..._Entity.getFields(), ExactField.PARENT_ID, ExactField.NOTE, ExactField.RECORD_STATUS]
  }

  static getFieldComponents(): any {
    return [
      ..._Entity.getFieldComponents(),
      defineAsyncComponent(() => import('@/components/page-table/inputs/ParentIdSelect.vue')),
      // defineAsyncComponent(() => import('@/components/page-table/inputs/NoteInput.vue')),
      // defineAsyncComponent(() => import('@/components/page-table/inputs/RecordStatusInput.vue')),
    ]
  }

  static getColumns(): ColumnProps[] {
    return [
      ..._Entity.getColumns(),
      {
        name: ExactField.PARENT_ID,
        label: 'Parent',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[ExactField.ACTIVITY_STATUS],
        format: (val: string) => val,
      },
      {
        name: ExactField.NOTE,
        label: 'Note',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[ExactField.NOTE],
        format: (val: string) => truncateString(val),
      },
      {
        name: ExactField.RECORD_STATUS,
        label: 'Status',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[ExactField.ACTIVITY_STATUS],
        format: (val: string) => val,
      },
    ]
  }
}
