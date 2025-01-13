<template>
  <v-app>
    <v-app-bar>
      <v-sheet class="d-flex align-center justify-center" width="100%">
        <v-tabs
            v-model="selectedTab"
            align-tabs="center"
            color="primary">
          <v-tab value="HOME" to="/">
            Home
          </v-tab>
          <v-tab value="SEARCH" to="/search">
            Search
          </v-tab>
          <v-tab value="POPULAR" to="/popular">
            Popular
          </v-tab>
          <v-tab value="NOW_PLAYING" to="/now-playing">
            Now playing
          </v-tab>
          <v-tab value="TOP_RATED" to="/top-rated">
            Top rated
          </v-tab>
        </v-tabs>
      </v-sheet>
    </v-app-bar>

    <main class="mt-15">
      <slot/>
    </main>

  </v-app>
</template>

<script setup lang="ts">
export type Page = 'HOME' | 'SEARCH' | 'POPULAR' | 'NOW_PLAYING' | 'TOP_RATED'
const selectedTab = ref<Page>('HOME')
</script>

<style scoped>

</style>