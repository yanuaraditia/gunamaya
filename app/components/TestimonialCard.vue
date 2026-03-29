<script setup lang="ts">
import type { Testimonial } from "~/data/testimonials";

defineProps<{
  testimonial: Testimonial;
}>();
</script>

<template>
  <AppCard variant="interactive" class="flex h-full flex-col">
    <span class="mb-4 block font-serif text-3xl text-primary">"</span>
    <blockquote class="flex-1 text-base leading-relaxed text-foreground/90">
      {{ testimonial.quote }}
    </blockquote>
    <div class="mt-6 flex items-center gap-4">
      <div
        class="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10"
      >
        <span class="font-mono text-sm font-semibold text-primary">
          {{
            testimonial.name
              .split(" ")
              .map((n: string) => n[0])
              .join("")
          }}
        </span>
      </div>
      <div>
        <p class="text-sm font-semibold text-foreground">
          {{ testimonial.name }}
        </p>
        <p class="font-mono text-xs text-muted-foreground">
          {{ testimonial.title }}
        </p>
      </div>
    </div>
  </AppCard>
</template>
