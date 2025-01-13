<template>
  <NuxtLayout name="tabs">
    <template #movies>
      <v-col sm="6" lg="2" md="3" v-for="movie in data?.movies?.results">
        <MovieCard :movie="movie"/>
      </v-col>
    </template>

    <template #series>
      <v-col sm="6" lg="2" md="3" v-for="series in data?.series?.results">
        <SeriesCard :series="series"/>
      </v-col>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'tabs'
})
const {data} = await useFetch('/api/movies/popular')

</script>

<style scoped>

</style>