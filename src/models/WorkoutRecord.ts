import { _Record, type IRecord } from '@/models/_Record'

export interface IWorkoutRecord extends IRecord {
  finishedDate: string
  exerciseRecordIds: string[]
}

/**
 * WorkoutRecord Class
 * @param params IWorkoutRecord
 */
export class WorkoutRecord extends _Record {
  finishedDate: string
  exerciseRecordIds: string[]

  constructor(params: IWorkoutRecord) {
    super({
      id: params.id,
      createdDate: params.createdDate,
      parentId: params.parentId,
      note: params.note,
      recordStatus: params.recordStatus,
    })
    this.finishedDate = params.finishedDate
    this.exerciseRecordIds = params.exerciseRecordIds
  }
}
