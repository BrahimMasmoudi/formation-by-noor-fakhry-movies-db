<template>
  <Tabs>
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
  </Tabs>
</template>

<script setup lang="ts">
import Tabs from "~/components/Tabs.vue";

const {data} = await useFetch('/api/upcoming')

</script>

<style scoped>

</style>