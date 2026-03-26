<script setup lang="ts">
import { projects } from "~/data/projects";

useSeoMeta({
  title: "Portfolio — Gunamaya",
  ogTitle: "Portfolio — Gunamaya",
  description:
    "Proyek-proyek yang telah kami bangun: dari enterprise platform sampai AI-powered systems.",
  ogDescription: "Proyek-proyek yang telah kami bangun.",
});
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-16">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <Motion
          as="p"
          class="mb-6 font-mono text-sm text-primary"
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5 }"
        >
          // portfolio
        </Motion>
        <Motion
          as="h1"
          class="max-w-3xl font-serif text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl"
          :initial="{ opacity: 0, y: 30 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.1 }"
        >
          Systems we've
          <span class="gradient-text">built</span
          ><span class="text-primary">,</span><br />
          problems we've solved.
        </Motion>
        <Motion
          as="p"
          class="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
          :initial="{ opacity: 0, y: 24 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.2 }"
        >
          Setiap proyek adalah bukti komitmen kami terhadap engineering
          excellence dan arsitektur yang scalable.
        </Motion>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
      <div class="grid gap-6 md:grid-cols-2">
        <Motion
          as="div"
          v-for="(project, i) in projects"
          :key="project.slug"
          :initial="{ opacity: 0, y: 30 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true, amount: 0.1 }"
          :transition="{ duration: 0.5, delay: (i % 2) * 0.1 }"
          :whileHover="{ y: -4, transition: { duration: 0.2 } }"
        >
          <ProjectCard :project="project" />
        </Motion>
      </div>
    </section>

    <!-- Bottom CTA -->
    <section class="border-t border-border">
      <div class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <Motion
          as="p"
          class="mx-auto max-w-3xl text-center text-lg leading-relaxed text-muted-foreground md:text-xl"
          :initial="{ opacity: 0, y: 24 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true }"
          :transition="{ duration: 0.5 }"
        >
          Punya ide atau tantangan teknis? Kami siap membantu merancang dan
          membangun solusi yang tepat untuk bisnis Anda.
        </Motion>
        <Motion
          as="div"
          class="mt-10 text-center"
          :initial="{ opacity: 0, y: 16 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true }"
          :transition="{ duration: 0.5, delay: 0.1 }"
        >
          <NuxtLink
            to="/contact"
            class="btn-aurora inline-block rounded-full px-8 py-3.5 text-base font-medium text-primary-foreground"
          >
            <span class="btn-aurora-content" data-text="Book a Consultation">
              <span>Book a Consultation</span>
            </span>
          </NuxtLink>
        </Motion>
      </div>
    </section>
  </div>
</template>
