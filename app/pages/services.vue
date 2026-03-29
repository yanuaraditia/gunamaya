<script setup lang="ts">
import { faq as faqs } from "~/data/faq";

useSeoMeta({
  title: "Layanan — Gunamaya",
  ogTitle: "Layanan — Gunamaya",
  description:
    "Custom Software, Integrasi AI, dan Konsultasi Teknologi untuk enterprise dan startup yang butuh sistem scalable dan high-performance.",
  ogDescription: "Custom Software, Integrasi AI, dan Konsultasi Teknologi.",
});

const servicePillars = [
  {
    title: "Software Kustom & Backend Berperforma Tinggi",
    icon: "lucide:server",
    description:
      "Kami membangun sistem yang bisa handle jutaan request dengan latency minimal. Dari monolith ke microservices, dari MVP ke enterprise-grade platform.",
    capabilities: [
      "Arsitektur Microservices",
      "Sistem Terdistribusi",
      "Desain & Pengembangan API",
      "Arsitektur Database",
      "Sistem Real-time (WebSocket)",
      "Message Queue & Event-Driven",
      "Optimasi Performa",
      "Load Testing & Benchmarking",
    ],
  },
  {
    title: "Integrasi AI & Otomasi",
    icon: "lucide:brain",
    description:
      "Mengintegrasikan kecerdasan buatan ke dalam bisnis Anda. Dari machine learning models sampai generative AI, kami memastikan AI bekerja di production — bukan hanya di notebook.",
    capabilities: [
      "Integrasi Machine Learning",
      "Pemrosesan Bahasa Alami",
      "Computer Vision",
      "AI Generatif (LLM)",
      "Pipeline Data & ETL",
      "Deployment & Monitoring Model",
      "Otomasi Berbasis AI",
      "Analitik Prediktif",
    ],
  },
  {
    title: "Konsultasi Teknologi & Arsitektur",
    icon: "lucide:puzzle",
    description:
      "Advisory untuk keputusan teknis yang menentukan masa depan produk Anda. Kami membantu memilih tech stack, merancang arsitektur, dan membuat roadmap yang achievable.",
    capabilities: [
      "Pemilihan Tech Stack",
      "Desain Arsitektur Sistem",
      "Strategi Cloud (GCP/AWS)",
      "Setup DevOps & CI/CD",
      "Due Diligence Teknis",
      "Review & Audit Kode",
      "Perencanaan Skalabilitas",
      "Strategi Migrasi",
    ],
  },
];

const techCapabilities = {
  backend: [
    { name: "Golang", icon: "simple-icons:go" },
    { name: "Node.js", icon: "simple-icons:nodedotjs" },
    { name: "Python", icon: "simple-icons:python" },
    { name: "Rust", icon: "simple-icons:rust" },
    { name: "Laravel", icon: "simple-icons:laravel" },
    { name: "Express", icon: "simple-icons:express" },
    { name: "FastAPI", icon: "simple-icons:fastapi" },
    { name: "Gin", icon: "simple-icons:gin" },
  ],
  frontend: [
    { name: "Vue.js", icon: "simple-icons:vuedotjs" },
    { name: "Nuxt.js", icon: "simple-icons:nuxtdotjs" },
    { name: "Inertia.js", icon: "simple-icons:inertia" },
    { name: "Tailwind CSS", icon: "simple-icons:tailwindcss" },
    { name: "TypeScript", icon: "simple-icons:typescript" },
  ],
  data: [
    { name: "PostgreSQL", icon: "simple-icons:postgresql" },
    { name: "Redis", icon: "simple-icons:redis" },
    { name: "Elasticsearch", icon: "simple-icons:elasticsearch" },
    { name: "MongoDB", icon: "simple-icons:mongodb" },
    { name: "ClickHouse", icon: "simple-icons:clickhouse" },
  ],
  infra: [
    { name: "Kubernetes", icon: "simple-icons:kubernetes" },
    { name: "Docker", icon: "simple-icons:docker" },
    { name: "GCP", icon: "simple-icons:googlecloud" },
    { name: "AWS", icon: "simple-icons:amazonwebservices" },
    { name: "Terraform", icon: "simple-icons:terraform" },
    { name: "GitHub Actions", icon: "simple-icons:githubactions" },
  ],
};

const engagementModels = [
  {
    title: "Berbasis Proyek",
    subtitle: "Untuk scope yang jelas dan timeline fixed",
    description:
      "Cocok untuk proyek dengan requirements yang sudah well-defined. Fixed price, fixed timeline, clear deliverables. Mulai dari discovery phase sampai deployment dan handover.",
  },
  {
    title: "Tim Dedikasi",
    subtitle: "Untuk kebutuhan jangka panjang dan ongoing",
    description:
      "Tim dedicated yang bekerja sebagai extension dari tim internal Anda. Flexible scaling, continuous delivery, dan deep domain knowledge yang terakumulasi over time.",
  },
  {
    title: "Konsultasi Strategis",
    subtitle: "Untuk arsitektur dan technical advisory",
    description:
      "Advisory sessions untuk keputusan teknis besar: pemilihan tech stack, arsitektur system design, scaling strategy, atau technical due diligence untuk investor.",
  },
];

const openIndex = ref<number | null>(null);

function toggleFaq(index: number) {
  openIndex.value = openIndex.value === index ? null : index;
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-16">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <TypewriterLabel text="layanan" trigger="animate" class="mb-6" />
        <Motion
          as="h1"
          class="max-w-4xl font-serif text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl"
          :initial="{ opacity: 0, y: 30 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.1 }"
        >
          Solusi engineering yang
          <span class="gradient-text">tumbuh</span> bersama ambisi Anda.
        </Motion>
        <Motion
          as="p"
          class="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
          :initial="{ opacity: 0, y: 24 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.2 }"
        >
          Tiga pilar layanan kami dirancang untuk membantu bisnis Anda membangun
          teknologi yang robust, intelligent, dan future-proof.
        </Motion>
      </div>
    </section>

    <!-- Service Pillars -->
    <section class="border-y border-border">
      <div class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div class="space-y-20">
          <Motion
            as="div"
            v-for="(service, idx) in servicePillars"
            :key="service.title"
            class="grid items-start gap-12 lg:grid-cols-2"
            :initial="{ opacity: 0, y: 40 }"
            :whileInView="{ opacity: 1, y: 0 }"
            :inViewOptions="{ once: true, amount: 0.2 }"
            :transition="{ duration: 0.6 }"
          >
            <div>
              <div
                class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10"
              >
                <Icon :name="service.icon" class="h-6 w-6 text-primary" />
              </div>
              <h2
                class="font-serif text-2xl font-bold text-foreground md:text-3xl"
              >
                {{ service.title }}
              </h2>
              <p class="mt-4 text-base leading-relaxed text-muted-foreground">
                {{ service.description }}
              </p>
            </div>
            <div>
              <h3 class="mb-4 font-mono text-sm font-semibold text-primary">
                Kapabilitas
              </h3>
              <ul class="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <li
                  v-for="cap in service.capabilities"
                  :key="cap"
                  class="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <span class="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {{ cap }}
                </li>
              </ul>
            </div>
          </Motion>
        </div>
      </div>
    </section>

    <!-- Tech Capabilities -->
    <section class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeading title="Kapabilitas Teknologi" label="// perangkat kami" />
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Motion
          as="div"
          v-for="(techs, category, i) in techCapabilities"
          :key="category"
          :initial="{ opacity: 0, y: 30 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true }"
          :transition="{ duration: 0.5, delay: (i as number) * 0.1 }"
        >
          <AppCard padding="sm">
            <h3
              class="mb-4 font-mono text-sm font-semibold capitalize text-primary"
            >
              {{ category }}
            </h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in techs"
                :key="tech.name"
                class="group/tech inline-flex items-center gap-2 rounded-lg bg-secondary px-3 py-1.5 font-mono text-xs text-foreground transition-colors duration-200 hover:text-primary"
              >
                <Icon :name="tech.icon" class="h-4 w-4 text-muted-foreground transition-colors duration-200 group-hover/tech:text-primary" />
                {{ tech.name }}
              </span>
            </div>
          </AppCard>
        </Motion>
      </div>
    </section>
    <section class="border-y border-border">
      <div class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeading title="Model Kerja Sama" label="// cara kami bekerja" />
        <div class="grid gap-6 md:grid-cols-3">
          <Motion
            as="div"
            v-for="(model, i) in engagementModels"
            :key="model.title"
            :initial="{ opacity: 0, y: 30 }"
            :whileInView="{ opacity: 1, y: 0 }"
            :inViewOptions="{ once: true, amount: 0.2 }"
            :transition="{ duration: 0.5, delay: i * 0.1 }"
            :whileHover="{ y: -4, transition: { duration: 0.2 } }"
          >
            <EngagementCard
              :title="model.title"
              :subtitle="model.subtitle"
              :description="model.description"
              link="/contact"
            />
          </Motion>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeading
        title="Pertanyaan yang"
        subtitle="sering diajukan"
        label="// FAQ"
      />
      <Motion
        as="div"
        class="mx-auto max-w-3xl"
        :initial="{ opacity: 0, y: 30 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :inViewOptions="{ once: true }"
        :transition="{ duration: 0.6 }"
      >
        <div
          v-for="(item, index) in faqs"
          :key="index"
          class="border-b border-border"
        >
          <button
            class="flex w-full items-center justify-between py-6 text-left"
            @click="toggleFaq(index)"
          >
            <span
              class="pr-4 font-serif text-base font-semibold text-foreground md:text-lg"
            >
              {{ item.question }}
            </span>
            <svg
              class="h-5 w-5 shrink-0 text-primary transition-transform duration-300"
              :class="openIndex === index ? 'rotate-45' : ''"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
          <div
            class="grid transition-all duration-300"
            :class="
              openIndex === index ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'
            "
          >
            <div class="overflow-hidden">
              <p class="text-sm leading-relaxed text-muted-foreground">
                {{ item.answer }}
              </p>
            </div>
          </div>
        </div>
      </Motion>
    </section>
  </div>
</template>
