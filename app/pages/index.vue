<script setup lang="ts">
const { t } = useI18n()

// Título da aba do navegador. O computed faz o título mudar quando o idioma muda
useHead({
  title: computed(() => t('pages.home.pageTitle')),
})

// Lista dos cards. Por enquanto vem do i18n; na Etapa 7 virá do JSON mock do Strapi
const services = [1, 2, 3].map((n) => ({
  title: `pages.home.service${n}Title`,
  desc: `pages.home.service${n}Desc`,
}))
</script>

<template>
  <Container>
    <!-- Único <h1> da página -->
    <ContainerHeader
      :title="t('pages.home.heroTitle')"
      :description="t('pages.home.heroSummary')"
    />

    <section aria-labelledby="services-heading" class="pb-12">
      <h2 id="services-heading" class="mb-6 text-2xl font-semibold">
        {{ t('pages.home.servicesHeading') }}
      </h2>

      <ul class="grid-cards-center-3">
        <li v-for="service in services" :key="service.title">
          <Card class="h-full p-6">
            <h3 class="text-lg font-semibold">{{ t(service.title) }}</h3>
            <p class="mt-2 text-muted-foreground">{{ t(service.desc) }}</p>
          </Card>
        </li>
      </ul>
    </section>
  </Container>
</template>