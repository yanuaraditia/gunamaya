<script setup lang="ts">
import type { Project } from "~/data/projects";

defineProps<{
  project: Project;
  large?: boolean;
}>();
</script>

<template>
  <AppCard
    variant="clickable"
    padding="none"
    :to="project.comingSoon ? undefined : `/work`"
    :class="large ? 'md:col-span-1' : ''"
  >
    <!-- Dot grid header -->
    <div
      class="relative aspect-video w-full overflow-hidden bg-secondary dot-grid"
    >
      <div class="flex h-full items-center justify-center">
        <span class="font-mono text-2xl font-bold text-primary/20">
          {{ project.name }}
        </span>
      </div>
      <div
        v-if="project.comingSoon"
        class="absolute bottom-4 left-4 rounded-full bg-background/80 px-3 py-1 font-mono text-xs font-medium text-muted-foreground backdrop-blur-sm"
      >
        Segera hadir
      </div>
    </div>

    <!-- Content -->
    <div class="p-6">
      <h3 class="font-serif text-lg font-semibold text-foreground">
        {{ project.name }}
      </h3>
      <p class="mt-2 text-sm leading-relaxed text-muted-foreground">
        {{ project.description }}
      </p>
      <div class="mt-4 flex flex-wrap gap-2">
        <TagBadge v-for="tag in project.tags" :key="tag" :label="tag" />
      </div>
    </div>
  </AppCard>
</template>
