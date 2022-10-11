import { _Activity, type IActivity } from '@/models/_Activity'
import type { Severity } from '@/constants/data-enums'
import { v4 as createId } from 'uuid'
import { Field } from '@/constants/data-enums'
import type { ColumnProps } from '@/constants/types-interfaces'
import { truncateString } from '@/utils/common'

export interface ILog extends IActivity {
  severity: Severity
  details: string
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
export class Log extends _Activity {
  severity: Severity
  details: string
  message?: string
  stack?: string

  constructor(params: LogParams) {
    super({ id: createId(), createdDate: new Date().toISOString(), name: params?.error?.name })
    this.severity = params?.severity
    this.details = params?.details
    this.message = params?.error?.message
    this.stack = params?.error?.stack
  }

  static getFields() {
    return [..._Activity.getFields(), Field.SEVERITY, Field.DETAILS, Field.MESSAGE, Field.STACK]
  }

  static getFieldComponents(): any {
    return []
  }

  static getColumns(): ColumnProps[] {
    return [
      ..._Activity.getColumns(),
      {
        name: Field.SEVERITY,
        label: 'Severity',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[Field.SEVERITY],
        format: (val: string) => val,
      },
      {
        name: Field.DETAILS,
        label: 'Details',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[Field.DETAILS],
        format: (val: string) => truncateString(val),
      },
      {
        name: Field.MESSAGE,
        label: 'Messages',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[Field.MESSAGE],
        format: (val: string) => truncateString(val),
      },
      {
        name: Field.STACK,
        label: 'Stack',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[Field.STACK],
        format: (val: string) => truncateString(val),
      },
    ]
  }
}
