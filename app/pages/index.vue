<script setup lang="ts">
import { featuredProjects } from "~/data/projects";
import { testimonials } from "~/data/testimonials";

useSeoMeta({
  title: "Gunamaya — Sistem Berperforma Tinggi & Solusi AI",
  ogTitle: "Gunamaya — Sistem Berperforma Tinggi & Solusi AI",
  description:
    "Kami membangun sistem high-performance, mengintegrasikan AI, dan merancang arsitektur teknologi yang scalable untuk enterprise dan startup.",
  ogDescription:
    "Membangun sistem berperforma tinggi & solusi AI untuk enterprise dan startup.",
});

const services = [
  {
    title: "Software Kustom & Backend Berperforma Tinggi",
    description:
      "Membangun sistem yang bisa handle jutaan request dengan latency minimal. Dari microservices architecture sampai distributed systems.",
    icon: "lucide:server",
  },
  {
    title: "Integrasi AI & Otomasi",
    description:
      "Mengintegrasikan machine learning, NLP, dan computer vision ke dalam sistem existing tanpa mengganggu operasional.",
    icon: "lucide:brain",
  },
  {
    title: "Konsultasi Teknologi & Arsitektur",
    description:
      "Advisory untuk pemilihan tech stack, arsitektur sistem, dan strategi teknis yang future-proof dan scalable.",
    icon: "lucide:puzzle",
  },
];

const techStack = {
  backend: [
    { name: "Golang", icon: "simple-icons:go" },
    { name: "Node.js", icon: "simple-icons:nodedotjs" },
    { name: "Python", icon: "simple-icons:python" },
    { name: "Rust", icon: "simple-icons:rust" },
    { name: "Laravel", icon: "simple-icons:laravel" },
  ],
  frontend: [
    { name: "Vue.js", icon: "simple-icons:vuedotjs" },
    { name: "Nuxt.js", icon: "simple-icons:nuxtdotjs" },
    { name: "Inertia.js", icon: "simple-icons:inertia" },
  ],
  infra: [
    { name: "Kubernetes", icon: "simple-icons:kubernetes" },
    { name: "Docker", icon: "simple-icons:docker" },
    { name: "GCP", icon: "simple-icons:googlecloud" },
    { name: "AWS", icon: "simple-icons:amazonwebservices" },
  ],
};

const allTech = [
  ...techStack.backend,
  ...techStack.frontend,
  ...techStack.infra,
];
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative flex items-center overflow-hidden pt-20">
      <!-- Gradient orbs -->
      <div class="hero-orb hero-orb-1" />
      <div class="hero-orb hero-orb-2" />
      <div class="hero-orb hero-orb-3" />
      <!-- Concentric rings -->
      <div class="hero-rings hero-rings-left" />
      <div class="hero-rings hero-rings-right" />
      <!-- Dot grid overlay -->
      <div class="absolute inset-0 dot-grid opacity-20" />

      <div class="relative mx-auto max-w-7xl px-6 py-24">
        <div class="mx-auto max-w-3xl text-center">
          <TypewriterLabel text="gunamaya.dev" trigger="animate" class="mb-6" />
          <Motion
            as="h1"
            class="font-serif text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl"
            :initial="{ opacity: 0, y: 30 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.6, delay: 0.1 }"
          >
            Membangun Sistem
            <span class="gradient-text">Berperforma Tinggi</span>
            & Solusi
            <span class="gradient-text">AI</span
            ><span class="text-primary">.</span>
          </Motion>
          <Motion
            as="p"
            class="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
            :initial="{ opacity: 0, y: 24 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.2 }"
          >
            Kami membangun sistem yang bisa handle jutaan request,
            mengintegrasikan AI ke dalam bisnis Anda, dan merancang arsitektur
            teknologi yang scalable dari day one.
          </Motion>
          <Motion
            as="div"
            class="mt-10 flex flex-wrap items-center justify-center gap-4"
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.3 }"
          >
            <AppButton to="/contact" label="Mari Berkolaborasi">
              Mari Berkolaborasi
            </AppButton>
            <AppButton to="/work" variant="outline">
              Lihat Portofolio
            </AppButton>
          </Motion>
        </div>
      </div>
    </section>

    <!-- Tech Logo Marquee -->
    <section class="relative border-y border-border overflow-hidden">
      <!-- Fade edges -->
      <div
        class="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-background to-transparent"
      />
      <div
        class="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-background to-transparent"
      />
      <div class="mx-auto max-w-7xl py-10">
        <!-- Scrolling track -->
        <div class="flex animate-scroll-left w-max gap-10 items-center">
          <div v-for="tech in allTech" :key="tech.name" class="px-3">
            <Icon :name="tech.icon" class="h-9 w-9 text-muted-foreground/50 transition-colors duration-300 hover:text-primary" />
          </div>
          <!-- Duplicate for seamless loop -->
          <div v-for="tech in allTech" :key="tech.name + '-dup'" class="px-3">
            <Icon :name="tech.icon" class="h-9 w-9 text-muted-foreground/50 transition-colors duration-300 hover:text-primary" />
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeading title="Yang kami bangun" label="// layanan" />
      <div class="grid gap-6 md:grid-cols-3">
        <Motion
          as="div"
          v-for="(service, i) in services"
          :key="service.title"
          :initial="{ opacity: 0, y: 30 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true, amount: 0.2 }"
          :transition="{ duration: 0.5, delay: i * 0.1 }"
          :whileHover="{ y: -4, transition: { duration: 0.2 } }"
        >
          <ServiceCard
            :title="service.title"
            :description="service.description"
            :icon="service.icon"
            link="/services"
          />
        </Motion>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section class="border-y border-border">
      <div class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeading
          title="Karya kami"
          subtitle="hasil terbukti"
          label="// portofolio"
        />
        <div class="grid gap-6 md:grid-cols-2">
          <Motion
            as="div"
            v-for="(project, i) in featuredProjects.slice(0, 4)"
            :key="project.slug"
            :initial="{ opacity: 0, y: 30 }"
            :whileInView="{ opacity: 1, y: 0 }"
            :inViewOptions="{ once: true, amount: 0.1 }"
            :transition="{ duration: 0.5, delay: i * 0.1 }"
            :whileHover="{ y: -4, transition: { duration: 0.2 } }"
          >
            <ProjectCard :project="project" />
          </Motion>
        </div>
        <div class="mt-12 text-center">
          <AppButton to="/work" variant="outline" size="sm">
            Lihat Semua Proyek
            <svg
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </AppButton>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="border-y border-border">
      <div class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeading title="Kata klien kami" label="// testimoni" />
        <div class="grid gap-6 md:grid-cols-3">
          <Motion
            as="div"
            v-for="(testimonial, i) in testimonials"
            :key="i"
            :initial="{ opacity: 0, y: 30 }"
            :whileInView="{ opacity: 1, y: 0 }"
            :inViewOptions="{ once: true, amount: 0.1 }"
            :transition="{ duration: 0.5, delay: i * 0.1 }"
          >
            <TestimonialCard :testimonial="testimonial" />
          </Motion>
        </div>
      </div>
    </section>
  </div>
</template>
