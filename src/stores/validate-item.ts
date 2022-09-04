import { AppTable } from '@/constants/data-enums'
import { defineStore, type StoreDefinition } from 'pinia'

/**
 * State of input component validation.
 */
const useValidateItemStore: StoreDefinition = defineStore({
  id: 'validate-item',

  /**
   * We assume that each field is valid by default since defaulted input values (Create) and
   * selected item values (Update) should always be valid.
   */
  state: () => ({
    item: {
      id: null,
      createdDate: null,
      name: null,
      description: null,
      activityStatus: null,
      parentId: null,
      note: null,
      recordStatus: null,
      finishedDate: null,
      exerciseTracks: null,
      weightLbsPerSet: null,
      repsPerSet: null,
      distanceMilesPerSet: null,
      durationMinutesPerSet: null,
      measurementType: null,
      parentMeasurementType: null,
      measurementValue: null,
      exerciseIds: null,
      exerciseRecordIds: null,
    },
  }),

  getters: {
    /**
     * The table item you want to validate the fields for.
     */
    tableItem:
      (state: any) =>
      (table: AppTable): boolean => {
        return {
          [AppTable.EXERCISES]: state.isExerciseValid,
          [AppTable.EXERCISE_RECORDS]: state.isExerciseRecordValid,
          [AppTable.MEASUREMENTS]: state.isMeasurementValid,
          [AppTable.MEASUREMENT_RECORDS]: state.isMeasurementRecordValid,
          [AppTable.WORKOUTS]: state.isWorkoutValid,
          [AppTable.WORKOUT_RECORDS]: state.isWorkoutRecordValid,
          [AppTable.LOGS]: false,
          [AppTable.SETTINGS]: false,
        }[table]
      },

    _areEntityFieldsValid: (state: any): boolean => {
      return state.item.id && state.item.createdDate
    },

    _areActivityFieldsValid: (state: any): boolean => {
      return state.item.name && state.item.description && state.item.activityStatus
    },

    _areRecordFieldsValid: (state: any): boolean => {
      return state.item.parentId && state.item.note && state.item.recordStatus
    },

    isExerciseValid: (state: any): boolean => {
      return (
        state._areEntityFieldsValid && state._areActivityFieldsValid && state.item.exerciseTracks
      )
    },

    isMeasurementValid: (state: any): boolean => {
      return (
        state._areEntityFieldsValid && state._areActivityFieldsValid && state.item.measurementType
      )
    },

    isWorkoutValid: (state: any): boolean => {
      return state._areEntityFieldsValid && state._areActivityFieldsValid && state.item.exerciseIds
    },

    isExerciseRecordValid: (state: any): boolean => {
      return (
        state._areEntityFieldsValid &&
        state._areRecordFieldsValid &&
        state.item.weightLbsPerSet &&
        state.item.repsPerSet &&
        state.item.distanceMilesPerSet &&
        state.item.durationMinutesPerSet
      )
    },

    isMeasurementRecordValid: (state: any): boolean => {
      return (
        state._areEntityFieldsValid &&
        state._areRecordFieldsValid &&
        state.item.parentMeasurementType &&
        state.item.measurementValue
      )
    },

    isWorkoutRecordValid: (state: any): boolean => {
      return (
        state._areEntityFieldsValid &&
        state._areRecordFieldsValid &&
        state.item.finishedDate &&
        state.item.exerciseRecordIds
      )
    },
  },
})

export default useValidateItemStore
