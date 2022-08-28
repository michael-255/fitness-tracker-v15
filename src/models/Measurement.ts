import { _Activity, type IActivity } from './_Activity'
import type { MeasurementType } from '@/constants/data-enums'

export interface IMeasurement extends IActivity {
  measurementType: MeasurementType
}

/**
 * Measurement Class
 * @param params IMeasurement
 */
export class Measurement extends _Activity {
  measurementType: MeasurementType

  constructor(params: IMeasurement) {
    super({
      id: params.id,
      createdDate: params.createdDate,
      name: params.name,
      description: params.description,
      activityStatus: params.activityStatus,
    })
    this.measurementType = params.measurementType
  }
}
