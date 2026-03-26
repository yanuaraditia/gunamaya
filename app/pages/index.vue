<script setup lang="ts">
import { featuredProjects } from "~/data/projects";
import { testimonials } from "~/data/testimonials";
import { blogPosts } from "~/data/blog";

useSeoMeta({
  title: "Gunamaya — High-Performance Systems & AI Solutions",
  ogTitle: "Gunamaya — High-Performance Systems & AI Solutions",
  description:
    "Kami membangun sistem high-performance, mengintegrasikan AI, dan merancang arsitektur teknologi yang scalable untuk enterprise dan startup.",
  ogDescription:
    "Building high-performance systems & AI solutions for enterprise and startups.",
});

const stats = [
  { value: "10+", label: "Tahun pengalaman di enterprise & startup." },
  { value: "100K+", label: "Requests/second yang di-handle sistem kami." },
  { value: "99.9%", label: "Uptime target untuk semua production system." },
  { value: "6+", label: "Proyek flagship yang berhasil di-deliver." },
];

const services = [
  {
    title: "Custom Software & High-Performance Backend",
    description:
      "Membangun sistem yang bisa handle jutaan request dengan latency minimal. Dari microservices architecture sampai distributed systems.",
    icon: "lucide:server",
  },
  {
    title: "AI Integration & Automation",
    description:
      "Mengintegrasikan machine learning, NLP, dan computer vision ke dalam sistem existing tanpa mengganggu operasional.",
    icon: "lucide:brain",
  },
  {
    title: "Technology Consulting & Architecture",
    description:
      "Advisory untuk pemilihan tech stack, arsitektur sistem, dan strategi teknis yang future-proof dan scalable.",
    icon: "lucide:puzzle",
  },
];

const techStack = {
  backend: ["Golang", "Node.js", "Python", "Rust", "Laravel"],
  frontend: ["Vue.js", "Nuxt.js", "Inertia.js"],
  infra: ["Kubernetes", "Docker", "GCP", "AWS"],
};
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
          <Motion
            as="p"
            class="mb-6 font-mono text-sm text-primary"
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5 }"
          >
            // gunamaya.dev
          </Motion>
          <Motion
            as="h1"
            class="font-serif text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl"
            :initial="{ opacity: 0, y: 30 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.6, delay: 0.1 }"
          >
            Building
            <span class="gradient-text">High-Performance</span>
            Systems &
            <span class="gradient-text">AI</span> Solutions<span
              class="text-primary"
              >.</span
            >
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
            <NuxtLink
              to="/contact"
              class="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground transition-all hover:shadow-[0_0_20px_rgba(0,229,160,0.3)]"
            >
              Book a Consultation
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
                  d="M7 17L17 7M17 7H7M17 7v10"
                />
              </svg>
            </NuxtLink>
            <NuxtLink
              to="/work"
              class="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3.5 text-base font-medium text-foreground transition-all hover:border-primary/50"
            >
              View Portfolio
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
            </NuxtLink>
          </Motion>
        </div>
      </div>
    </section>

    <!-- Stats Strip -->
    <section class="border-y border-border">
      <div
        class="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-16 md:grid-cols-4 lg:px-8"
      >
        <Motion
          as="div"
          v-for="(stat, i) in stats"
          :key="stat.value"
          :initial="{ opacity: 0, y: 24 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true }"
          :transition="{ duration: 0.5, delay: i * 0.1 }"
        >
          <StatCounter :value="stat.value" :label="stat.label" />
        </Motion>
      </div>
    </section>

    <!-- Services Section -->
    <section class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeading title="What we build" label="// services" />
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
          title="Our work"
          subtitle="proven results"
          label="// portfolio"
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
          <NuxtLink
            to="/work"
            class="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:text-primary"
          >
            View All Projects
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
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeading title="Tech Stack" label="// tools we use" />
      <div class="grid gap-8 md:grid-cols-3">
        <Motion
          as="div"
          class="rounded-2xl border border-border bg-card p-6"
          :initial="{ opacity: 0, y: 30 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true }"
          :transition="{ duration: 0.5 }"
        >
          <h3 class="mb-4 font-mono text-sm font-semibold text-primary">
            Backend
          </h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in techStack.backend"
              :key="tech"
              class="rounded-lg bg-secondary px-3 py-1.5 font-mono text-sm text-foreground"
            >
              {{ tech }}
            </span>
          </div>
        </Motion>
        <Motion
          as="div"
          class="rounded-2xl border border-border bg-card p-6"
          :initial="{ opacity: 0, y: 30 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true }"
          :transition="{ duration: 0.5, delay: 0.1 }"
        >
          <h3 class="mb-4 font-mono text-sm font-semibold text-primary">
            Frontend
          </h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in techStack.frontend"
              :key="tech"
              class="rounded-lg bg-secondary px-3 py-1.5 font-mono text-sm text-foreground"
            >
              {{ tech }}
            </span>
          </div>
        </Motion>
        <Motion
          as="div"
          class="rounded-2xl border border-border bg-card p-6"
          :initial="{ opacity: 0, y: 30 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true }"
          :transition="{ duration: 0.5, delay: 0.2 }"
        >
          <h3 class="mb-4 font-mono text-sm font-semibold text-primary">
            Infrastructure
          </h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in techStack.infra"
              :key="tech"
              class="rounded-lg bg-secondary px-3 py-1.5 font-mono text-sm text-foreground"
            >
              {{ tech }}
            </span>
          </div>
        </Motion>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="border-y border-border">
      <div class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeading title="What clients say" label="// testimonials" />
        <div class="grid gap-6 md:grid-cols-2">
          <Motion
            as="div"
            v-for="(testimonial, i) in testimonials.slice(0, 4)"
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

    <!-- Blog Section -->
    <section class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div class="mb-12 flex items-center justify-between">
        <SectionHeading title="Engineering Blog" label="// latest posts" />
        <NuxtLink
          to="/blog"
          class="hidden items-center gap-2 text-sm font-medium text-primary transition-opacity hover:opacity-70 md:inline-flex"
        >
          All Posts
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
        </NuxtLink>
      </div>
      <div class="grid gap-6 md:grid-cols-3">
        <Motion
          as="div"
          v-for="(post, i) in blogPosts.slice(0, 3)"
          :key="post.slug"
          :initial="{ opacity: 0, y: 30 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true, amount: 0.1 }"
          :transition="{ duration: 0.5, delay: i * 0.1 }"
          :whileHover="{ y: -4, transition: { duration: 0.2 } }"
        >
          <BlogCard :post="post" />
        </Motion>
      </div>
    </section>
  </div>
</template>
