<template>
  <v-card class="pa-4" variant="flat" :to="`/item/movie-${movie.id}`">
    <NuxtLink>
      <img class="rounded-t-lg" :src="`${imageSiteUrl}${movie.poster_path}`" alt="Movie Image"/>
    </NuxtLink>
    <div>
      <h5 class="my-2 text-lg font-bold tracking-tight text-black text-center dark:text-white">
        {{ movie.title }} ({{ getYear }})
      </h5>
      <v-card v-if="movie.overview" height="200"
              class="px-4 pt-2 text-sm font-medium text-white bg-primary rounded-lg ">
        {{ isFullDetails ? movie.overview : `${movie.overview.slice(0, 180)}...` }}
      </v-card>

      <p v-else
         class=" px-3 py-2 text-sm font-medium text-white bg-bg-primary rounded-lg">
        No overview available
      </p>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import type {Movie} from "~/types/movie";

const {movie} = defineProps<{
  movie: Movie,
  isFullDetails?: boolean
}>()

const imageSiteUrl = 'https://image.tmdb.org/t/p/w500/'

const getYear = computed(() => {
  const date = new Date(movie.release_date)
  return date.getFullYear()
})

</script>

<style scoped>

</style>