import { describe, test, expect } from 'vitest'
import { Log } from '@/models/Log'
import { Severity } from '@/constants/data-enums'

describe('Log', () => {
  const error = new Error()
  const severity = Severity.DEBUG
  const details = 'test-details'
  const name = 'test-error-name'
  const message = 'test-error-message'
  const stack = 'test-error-stack'

  const params = {
    severity,
    details,
    error,
  }

  test('Log should have correct number of properties', () => {
    const model = new Log(params)
    const keys = Object.keys(model)
    expect(keys.length).toBe(7)
    expect(keys.includes('id')).toBe(true)
    expect(keys.includes('createdDate')).toBe(true)
    expect(keys.includes('severity')).toBe(true)
    expect(keys.includes('details')).toBe(true)
    expect(keys.includes('name')).toBe(true)
    expect(keys.includes('message')).toBe(true)
    expect(keys.includes('stack')).toBe(true)
  })

  test('create Log with Error object', () => {
    const log = new Log(params)
    expect(log.id).toEqual(expect.any(String))
    expect(log.createdDate).toEqual(expect.any(String))
    expect(log.severity).toBe(severity)
    expect(log.details).toBe(details)
    expect(log.name).toBe('Error')
    expect(log.message).toEqual(expect.any(String))
    expect(log.stack).toEqual(expect.any(String))
  })

  test('create Log with custom object', () => {
    const testCustomParams = {
      severity,
      details,
      error: {
        name,
        message,
        stack,
      },
    }
    const log = new Log(testCustomParams)
    expect(log.id).toEqual(expect.any(String))
    expect(log.createdDate).toEqual(expect.any(String))
    expect(log.severity).toBe(severity)
    expect(log.details).toBe(details)
    expect(log.name).toBe(name)
    expect(log.message).toBe(message)
    expect(log.stack).toBe(stack)
  })

  test('create Log with no object', () => {
    const testNoObjParams = {
      severity,
      details,
    }
    const log = new Log(testNoObjParams)
    expect(log.id).toEqual(expect.any(String))
    expect(log.createdDate).toEqual(expect.any(String))
    expect(log.severity).toBe(severity)
    expect(log.details).toBe(details)
    expect(log.name).toBeUndefined()
    expect(log.message).toBeUndefined()
    expect(log.stack).toBeUndefined()
  })
})
