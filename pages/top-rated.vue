<template>
  <Tabs v-model="selectedTab">
    <template #movie>
      <v-col sm="6" lg="2" md="3" v-for="movie in elements?.movies?.results">
        <MovieCard :movie="movie"/>
      </v-col>
    </template>

    <template #tv>
      <v-col sm="6" lg="2" md="3" v-for="series in elements?.series?.results">
        <SeriesCard :series="series"/>
      </v-col>
    </template>
  </Tabs>
</template>

<script setup lang="ts">
import Tabs, {type Type} from "~/components/Tabs.vue";

const selectedTab = ref<Type>('movie')
const elements = ref()

watch(() => selectedTab.value, async (value) => {
  elements.value = undefined
  elements.value = await $fetch(`/api/${value}/top-rated`)
}, {immediate: true})
</script>

<style scoped>

</style>