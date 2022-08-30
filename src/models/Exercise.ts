import { _Activity, type IActivity } from '@/models/_Activity'
import type { ExerciseTracks } from '@/constants/data-enums'

export interface IExercise extends IActivity {
  exerciseTracks: ExerciseTracks[]
}

/**
 * Exercise Class
 * @param params IExercise
 */
export class Exercise extends _Activity {
  exerciseTracks: ExerciseTracks[]

  constructor(params: IExercise) {
    super({
      id: params.id,
      createdDate: params.createdDate,
      name: params.name,
      description: params.description,
      activityStatus: params.activityStatus,
    })
    this.exerciseTracks = params.exerciseTracks
  }
}
