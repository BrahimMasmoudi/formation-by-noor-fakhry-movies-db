<template>
  <v-tabs
      v-model="selectedType"
      align-tabs="center"
      color="primary"
      class="mt-4">
    <v-tab value="movies">Movies</v-tab>
    <v-tab value="series">Tv Series</v-tab>
  </v-tabs>

  <v-card-text>
    <v-tabs-window v-model="selectedType">
      <v-tabs-window-item value="movies">
        <v-row class="grid grid-cols-5 gap">
          <slot name="movies"/>
        </v-row>
      </v-tabs-window-item>

      <v-tabs-window-item value="series">
        <v-row class="grid grid-cols-5 gap">
          <slot name="series"/>
        </v-row>
      </v-tabs-window-item>
    </v-tabs-window>
  </v-card-text>
</template>

<script setup lang="ts">
export type Type = 'movies' | 'series'

const selectedType = ref<Type>('movies')

</script>

<style scoped>

</style>