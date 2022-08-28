import { _Entity, type IEntity } from '@/models/_Entity'
import type { ActivityStatus } from '@/constants/data-enums'

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
}
