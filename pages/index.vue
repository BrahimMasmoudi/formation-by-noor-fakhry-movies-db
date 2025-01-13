<template>
  <Tabs>
    <template #movies>
      <v-col sm="6" lg="2" md="3" v-for="movie in dataMovies?.movies?.results">
        <MovieCard :movie="movie"/>
      </v-col>
      <v-bottom-navigation>
        <v-pagination v-model="moviesPagination" :length="dataMovies?.movies?.total_pages ?? 1" total-visible="7"/>
      </v-bottom-navigation>
    </template>

    <template #series>
      <v-col sm="6" lg="2" md="3" v-for="series in dataSeries?.series?.results">
        <SeriesCard :series="series"/>
      </v-col>
      <v-bottom-navigation>
        <v-pagination v-model="seriesPagination" :length="dataSeries?.series?.total_pages ?? 1" total-visible="7" />
      </v-bottom-navigation>
    </template>
  </Tabs>
</template>

<script setup lang="ts">
const moviesPagination = ref(1)
const seriesPagination = ref(1)
const {data : dataMovies} = await useFetch('/api/movies/discover',{query : {page : moviesPagination}})
const {data : dataSeries} = await useFetch('/api/series/discover',{query : {page : seriesPagination}})
</script>

<style scoped>

</style>