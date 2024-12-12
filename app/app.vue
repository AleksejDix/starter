<template>
  <div>
    <Navigation />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const { data: navigation } = await useAsyncData(
  "navigation",
  () => queryCollectionNavigation("pages").where("path", "NOT LIKE", "/"),
  {
    transform: (data) => {
      return data.map((item) => {
        return {
          ...item,
          title: item.title,
        };
      });
    },
  }
);

provide("navigation", navigation);
</script>
