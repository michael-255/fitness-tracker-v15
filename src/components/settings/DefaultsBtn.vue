<script setup lang="ts">
import { QBtn } from 'quasar'
import { useLogger } from '@/use/useLogger'
import { useSimpleDialogs } from '@/use/useSimpleDialogs'
import { Icon, NotifyColor } from '@/constants/ui-enums'
import * as jsonFile from '@/constants/exercises.json'

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
        testImport()
      } catch (error) {
        log.error('onDefaults', error)
      }
    }
  )
}

function testImport() {
  console.log(jsonFile.exercises)
}
</script>

<template>
  <QBtn label="Load Defaults" color="primary" @click="onDefaults()" />
</template>
