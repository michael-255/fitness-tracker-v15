import Dexie, { type IndexableType, type Table } from 'dexie'
import { AppTable, SettingKey, ExactField } from '@/constants/data-enums'
import { Log, type ILog } from '@/models/Log'
import { Setting, type ISetting } from '@/models/Setting'
import { Strings } from '@/constants/ui-enums'
import type { SettingValue } from '@/constants/types-interfaces'
import { Exercise, type IExercise } from '@/models/Exercise'
import { ExerciseRecord, type IExerciseRecord } from '@/models/ExerciseRecord'
import { Measurement, type IMeasurement } from '@/models/Measurement'
import { MeasurementRecord, type IMeasurementRecord } from '@/models/MeasurementRecord'
import { Workout, type IWorkout } from '@/models/Workout'
import { WorkoutRecord, type IWorkoutRecord } from '@/models/WorkoutRecord'

/**
 * Wrapper for Dexie IndexedDB
 * @param name Database name
 */
export class LocalDatabase extends Dexie {
  // Information for the typing system to help Dexie out
  // REQUIRED
  [AppTable.EXERCISES]!: Table<IExercise>;
  [AppTable.EXERCISE_RECORDS]!: Table<IExerciseRecord>;
  [AppTable.MEASUREMENTS]!: Table<IMeasurement>;
  [AppTable.MEASUREMENT_RECORDS]!: Table<IMeasurementRecord>;
  [AppTable.WORKOUTS]!: Table<IWorkout>;
  [AppTable.WORKOUT_RECORDS]!: Table<IWorkoutRecord>;
  [AppTable.LOGS]!: Table<ILog>;
  [AppTable.SETTINGS]!: Table<ISetting>

  constructor(name: string) {
    super(name)

    this.version(1).stores({
      // REQUIRED
      [AppTable.EXERCISES]: '&id',
      [AppTable.EXERCISE_RECORDS]: '&id, parentId',
      [AppTable.MEASUREMENTS]: '&id',
      [AppTable.MEASUREMENT_RECORDS]: '&id, parentId',
      [AppTable.WORKOUTS]: '&id',
      [AppTable.WORKOUT_RECORDS]: '&id, parentId',
      [AppTable.LOGS]: '&id',
      [AppTable.SETTINGS]: '&key',
    })

    // REQUIRED
    this[AppTable.EXERCISES].mapToClass(Exercise)
    this[AppTable.EXERCISE_RECORDS].mapToClass(ExerciseRecord)
    this[AppTable.MEASUREMENTS].mapToClass(Measurement)
    this[AppTable.MEASUREMENT_RECORDS].mapToClass(MeasurementRecord)
    this[AppTable.WORKOUTS].mapToClass(Workout)
    this[AppTable.WORKOUT_RECORDS].mapToClass(WorkoutRecord)
    this[AppTable.LOGS].mapToClass(Log)
    this[AppTable.SETTINGS].mapToClass(Setting)
  }

  /**
   * Get all items from table.
   * @param table
   * @returns Array of all table items
   */
  async getAll<T>(table: AppTable): Promise<T[]> {
    return await this.table(table).toArray()
  }

  /**
   * Get item from table by id.
   * @param table
   * @param id
   * @returns Single item or undefined
   */
  async getById<T>(table: AppTable, id: string): Promise<T | undefined> {
    return await this.table(table).where(ExactField.ID).equalsIgnoreCase(id).first()
  }

  /**
   * Get items from table by name.
   * @param table
   * @param name
   * @returns Array of items
   */
  async getByName<T>(table: AppTable, name: string): Promise<T[]> {
    return await this.table(table).where(ExactField.NAME).equalsIgnoreCase(name).toArray()
  }

  /**
   * Get items from table by parentId.
   * @param table
   * @param parentId
   * @returns Array of items
   */
  async getByParentId<T>(table: AppTable, parentId: string): Promise<T[]> {
    return await this.table(table)
      .where(ExactField.PARENT_ID)
      .equalsIgnoreCase(parentId)
      .sortBy(ExactField.CREATED_DATE)
  }

  /**
   * Get newest item from table by parentId.
   * @param table
   * @param parentId
   * @returns Newest item or undefined
   */
  async getNewestByParentId<T>(table: AppTable, parentId: string): Promise<T | undefined> {
    return (
      await this.table(table)
        .where(ExactField.PARENT_ID)
        .equalsIgnoreCase(parentId)
        .sortBy(ExactField.CREATED_DATE)
    ).reverse()[0]
  }

  /**
   * Get items from table by array of ids.
   * @param table
   * @param ids
   * @returns Array of items
   */
  async bulkGetByIds<T>(table: AppTable, ids: string[]): Promise<T[]> {
    // Filters out falsy values
    return (await this.table(table).bulkGet(ids)).filter(Boolean)
  }

  /**
   * Delete item in table by id.
   * @param table
   * @param id
   * @returns undefined even if nothing was deleted
   */
  async deleteById<T>(table: AppTable, id: string): Promise<T | undefined> {
    const itemToDelete: T | undefined = await this.table(table)
      .where(ExactField.ID)
      .equalsIgnoreCase(id)
      .first()

    if (itemToDelete) {
      await this.table(table).delete(id)
      return itemToDelete
    } else {
      return undefined
    }
  }

  /**
   * Clears all items from table.
   * @param table
   * @returns undefined
   */
  async clear(table: AppTable): Promise<void> {
    return await this.table(table).clear()
  }

  /**
   * Add item to table.
   * @param table
   * @param item
   * @returns Id of new item
   */
  async add<T>(table: AppTable, item: T): Promise<IndexableType> {
    return await this.table(table).add(item)
  }

  /**
   * Add items to table.
   * @param table
   * @param items
   * @returns Array of new item ids
   */
  async bulkAdd<T>(table: AppTable, items: T[]): Promise<IndexableType[]> {
    return await this.table(table).bulkAdd(items, { allKeys: true })
  }

  /**
   * Update provided properties on table item by id.
   * @param table
   * @param id
   * @param props
   * @returns 1 on a successful update
   */
  async updateById<T>(table: AppTable, id: string, props: Partial<T>): Promise<IndexableType> {
    return await this.table(table).update(id, props)
  }

  /**
   * Initializes setting keys in the settings table with default values.
   */
  async initSettings(): Promise<void> {
    const settings = await this.table(AppTable.SETTINGS).toArray()
    const DEBUG = settings.find((s) => s[ExactField.KEY] === SettingKey.DEBUG)
    const NOTIFY = settings.find((s) => s[ExactField.KEY] === SettingKey.NOTIFY)
    const INFO = settings.find((s) => s[ExactField.KEY] === SettingKey.INFO)

    if (!DEBUG) {
      await this.table(AppTable.SETTINGS).add({ key: SettingKey.DEBUG, value: false })
    }
    if (!NOTIFY) {
      await this.table(AppTable.SETTINGS).add({ key: SettingKey.NOTIFY, value: false })
    }
    if (!INFO) {
      await this.table(AppTable.SETTINGS).add({ key: SettingKey.INFO, value: false })
    }
  }

  /**
   * Retrieve setting item from database by setting key.
   * @param key
   * @returns Setting item
   */
  async getSetting(key: SettingKey): Promise<Setting> {
    return await this.table(AppTable.SETTINGS).where(ExactField.KEY).equalsIgnoreCase(key).first()
  }

  /**
   * Update setting key with a new value.
   * @param key
   * @param value
   * @returns 1 on a successful update
   */
  async updateSetting(key: SettingKey, value: SettingValue): Promise<IndexableType> {
    return await this.table(AppTable.SETTINGS).update(key, { value })
  }
}

/**
 * Preconfigured LocalDatabase
 */
export const DB = new LocalDatabase(`${Strings.APP_NAME} v${Strings.VERSION}`)
