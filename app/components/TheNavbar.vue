<script setup lang="ts">
const route = useRoute();
const isMenuOpen = ref(false);
const isScrolled = ref(false);

const navLinks = [
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
];

function handleScroll() {
  isScrolled.value = window.scrollY > 50;
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}

function closeMenu() {
  isMenuOpen.value = false;
  document.body.style.overflow = "";
}

watch(() => route.path, closeMenu);

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  document.body.style.overflow = "";
});
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isScrolled ?
        'bg-background/80 backdrop-blur-xl border-b border-border'
      : 'bg-transparent',
    ]"
  >
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
    >
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2.5" @click="closeMenu">
        <span
          class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-mono text-sm font-bold text-primary-foreground"
        >
          G
        </span>
        <span
          class="font-serif text-lg font-bold tracking-tight text-foreground"
        >
          Gunamaya
        </span>
      </NuxtLink>

      <!-- Desktop Navigation -->
      <div class="hidden items-center gap-8 lg:flex">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          active-class="text-primary!"
        >
          {{ link.label }}
        </NuxtLink>
      </div>

      <!-- Desktop CTA -->
      <div class="hidden lg:flex">
        <NuxtLink
          to="/contact"
          class="btn-aurora rounded-full px-5 py-2.5 text-sm font-medium text-primary-foreground"
        >
          <span class="btn-aurora-content" data-text="Book a Consultation">
            <span>Book a Consultation</span>
          </span>
        </NuxtLink>
      </div>

      <!-- Mobile Hamburger -->
      <button
        class="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
        aria-label="Toggle menu"
        @click="toggleMenu"
      >
        <div class="flex w-6 flex-col gap-1.5">
          <span
            class="block h-0.5 w-full bg-foreground transition-all duration-300"
            :class="isMenuOpen ? 'translate-y-2 rotate-45' : ''"
          />
          <span
            class="block h-0.5 w-full bg-foreground transition-all duration-300"
            :class="isMenuOpen ? 'opacity-0' : ''"
          />
          <span
            class="block h-0.5 w-full bg-foreground transition-all duration-300"
            :class="isMenuOpen ? '-translate-y-2 -rotate-45' : ''"
          />
        </div>
      </button>
    </nav>

    <!-- Mobile Overlay -->
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background"
      >
        <div class="flex flex-col items-center gap-8">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="font-serif text-3xl font-semibold text-foreground transition-colors hover:text-primary"
            @click="closeMenu"
          >
            {{ link.label }}
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="btn-aurora mt-4 rounded-full px-8 py-3 text-lg font-medium text-primary-foreground"
            @click="closeMenu"
          >
            <span class="btn-aurora-content" data-text="Book a Consultation">
              <span>Book a Consultation</span>
            </span>
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>
