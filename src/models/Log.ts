import { _Entity } from '@/models/_Entity'
import type { Severity } from '@/constants/data-enums'
import { v4 as createId } from 'uuid'
import { ExactField } from '@/constants/data-enums'
import type { ColumnProps } from '@/constants/types-interfaces'
import { truncateString } from '@/utils/common'

export interface ILog {
  severity: Severity
  details: string
  name?: string
  message?: string
  stack?: string
}

export interface LogParams {
  severity: Severity
  details: string
  error?: Error | any
}

/**
 * Log Class
 * @param params.error Error or any if unknown
 * @param params.severity Severity
 * @param params.details Information about the error
 */
export class Log extends _Entity {
  severity: Severity
  details: string
  name?: string
  message?: string
  stack?: string

  constructor(params: LogParams) {
    super({ id: createId(), createdDate: new Date().toISOString() })
    this.severity = params?.severity
    this.details = params?.details
    this.name = params?.error?.name
    this.message = params?.error?.message
    this.stack = params?.error?.stack
  }

  static getFields() {
    return [
      ..._Entity.getFields(),
      ExactField.SEVERITY,
      ExactField.DETAILS,
      ExactField.NAME,
      ExactField.MESSAGE,
      ExactField.STACK,
    ]
  }

  static getFieldComponents(): any {
    return []
  }

  static getColumns(): ColumnProps[] {
    return [
      ..._Entity.getColumns(),
      {
        name: ExactField.SEVERITY,
        label: 'Severity',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[ExactField.SEVERITY],
        format: (val: string) => val,
      },
      {
        name: ExactField.DETAILS,
        label: 'Details',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[ExactField.DETAILS],
        format: (val: string) => truncateString(val),
      },
      {
        name: ExactField.NAME,
        label: 'Name',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[ExactField.NAME],
        format: (val: string) => truncateString(val),
      },
      {
        name: ExactField.MESSAGE,
        label: 'Messages',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[ExactField.MESSAGE],
        format: (val: string) => truncateString(val),
      },
      {
        name: ExactField.STACK,
        label: 'Stack',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[ExactField.STACK],
        format: (val: string) => truncateString(val),
      },
    ]
  }
}
