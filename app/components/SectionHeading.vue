<script setup lang="ts">
defineProps<{
  title: string;
  subtitle?: string;
  label?: string;
}>();
</script>

<template>
  <div class="mb-12">
    <Motion as="p"
      v-if="label"
      class="mb-3 font-mono text-sm text-primary"
      :initial="{ opacity: 0, y: 16 }"
      :whileInView="{ opacity: 1, y: 0 }"
      :inViewOptions="{ once: true }"
      :transition="{ duration: 0.5 }"
    >
      {{ label }}
    </Motion>
    <Motion as="h2"
      class="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl"
      :initial="{ opacity: 0, y: 20 }"
      :whileInView="{ opacity: 1, y: 0 }"
      :inViewOptions="{ once: true }"
      :transition="{ duration: 0.5, delay: 0.1 }"
    >
      <span v-if="subtitle"
        >{{ title }}<span class="text-primary">,</span><br />{{
          subtitle
        }}</span
      >
      <span v-else>{{ title }}</span>
    </Motion>
  </div>
</template>
