
<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <!-- Fica escondido até receber foco com Tab, e então aparece no canto -->
  <a
    href="#main-content"
    class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
  >
    {{ t('a11y.skipToContent') }}
  </a>

  <AppHeader />
  <main id="main-content" tabindex="-1" class="focus:outline-none">
    <slot />
  </main>
  <AppFooter />
</template>