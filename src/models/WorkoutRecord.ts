import { _Record, type IRecord } from '@/models/_Record'
import { ExactField } from '@/constants/data-enums'

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

  static getClassFields() {
    return [
      ExactField.ID,
      ExactField.CREATED_DATE,
      ExactField.PARENT_ID,
      ExactField.NOTE,
      ExactField.RECORD_STATUS,
      ExactField.FINISHED_DATE,
      ExactField.EXERCISE_RECORD_IDS,
    ]
  }
}
