<template>
  <v-card variant="flat" :to="`/item/movie-${movie.id}`" class="d-flex flex-col align-center justify-center pa-4">
    <v-img v-if="movie.poster_path" class="rounded-lg" :src="`${imageSiteUrl}${movie.poster_path}`"
           width="300"
           alt="series Image" cover/>
    <v-img v-else height="265px"
           width="100%"
           alt="error Image"
           :src="'https://png.pngtree.com/png-vector/20220520/ourmid/pngtree-404-icon-graphic-design-template-vector-isolated-png-image_4641202.png'"
           cover>
    </v-img>
    <div>
      <h5 class="my-2 text-lg font-bold tracking-tight text-black text-center dark:text-white">
        {{ movie.title }} ({{ getYear }})
      </h5>

      <v-card v-if="movie.overview" height="200"
              class="px-4 pt-2 text-sm font-medium text-white bg-primary rounded-lg ">
        {{ isFullDetails ? movie.overview : `${movie.overview.slice(0, 170)}...` }}
      </v-card>

      <v-card v-else height="200"
              class="px-4 pt-2 text-sm font-medium d-flex justify-center align-center text-white bg-primary rounded-lg ">
        No overview available
      </v-card>
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