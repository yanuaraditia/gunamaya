<script setup lang="ts">
import { team } from "~/data/team";

useSeoMeta({
  title: "About — Gunamaya",
  ogTitle: "About — Gunamaya",
  description:
    "Tim di balik Gunamaya — Principal Engineers dengan 10+ tahun pengalaman membangun high-performance systems dan AI solutions.",
  ogDescription:
    "Tim di balik Gunamaya — Engineers yang membangun high-performance systems.",
});

const trackRecord = [
  {
    value: "10+",
    label: "Tahun pengalaman combined di enterprise dan startup engineering.",
  },
  {
    value: "6+",
    label: "Proyek flagship yang berhasil di-deliver ke production.",
  },
  {
    value: "100K+",
    label: "Requests/second yang di-handle oleh sistem yang kami bangun.",
  },
  {
    value: "99.9%",
    label: "Uptime target yang konsisten kami capai di production.",
  },
];

const principles = [
  {
    title: "Engineering Excellence",
    description:
      "Setiap baris kode ditulis dengan standar tinggi. Clean architecture, comprehensive testing, dan production-grade quality bukan opsional — itu default.",
  },
  {
    title: "Scalability First",
    description:
      "Arsitektur yang kami rancang bisa scale dari ratusan ke jutaan users tanpa rewrite. Kami memikirkan bottleneck sebelum mereka terjadi.",
  },
  {
    title: "Pragmatic Innovation",
    description:
      "Kami menggunakan teknologi cutting-edge ketika memang tepat, bukan karena hype. Setiap decision didasarkan pada data dan pengalaman.",
  },
  {
    title: "Transparency & Communication",
    description:
      "Progress yang jelas, timeline yang realistis, dan honest feedback. Kami percaya komunikasi yang baik adalah fondasi partnership yang kuat.",
  },
];
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-16">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <Motion as="p"
          class="mb-6 font-mono text-sm text-primary"
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5 }"
        >
          // about us
        </Motion>
        <Motion as="h1"
          class="max-w-4xl font-serif text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl"
          :initial="{ opacity: 0, y: 30 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.1 }"
        >
          Engineers who build
          <span class="gradient-text">systems that matter</span>
        </Motion>
        <Motion as="p"
          class="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg"
          :initial="{ opacity: 0, y: 24 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.2 }"
        >
          Gunamaya adalah tim engineers dengan obsesi terhadap performa,
          scalability, dan clean architecture. Kami percaya bahwa teknologi yang
          tepat bisa menjadi competitive advantage terbesar untuk bisnis Anda.
        </Motion>
      </div>
    </section>

    <!-- Track Record Stats -->
    <section class="border-y border-border">
      <div class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeading title="Track Record" label="// in numbers" />
        <div class="grid grid-cols-2 gap-12 md:grid-cols-4">
          <Motion as="div"
            v-for="(stat, i) in trackRecord"
            :key="stat.value"
            :initial="{ opacity: 0, y: 24 }"
            :whileInView="{ opacity: 1, y: 0 }"
            :inViewOptions="{ once: true }"
            :transition="{ duration: 0.5, delay: i * 0.1 }"
          >
            <div class="font-mono text-4xl font-bold text-primary md:text-5xl">
              {{ stat.value }}
            </div>
            <p class="mt-3 text-sm leading-relaxed text-muted-foreground">
              {{ stat.label }}
            </p>
          </Motion>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeading title="The Team" label="// who we are" />
      <div class="grid gap-6 md:grid-cols-2">
        <Motion as="div"
          v-for="(member, i) in team"
          :key="member.name"
          :initial="{ opacity: 0, y: 30 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true, amount: 0.2 }"
          :transition="{ duration: 0.5, delay: i * 0.1 }"
          :whileHover="{ y: -4, transition: { duration: 0.2 } }"
        >
          <TeamMemberCard :member="member" />
        </Motion>
      </div>
    </section>

    <!-- Principles -->
    <section class="border-y border-border">
      <div class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeading title="How we work" label="// principles" />
        <div class="grid gap-8 md:grid-cols-2">
          <Motion as="div"
            v-for="(principle, i) in principles"
            :key="principle.title"
            class="rounded-2xl border border-border bg-card p-8"
            :initial="{ opacity: 0, y: 30 }"
            :whileInView="{ opacity: 1, y: 0 }"
            :inViewOptions="{ once: true, amount: 0.2 }"
            :transition="{ duration: 0.5, delay: i * 0.1 }"
          >
            <h3 class="font-serif text-xl font-bold text-foreground">
              {{ principle.title }}
            </h3>
            <p class="mt-4 text-sm leading-relaxed text-muted-foreground">
              {{ principle.description }}
            </p>
          </Motion>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div class="text-center">
        <Motion as="p"
          class="mb-4 font-mono text-sm text-primary"
          :initial="{ opacity: 0, y: 16 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true }"
          :transition="{ duration: 0.5 }"
        >
          // let's talk
        </Motion>
        <Motion as="h2"
          class="mx-auto max-w-2xl font-serif text-3xl font-bold text-foreground md:text-4xl"
          :initial="{ opacity: 0, y: 24 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true }"
          :transition="{ duration: 0.5, delay: 0.1 }"
        >
          Siap membangun sesuatu yang luar biasa?
        </Motion>
        <Motion as="p"
          class="mx-auto mt-6 max-w-xl text-base text-muted-foreground"
          :initial="{ opacity: 0, y: 20 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true }"
          :transition="{ duration: 0.5, delay: 0.2 }"
        >
          Mari diskusikan bagaimana kami bisa membantu bisnis Anda dengan
          engineering yang solid dan arsitektur yang scalable.
        </Motion>
        <Motion as="div"
          class="mt-10"
          :initial="{ opacity: 0, y: 16 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true }"
          :transition="{ duration: 0.5, delay: 0.3 }"
        >
          <NuxtLink
            to="/contact"
            class="inline-block rounded-full bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground transition-all hover:shadow-[0_0_20px_rgba(0,229,160,0.3)]"
          >
            Book a Consultation
          </NuxtLink>
        </Motion>
      </div>
    </section>
  </div>
</template>
