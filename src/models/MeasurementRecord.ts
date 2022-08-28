import { _Record, type IRecord } from '@/models/_Record'
import type { MeasurementType } from '@/constants/data-enums'

export interface IMeasurementRecord extends IRecord {
  parentType: MeasurementType
  measurementValue: number
}

/**
 * MeasurementRecord Class
 * @param params IMeasurementRecord
 */
export class MeasurementRecord extends _Record {
  parentType: MeasurementType
  measurementValue: number

  constructor(params: IMeasurementRecord) {
    super({
      id: params.id,
      createdDate: params.createdDate,
      parentId: params.parentId,
      note: params.note,
      recordStatus: params.recordStatus,
    })
    this.parentType = params.parentType
    this.measurementValue = params.measurementValue
  }
}
