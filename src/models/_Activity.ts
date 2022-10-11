import { _Entity, type IEntity } from '@/models/_Entity'
import type { ActivityStatus } from '@/constants/data-enums'
import { defineAsyncComponent } from 'vue'
import { ExactField } from '@/constants/data-enums'
import type { ColumnProps } from '@/constants/types-interfaces'
import { truncateString } from '@/utils/common'

export interface IActivity extends IEntity {
  name: string
  description: string
  activityStatus: ActivityStatus
}

/**
 * _Activity Class
 * @param params IActivity
 */
export class _Activity extends _Entity {
  name: string
  description: string
  activityStatus: ActivityStatus

  constructor(params: IActivity) {
    super({ id: params.id, createdDate: params.createdDate })
    this.name = params.name
    this.description = params.description
    this.activityStatus = params.activityStatus
  }

  static getFields(): ExactField[] {
    return [
      ..._Entity.getFields(),
      ExactField.NAME,
      ExactField.DESCRIPTION,
      ExactField.ACTIVITY_STATUS,
    ]
  }

  static getFieldComponents(): any {
    return [
      ..._Entity.getFieldComponents(),
      defineAsyncComponent(() => import('@/components/page-table/inputs/NameInput.vue')),
      defineAsyncComponent(() => import('@/components/page-table/inputs/DescriptionInput.vue')),
      // defineAsyncComponent(() => import('@/components/page-table/inputs/ActivityStatusInput.vue')),
    ]
  }

  static getColumns(): ColumnProps[] {
    return [
      ..._Entity.getColumns(),
      {
        name: ExactField.NAME,
        label: 'Name',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[ExactField.NAME],
        format: (val: string) => truncateString(val),
      },
      {
        name: ExactField.DESCRIPTION,
        label: 'Description',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[ExactField.DESCRIPTION],
        format: (val: string) => truncateString(val),
      },
      {
        name: ExactField.ACTIVITY_STATUS,
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
