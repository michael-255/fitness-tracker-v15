import { _Record, type IRecord } from '@/models/_Record'

export interface IWorkoutRecord extends IRecord {
  finishedAt: string
  exerciseRecordIds: string[]
}

/**
 * WorkoutRecord Class
 * @param params IWorkoutRecord
 */
export class WorkoutRecord extends _Record {
  finishedAt: string
  exerciseRecordIds: string[]

  constructor(params: IWorkoutRecord) {
    super({
      id: params.id,
      createdDate: params.createdDate,
      parentId: params.parentId,
      note: params.note,
      recordStatus: params.recordStatus,
    })
    this.finishedAt = params.finishedAt
    this.exerciseRecordIds = params.exerciseRecordIds
  }
}
