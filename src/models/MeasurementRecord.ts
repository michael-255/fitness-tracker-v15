import { _Record, type IRecord } from '@/models/_Record'
import type { MeasurementType } from '@/constants/data-enums'

export interface IMeasurementRecord extends IRecord {
  parentMeasurementType: MeasurementType
  measurementValue: number
}

/**
 * MeasurementRecord Class
 * @param params IMeasurementRecord
 */
export class MeasurementRecord extends _Record {
  parentMeasurementType: MeasurementType
  measurementValue: number

  constructor(params: IMeasurementRecord) {
    super({
      id: params.id,
      createdDate: params.createdDate,
      parentId: params.parentId,
      note: params.note,
      recordStatus: params.recordStatus,
    })
    this.parentMeasurementType = params.parentMeasurementType
    this.measurementValue = params.measurementValue
  }
}
