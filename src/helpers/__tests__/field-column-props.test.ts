import { describe, test, expect } from 'vitest'
import { getFieldDataTableProps } from '@/helpers/field-column-props'
import { Field } from '@/constants/data-enums'

describe('field-column-props', () => {
  test('getFieldDataTableProps return correct object for ID', () => {
    const fields = Object.values(Field) as Field[]

    fields.forEach((field) => {
      const obj = getFieldDataTableProps(field)
      expect(obj).toHaveProperty('name')
      expect(obj).toHaveProperty('label')
      expect(obj).toHaveProperty('align')
      expect(obj).toHaveProperty('sortable')
      expect(obj).toHaveProperty('required')
      expect(obj).toHaveProperty('field')
      expect(obj).toHaveProperty('format')
    })
  })
})
