<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <AnimatePresence mode="wait">
        <Motion
          as="div"
          :key="route.fullPath"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :exit="{ opacity: 0 }"
          :transition="{ duration: 0.2 }"
        >
          <NuxtPage />
        </Motion>
      </AnimatePresence>
    </NuxtLayout>
  </div>
</template>
