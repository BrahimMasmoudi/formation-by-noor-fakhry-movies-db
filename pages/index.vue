<template>
  <NuxtLayout name="tabs">
    <template #movies>
      <v-col sm="6" lg="2" md="3" v-for="movie in movies">
        <MovieCard :movie="movie"/>
      </v-col>
    </template>

    <template #series>
      <v-col sm="6" lg="2" md="3" v-for="series in seriesList">
        <SeriesCard :series="series"/>
      </v-col>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'tabs'
})
const movies = useState(() => [])
const seriesList = useState(() => [])

await useFetch('/api/movies/discover', {
  transform: data => {
    movies.value = data.movies.results
    seriesList.value = data.series.results
  }
})


</script>

<style scoped>

</style>