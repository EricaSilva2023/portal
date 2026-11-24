<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <footer class="border-t">
    <Container>
      <p class="py-6 text-sm text-muted-foreground">{{ t('footer.right') }}</p>
    </Container>
  </footer>
</template>