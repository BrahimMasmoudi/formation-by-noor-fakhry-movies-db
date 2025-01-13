<template>
  <div>
    <v-tabs
        v-model="selectedType"
        align-tabs="center"
        color="primary"
        class="mt-4">
      <v-tab value="movies">Featured Movies</v-tab>
      <v-tab value="series"> Featured Tv Series</v-tab>
    </v-tabs>

    <v-card-text>
      <v-tabs-window v-model="selectedType">
        <v-tabs-window-item value="movies">
          <v-row class="grid grid-cols-5 gap">
            <v-col sm="6" lg="2" md="3" v-for="movie in movies">
              <MovieCard :movie="movie"/>
            </v-col>
          </v-row>
        </v-tabs-window-item>

        <v-tabs-window-item value="series">
          <v-row class="grid grid-cols-5 gap">
            <v-col sm="6" lg="2" md="3" v-for="series in seriesList">
              <SeriesCard :series="series"/>
            </v-col>
          </v-row>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
  </div>
</template>

<script setup lang="ts">
export type Type = 'movies' | 'series'
const movies = useState(() => [])
const seriesList = useState(() => [])
const selectedType = ref<Type>('movies')

await useFetch('/api/movies/discover', {
  transform: data => {
    movies.value = data.movies.results
    seriesList.value = data.series.results
  }
})


</script>

<style scoped>

</style>