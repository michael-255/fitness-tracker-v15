import { _Record, type IRecord } from '@/models/_Record'

export interface IExerciseRecord extends IRecord {
  weightLbsPerSet?: number[]
  repsPerSet?: number[]
  distanceMilesPerSet?: number[]
  durationMinutesPerSet?: number[]
}

/**
 * ExerciseRecord Class
 * @param obj IExerciseRecord
 */
export class ExerciseRecord extends _Record {
  weightLbsPerSet?: number[]
  repsPerSet?: number[]
  distanceMilesPerSet?: number[]
  durationMinutesPerSet?: number[]

  constructor(params: IExerciseRecord) {
    super({
      id: params.id,
      createdDate: params.createdDate,
      parentId: params.parentId,
      note: params.note,
      recordStatus: params.recordStatus,
    })
    this.weightLbsPerSet = params.weightLbsPerSet
    this.repsPerSet = params.repsPerSet
    this.distanceMilesPerSet = params.distanceMilesPerSet
    this.durationMinutesPerSet = params.durationMinutesPerSet
  }
}
