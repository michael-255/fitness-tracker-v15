import { _Entity, type IEntity } from '@/models/_Entity'
import type { RecordStatus } from '@/constants/data-enums'

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
}
