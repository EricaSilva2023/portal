<script setup lang="ts">
// Props são os "parâmetros" do componente: <ContainerHeader title="..." />
defineProps<{
  title: string
  description?: string // o "?" indica que é opcional
}>()
</script>

<template>
  <header class="py-8">
    <h1 class="text-3xl font-bold">{{ title }}</h1>
    <p v-if="description" class="mt-2 text-muted-foreground">{{ description }}</p>
  </header>
</template>