<script setup lang="ts">
import { faq as faqs } from "~/data/faq";

useSeoMeta({
  title: "Services — Gunamaya",
  ogTitle: "Services — Gunamaya",
  description:
    "Custom Software, AI Integration, dan Technology Consulting untuk enterprise dan startup yang butuh sistem scalable dan high-performance.",
  ogDescription: "Custom Software, AI Integration, dan Technology Consulting.",
});

const servicePillars = [
  {
    title: "Custom Software & High-Performance Backend",
    icon: "lucide:server",
    description:
      "Kami membangun sistem yang bisa handle jutaan request dengan latency minimal. Dari monolith ke microservices, dari MVP ke enterprise-grade platform.",
    capabilities: [
      "Microservices Architecture",
      "Distributed Systems",
      "API Design & Development",
      "Database Architecture",
      "Real-time Systems (WebSocket)",
      "Message Queue & Event-Driven",
      "Performance Optimization",
      "Load Testing & Benchmarking",
    ],
  },
  {
    title: "AI Integration & Automation",
    icon: "lucide:brain",
    description:
      "Mengintegrasikan kecerdasan buatan ke dalam bisnis Anda. Dari machine learning models sampai generative AI, kami memastikan AI bekerja di production — bukan hanya di notebook.",
    capabilities: [
      "Machine Learning Integration",
      "Natural Language Processing",
      "Computer Vision",
      "Generative AI (LLM)",
      "Data Pipeline & ETL",
      "Model Deployment & Monitoring",
      "AI-powered Automation",
      "Predictive Analytics",
    ],
  },
  {
    title: "Technology Consulting & Architecture",
    icon: "lucide:puzzle",
    description:
      "Advisory untuk keputusan teknis yang menentukan masa depan produk Anda. Kami membantu memilih tech stack, merancang arsitektur, dan membuat roadmap yang achievable.",
    capabilities: [
      "Tech Stack Selection",
      "System Architecture Design",
      "Cloud Strategy (GCP/AWS)",
      "DevOps & CI/CD Setup",
      "Technical Due Diligence",
      "Code Review & Audit",
      "Scalability Planning",
      "Migration Strategy",
    ],
  },
];

const techCapabilities = {
  backend: [
    "Golang",
    "Node.js",
    "Python",
    "Rust",
    "Laravel",
    "Express",
    "FastAPI",
    "Gin",
  ],
  frontend: ["Vue.js", "Nuxt.js", "Inertia.js", "Tailwind CSS", "TypeScript"],
  data: ["PostgreSQL", "Redis", "Elasticsearch", "MongoDB", "ClickHouse"],
  infra: ["Kubernetes", "Docker", "GCP", "AWS", "Terraform", "GitHub Actions"],
};

const engagementModels = [
  {
    title: "Project-Based",
    subtitle: "Untuk scope yang jelas dan timeline fixed",
    description:
      "Cocok untuk proyek dengan requirements yang sudah well-defined. Fixed price, fixed timeline, clear deliverables. Mulai dari discovery phase sampai deployment dan handover.",
  },
  {
    title: "Dedicated Team",
    subtitle: "Untuk kebutuhan jangka panjang dan ongoing",
    description:
      "Tim dedicated yang bekerja sebagai extension dari tim internal Anda. Flexible scaling, continuous delivery, dan deep domain knowledge yang terakumulasi over time.",
  },
  {
    title: "Strategic Consulting",
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
        <Motion as="p"
          class="mb-6 font-mono text-sm text-primary"
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5 }"
        >
          // services
        </Motion>
        <Motion as="h1"
          class="max-w-4xl font-serif text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl"
          :initial="{ opacity: 0, y: 30 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.1 }"
        >
          Engineering solutions that
          <span class="gradient-text">scale</span> with your ambition.
        </Motion>
        <Motion as="p"
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
          <Motion as="div"
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
                Capabilities
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
      <SectionHeading title="Tech Capabilities" label="// our toolbox" />
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Motion as="div"
          v-for="(techs, category, i) in techCapabilities"
          :key="category"
          class="rounded-2xl border border-border bg-card p-6"
          :initial="{ opacity: 0, y: 30 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true }"
          :transition="{ duration: 0.5, delay: (i as number) * 0.1 }"
        >
          <h3
            class="mb-4 font-mono text-sm font-semibold capitalize text-primary"
          >
            {{ category }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in techs"
              :key="tech"
              class="rounded-lg bg-secondary px-3 py-1.5 font-mono text-xs text-foreground"
            >
              {{ tech }}
            </span>
          </div>
        </Motion>
      </div>
    </section>
    <section class="border-y border-border">
      <div class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeading title="Engagement Models" label="// how we work" />
        <div class="grid gap-6 md:grid-cols-3">
          <Motion as="div"
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
        title="Frequently asked"
        subtitle="questions"
        label="// FAQ"
      />
      <Motion as="div"
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
