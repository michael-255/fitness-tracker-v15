import { AppTable } from '@/constants/data-enums'
import type { TableActions } from '@/constants/types-interfaces'
import { DB } from '@/services/LocalDatabase'
// import useReportStore from '@/stores/report'

// const report = useReportStore()

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
  return { getRows: async () => await DB.getAll(AppTable.EXERCISES) }
}

function getExerciseRecordActions(): TableActions {
  return { getRows: async () => await DB.getAll(AppTable.EXERCISE_RECORDS) }
}

function getMeasurementActions(): TableActions {
  return { getRows: async () => await DB.getAll(AppTable.MEASUREMENTS) }
}

function getMeasurementRecordActions(): TableActions {
  return { getRows: async () => await DB.getAll(AppTable.MEASUREMENT_RECORDS) }
}

function getWorkoutActions(): TableActions {
  return { getRows: async () => await DB.getAll(AppTable.WORKOUTS) }
}

function getWorkoutRecordActions(): TableActions {
  return { getRows: async () => await DB.getAll(AppTable.WORKOUT_RECORDS) }
}

function getLogActions(): TableActions {
  return { getRows: async () => await DB.getAll(AppTable.LOGS) }
}

function getSettingActions(): TableActions {
  return { getRows: async () => await DB.getAll(AppTable.SETTINGS) }
}

// function getExampleActions(table: AppTable): TableActions {
//   return {
//     getRows: async () => await DB.getAll(table),
//     createRow: async (data: DataObject) => {
//       await DB.add(
//         AppTable.EXAMPLES,
//         new Example({
//           id: data.id,
//           createdDate: data.createdDate,
//           name: data.name,
//           description: data.description,
//         })
//       )
//     },
//     updateRow: async (data: DataObject) => {
//       await DB.updateById(AppTable.EXAMPLES, data.originalId, {
//         id: data.id,
//         createdDate: data.createdDate,
//         name: data.name,
//         description: data.description,
//       })
//     },
//     generateReport: async (id: string) => {
//       report.generateExamplesReport(await DB.getByParentId(AppTable.EXAMPLE_RECORDS, id))
//     },
//   }
// }

// function getExampleRecordActions(table: AppTable): TableActions {
//   return {
//     getRows: async () => await DB.getAll(table),
//     createRow: async (data: DataObject) => {
//       await DB.add(
//         AppTable.EXAMPLE_RECORDS,
//         new ExampleRecord({
//           id: data.id,
//           createdDate: data.createdDate,
//           parentId: data.parentId,
//           number: data.number,
//           primaryRounds: [...data.primaryRounds],
//           secondaryRounds: [...data.secondaryRounds],
//         })
//       )
//     },
//     updateRow: async (data: DataObject) => {
//       await DB.updateById(AppTable.EXAMPLE_RECORDS, data.originalId, {
//         id: data.id,
//         createdDate: data.createdDate,
//         parentId: data.parentId,
//         number: data.number,
//         primaryRounds: [...data.primaryRounds],
//         secondaryRounds: [...data.secondaryRounds],
//       })
//     },
//   }
// }
