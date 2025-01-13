<template>
  <v-card class="pa-4" variant="flat" :to="`/item/movie-${series.id}`">
    <NuxtLink>
      <img class="rounded-t-lg" :src="`${imageSiteUrl}${series.poster_path}`" alt="Movie Image"/>
    </NuxtLink>
    <div>
      <h5 class="my-2 text-lg font-bold tracking-tight text-black text-center dark:text-white">
        {{ series.name }} ({{ getYear }})
      </h5>

      <v-card v-if="series.overview" height="200"
              class="px-4 pt-2 text-sm font-medium text-white bg-primary rounded-lg ">
        {{ isFullDetails ? series.overview : `${series.overview.slice(0, 170)}...` }}
      </v-card>

      <p v-else
         class=" px-3 py-2 text-sm font-medium text-white bg-bg-primary rounded-lg">
        No overview available
      </p>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import type {Series} from "~/types/series";

const {series} = defineProps<{
  series: Series
  isFullDetails?: boolean
}>()

const getYear = computed(() => {
  const date = new Date(series.first_air_date)
  return date.getFullYear()
})

const imageSiteUrl = 'https://image.tmdb.org/t/p/w500/'

const itemState = useState('chosenItem', () => {
})

const changeItemState = (item: any) => {
  itemState.value = item
}
</script>

<style scoped>

</style>