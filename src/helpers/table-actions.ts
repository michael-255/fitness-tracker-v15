import { AppTable } from '@/constants/data-enums'
import type { DataObject, TableActions } from '@/constants/types-interfaces'
import { Exercise } from '@/models/Exercise'
import { ExerciseRecord } from '@/models/ExerciseRecord'
import { Measurement } from '@/models/Measurement'
import { MeasurementRecord } from '@/models/MeasurementRecord'
import { Workout } from '@/models/Workout'
import { WorkoutRecord } from '@/models/WorkoutRecord'
import { DB } from '@/services/LocalDatabase'
import useReportStore from '@/stores/report'

const report = useReportStore()

/**
 * Gets the actions that can be run on a table.
 * @param table
 * @returns TableActions object
 */
export function getTableActions(table: AppTable): TableActions {
  return {
    [AppTable.EXERCISES]: getExerciseActions(),
    [AppTable.EXERCISE_RECORDS]: getExerciseRecordActions(),
    [AppTable.MEASUREMENTS]: getMeasurementActions(),
    [AppTable.MEASUREMENT_RECORDS]: getMeasurementRecordActions(),
    [AppTable.WORKOUTS]: getWorkoutActions(),
    [AppTable.WORKOUT_RECORDS]: getWorkoutRecordActions(),
    [AppTable.LOGS]: getLogActions(),
    [AppTable.SETTINGS]: getSettingActions(),
  }[table]
}

function getExerciseActions(): TableActions {
  return {
    getRows: async () => await DB.getAll(AppTable.EXERCISES),
    createRow: async (data: DataObject) => {
      const { id, createdDate, name, description, activityStatus, exerciseTracks } = data
      await DB.add(
        AppTable.EXERCISES,
        new Exercise({
          id,
          createdDate,
          name,
          description,
          activityStatus,
          exerciseTracks,
        })
      )
    },
    updateRow: async () => async (data: DataObject) => {
      const { originalId, id, createdDate, name, description, activityStatus, exerciseTracks } =
        data
      await DB.updateById(
        originalId,
        AppTable.EXERCISES,
        new Exercise({
          id,
          createdDate,
          name,
          description,
          activityStatus,
          exerciseTracks,
        })
      )
    },
    generateReport: async (id: string) => {
      const records = await DB.getByParentId(AppTable.EXERCISE_RECORDS, id)
      const parent = await DB.getById(AppTable.EXERCISES, id)
      report.generateExerciseReport({
        records,
        parent,
      })
    },
  }
}

function getExerciseRecordActions(): TableActions {
  return {
    getRows: async () => await DB.getAll(AppTable.EXERCISE_RECORDS),
    createRow: async (data: DataObject) => {
      const {
        id,
        createdDate,
        parentId,
        note,
        recordStatus,
        weightLbsPerSet,
        repsPerSet,
        distanceMilesPerSet,
        durationMinutesPerSet,
      } = data
      await DB.add(
        AppTable.EXERCISE_RECORDS,
        new ExerciseRecord({
          id,
          createdDate,
          parentId,
          note,
          recordStatus,
          weightLbsPerSet,
          repsPerSet,
          distanceMilesPerSet,
          durationMinutesPerSet,
        })
      )
    },
    updateRow: async () => async (data: DataObject) => {
      const {
        originalId,
        id,
        createdDate,
        parentId,
        note,
        recordStatus,
        weightLbsPerSet,
        repsPerSet,
        distanceMilesPerSet,
        durationMinutesPerSet,
      } = data
      await DB.updateById(
        originalId,
        AppTable.EXERCISE_RECORDS,
        new ExerciseRecord({
          id,
          createdDate,
          parentId,
          note,
          recordStatus,
          weightLbsPerSet,
          repsPerSet,
          distanceMilesPerSet,
          durationMinutesPerSet,
        })
      )
    },
  }
}

function getMeasurementActions(): TableActions {
  return {
    getRows: async () => await DB.getAll(AppTable.MEASUREMENTS),
    createRow: async (data: DataObject) => {
      const { id, createdDate, name, description, activityStatus, measurementType } = data
      await DB.add(
        AppTable.MEASUREMENTS,
        new Measurement({
          id,
          createdDate,
          name,
          description,
          activityStatus,
          measurementType,
        })
      )
    },
    updateRow: async () => async (data: DataObject) => {
      const { originalId, id, createdDate, name, description, activityStatus, measurementType } =
        data
      await DB.updateById(
        AppTable.MEASUREMENTS,
        originalId,
        new Measurement({
          id,
          createdDate,
          name,
          description,
          activityStatus,
          measurementType,
        })
      )
    },
    generateReport: async (id: string) => {
      const records = await DB.getByParentId(AppTable.MEASUREMENT_RECORDS, id)
      const parent = await DB.getById(AppTable.MEASUREMENTS, id)
      report.generateMeasurementReport({
        records,
        parent,
      })
    },
  }
}

function getMeasurementRecordActions(): TableActions {
  return {
    getRows: async () => await DB.getAll(AppTable.MEASUREMENT_RECORDS),
    createRow: async (data: DataObject) => {
      const {
        id,
        createdDate,
        parentId,
        note,
        recordStatus,
        parentMeasurementType,
        measurementValue,
      } = data
      await DB.add(
        AppTable.MEASUREMENT_RECORDS,
        new MeasurementRecord({
          id,
          createdDate,
          parentId,
          note,
          recordStatus,
          parentMeasurementType,
          measurementValue,
        })
      )
    },
    updateRow: async () => async (data: DataObject) => {
      const {
        originalId,
        id,
        createdDate,
        parentId,
        note,
        recordStatus,
        parentMeasurementType,
        measurementValue,
      } = data
      await DB.updateById(
        originalId,
        AppTable.MEASUREMENT_RECORDS,
        new MeasurementRecord({
          id,
          createdDate,
          parentId,
          note,
          recordStatus,
          parentMeasurementType,
          measurementValue,
        })
      )
    },
  }
}

function getWorkoutActions(): TableActions {
  return {
    getRows: async () => await DB.getAll(AppTable.WORKOUTS),
    createRow: async (data: DataObject) => {
      const { id, createdDate, name, description, activityStatus, exerciseIds } = data
      await DB.add(
        AppTable.WORKOUTS,
        new Workout({
          id,
          createdDate,
          name,
          description,
          activityStatus,
          exerciseIds,
        })
      )
    },
    updateRow: async () => async (data: DataObject) => {
      const { originalId, id, createdDate, name, description, activityStatus, exerciseIds } = data
      await DB.updateById(
        originalId,
        AppTable.WORKOUTS,
        new Workout({
          id,
          createdDate,
          name,
          description,
          activityStatus,
          exerciseIds,
        })
      )
    },
    generateReport: async (id: string) => {
      const records = await DB.getByParentId(AppTable.WORKOUT_RECORDS, id)
      const parent = await DB.getById(AppTable.WORKOUTS, id)
      report.generateWorkoutReport({
        records,
        parent,
      })
    },
  }
}

function getWorkoutRecordActions(): TableActions {
  return {
    getRows: async () => await DB.getAll(AppTable.WORKOUT_RECORDS),
    createRow: async (data: DataObject) => {
      const { id, createdDate, parentId, note, recordStatus, finishedDate, exerciseRecordIds } =
        data
      await DB.add(
        AppTable.WORKOUT_RECORDS,
        new WorkoutRecord({
          id,
          createdDate,
          parentId,
          note,
          recordStatus,
          finishedDate,
          exerciseRecordIds,
        })
      )
    },
    updateRow: async () => async (data: DataObject) => {
      const {
        originalId,
        id,
        createdDate,
        parentId,
        note,
        recordStatus,
        finishedDate,
        exerciseRecordIds,
      } = data
      await DB.updateById(
        originalId,
        AppTable.WORKOUT_RECORDS,
        new WorkoutRecord({
          id,
          createdDate,
          parentId,
          note,
          recordStatus,
          finishedDate,
          exerciseRecordIds,
        })
      )
    },
  }
}

function getLogActions(): TableActions {
  return { getRows: async () => await DB.getAll(AppTable.LOGS) }
}

function getSettingActions(): TableActions {
  return { getRows: async () => await DB.getAll(AppTable.SETTINGS) }
}
