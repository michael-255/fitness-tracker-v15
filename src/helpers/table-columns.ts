import type { AppTable, Field } from '@/constants/data-enums'
import type { DataTableProps } from '@/constants/types-interfaces'
import { getFieldDataTableProps } from '@/helpers/field-column-props'
import { getTableFields } from '@/helpers/table-fields'

/**
 * Gets the DataTableProps used by QTable for a specific table. You can get all the props, or just the
 * ones used for column select options.
 * @param table
 * @param type
 * @returns DataTableProps
 */
export function getTableColumns(table: AppTable, type: 'props' | 'options'): DataTableProps[] {
  const tableFields = getTableFields(table)

  if (tableFields) {
    if (type === 'props') {
      return tableFields.map((field: Field) => getFieldDataTableProps(field))
    } else {
      return tableFields
        .map((field: Field) => getFieldDataTableProps(field))
        .filter((col: DataTableProps) => !col.required)
    }
  } else {
    return []
  }
}
