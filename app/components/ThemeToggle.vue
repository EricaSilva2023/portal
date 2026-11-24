<script setup lang="ts">
import { Moon, Sun } from '@lucide/vue'

const { t } = useI18n()
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

function toggle() {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>

<template>
  <!-- ClientOnly: o servidor não sabe qual tema a pessoa usa; evita aviso de "hydration mismatch" -->
  <ClientOnly>
    <Button variant="ghost" size="icon" :aria-label="t('theme.toggle')" @click="toggle">
      <Sun v-if="isDark" aria-hidden="true" />
      <Moon v-else aria-hidden="true" />
    </Button>
  </ClientOnly>
</template>