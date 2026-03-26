<script setup lang="ts">
defineProps<{
  value: string;
  label: string;
}>();
</script>

<template>
  <div class="text-center">
    <Motion
      as="div"
      class="font-mono text-3xl font-bold text-primary md:text-4xl"
      :initial="{ opacity: 0, y: 16 }"
      :whileInView="{ opacity: 1, y: 0 }"
      :inViewOptions="{ once: true }"
      :transition="{ duration: 0.6 }"
    >
      {{ value }}
    </Motion>
    <Motion
      as="p"
      class="mt-2 text-sm text-muted-foreground"
      :initial="{ opacity: 0, y: 12 }"
      :whileInView="{ opacity: 1, y: 0 }"
      :inViewOptions="{ once: true }"
      :transition="{ duration: 0.6, delay: 0.15 }"
    >
      {{ label }}
    </Motion>
  </div>
</template>
