<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="py-8">
    <p class="text-muted-foreground">{{ t('pages.about.pageTitle') }}</p>
  </div>
  <ContainerHeader title="{{ t('pages.about.pageTitle') }}" description="Esta é a página sobre o portal." />
</template>