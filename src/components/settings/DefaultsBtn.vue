<script setup lang="ts">
import { QBtn } from 'quasar'
import { useLogger } from '@/use/useLogger'
import { useSimpleDialogs } from '@/use/useSimpleDialogs'
import { Icon, NotifyColor } from '@/constants/ui-enums'
import exercises from '@/constants/exercise-defaults.json'
import { AppData } from '@/models/AppData'
import { DB } from '@/services/LocalDatabase'
import type { Exercise } from '@/models/Exercise'
import { AppTable } from '@/constants/data-enums'

const { log } = useLogger()
const { confirmDialog } = useSimpleDialogs()

/**
 * Confirm if you want to load defaults into your tables.
 */
function onDefaults(): void {
  confirmDialog(
    'Load Defaults',
    'Load default entires into appropriate tables in the database?',
    Icon.INFO,
    NotifyColor.INFO,
    async (): Promise<void> => {
      try {
        loadDefaults()
      } catch (error) {
        log.error('onDefaults', error)
      }
    }
  )
}

async function loadDefaults() {
  const appData = new AppData({
    exercises: exercises as Exercise[],
  })

  await Promise.all([DB.bulkAdd(AppTable.EXERCISES, appData.exercises as Exercise[])])
}
</script>

<template>
  <QBtn label="Load Defaults" color="primary" @click="onDefaults()" />
</template>
