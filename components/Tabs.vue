<template>
  <v-tabs
      v-model="selectedType"
      align-tabs="center"
      color="primary"
      class="mt-4">
    <v-tab value="movie">Movies</v-tab>
    <v-tab value="tv">Tv Series</v-tab>
  </v-tabs>

  <v-card-text>
    <v-tabs-window v-model="selectedType">
      <v-tabs-window-item value="movie">
        <v-row class="grid grid-cols-5 gap">
          <slot name="movie"/>
        </v-row>
      </v-tabs-window-item>

      <v-tabs-window-item value="tv">
        <v-row class="grid grid-cols-5 gap">
          <slot name="tv"/>
        </v-row>
      </v-tabs-window-item>
    </v-tabs-window>
  </v-card-text>
</template>

<script setup lang="ts">
export type Type = 'movie' | 'tv'

const selectedType = defineModel({default : 'movie'})

</script>

<style scoped>

</style>