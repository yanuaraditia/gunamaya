<script setup lang="ts">
const currentYear = new Date().getFullYear();

const navigationLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
];

const serviceLinks = [
  { label: "Custom Software", to: "/services" },
  { label: "AI Integration", to: "/services" },
  { label: "Tech Consulting", to: "/services" },
];

const connectLinks = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
];

const contactLinks = [
  { label: "hello@gunamaya.com", href: "mailto:hello@gunamaya.com" },
  {
    label: "WhatsApp Business",
    href: "https://wa.me/6281234567890",
  },
];
</script>

<template>
  <footer class="border-t border-border bg-background">
    <!-- CTA Section -->
    <section class="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
      <Motion as="p"
        class="mb-4 font-mono text-sm text-primary"
        :initial="{ opacity: 0, y: 16 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :inViewOptions="{ once: true }"
        :transition="{ duration: 0.5 }"
      >
        // ready to build?
      </Motion>
      <Motion as="h2"
        class="mx-auto max-w-3xl font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl"
        :initial="{ opacity: 0, y: 24 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :inViewOptions="{ once: true }"
        :transition="{ duration: 0.5, delay: 0.1 }"
      >
        Discuss Your AI & Tech Strategy
      </Motion>
      <Motion as="p"
        class="mx-auto mt-6 max-w-xl text-base text-muted-foreground"
        :initial="{ opacity: 0, y: 20 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :inViewOptions="{ once: true }"
        :transition="{ duration: 0.5, delay: 0.2 }"
      >
        Mari diskusikan bagaimana teknologi yang tepat bisa mengakselerasi
        bisnis Anda.
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
          Book a Strategic Consultation
        </NuxtLink>
      </Motion>
    </section>

    <!-- Main Footer -->
    <div class="border-t border-border">
      <div class="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <!-- Logo + Tagline -->
        <div class="mb-12 flex items-center gap-2.5">
          <span
            class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-mono text-sm font-bold text-primary-foreground"
          >
            G
          </span>
          <span class="font-serif text-xl font-bold text-foreground">
            Gunamaya
          </span>
        </div>

        <!-- Link Columns -->
        <div class="grid grid-cols-2 gap-8 md:grid-cols-4">
          <!-- Navigation -->
          <div>
            <h3
              class="mb-4 font-mono text-xs font-semibold uppercase tracking-wider text-primary"
            >
              Navigation
            </h3>
            <ul class="space-y-3">
              <li v-for="link in navigationLinks" :key="link.to">
                <NuxtLink
                  :to="link.to"
                  class="text-sm text-foreground/70 transition-colors hover:text-primary"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Services -->
          <div>
            <h3
              class="mb-4 font-mono text-xs font-semibold uppercase tracking-wider text-primary"
            >
              Services
            </h3>
            <ul class="space-y-3">
              <li v-for="link in serviceLinks" :key="link.label">
                <NuxtLink
                  :to="link.to"
                  class="text-sm text-foreground/70 transition-colors hover:text-primary"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Connect -->
          <div>
            <h3
              class="mb-4 font-mono text-xs font-semibold uppercase tracking-wider text-primary"
            >
              Connect
            </h3>
            <ul class="space-y-3">
              <li v-for="link in connectLinks" :key="link.label">
                <a
                  :href="link.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-sm text-foreground/70 transition-colors hover:text-primary"
                >
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h3
              class="mb-4 font-mono text-xs font-semibold uppercase tracking-wider text-primary"
            >
              Contact
            </h3>
            <ul class="space-y-3">
              <li v-for="link in contactLinks" :key="link.label">
                <a
                  :href="link.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-sm text-foreground/70 transition-colors hover:text-primary"
                >
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-border">
      <div
        class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 font-mono text-xs text-muted-foreground sm:flex-row lg:px-8"
      >
        <span>&copy; Gunamaya {{ currentYear }}. All rights reserved.</span>
        <span class="text-primary/50">Building systems that scale.</span>
      </div>
    </div>
  </footer>
</template>
