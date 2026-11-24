<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath() // acrescenta /en-GY ou /es-VE quando preciso
</script>

<template>
  <header class="border-b">
    <Container>
      <nav :aria-label="t('nav.rotulo')" class="flex items-center justify-between py-4">
        <ul class="flex gap-4">
          <li><NuxtLink :to="localePath('/')" class="rounded-sm focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none">{{ t('nav.home') }}</NuxtLink></li>
          <li><NuxtLink :to="localePath('/sobre')" class="rounded-sm focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none">{{ t('nav.about') }}</NuxtLink></li>
        </ul>
        <ThemeToggle />
      </nav>
    </Container>
  </header>
</template>