import { describe, test, expect } from 'vitest'
import { SettingKey } from '@/constants/data-enums'
import { Setting } from '@/models/Setting'

describe('Setting', () => {
  const key = SettingKey.DEBUG
  const value = true

  const params = {
    key,
    value,
  }

  test('Setting should have correct number of properties', () => {
    const model = new Setting(params)
    const keys = Object.keys(model)
    expect(keys.length).toBe(2)
    expect(keys.includes('key')).toBe(true)
    expect(keys.includes('value')).toBe(true)
  })

  test('create Setting with a SettingKey', () => {
    const setting = new Setting(params)
    expect(setting.key).toBe(SettingKey.DEBUG)
    expect(setting.value).toBe(true)
  })
})
