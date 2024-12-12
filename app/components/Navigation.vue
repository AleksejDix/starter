<template>
  <nav>
    <NuxtLink :to="link.path" :key="link.path" v-for="link in navigation">
      {{ link.title }}
    </NuxtLink>
  </nav>
</template>

<script lang="ts" setup>
import type { ContentNavigationItem } from "@nuxt/content";

const navigation = inject<Ref<ContentNavigationItem[]>>("navigation");
</script>

<style scoped>
nav {
  display: flex;
}
</style>
