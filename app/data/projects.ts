export interface Project {
  slug: string;
  name: string;
  description: string;
  tags: string[];
  image?: string;
  featured?: boolean;
  comingSoon?: boolean;
}

export const projects: Project[] = [
  {
    slug: "centracast",
    name: "Centracast",
    description:
      "Platform AI untuk generate video secara simpel dan otomatis — dari ide ke konten dalam hitungan menit.",
    tags: ["AI", "Video Generation", "Automasi"],
    featured: true,
  },
  {
    slug: "kecamatan-berdaya",
    name: "Kecamatan Berdaya",
    description:
      "Aplikasi pendukung program pemerintah Jawa Tengah untuk pemberdayaan kecamatan dan percepatan pembangunan daerah.",
    tags: ["Pemerintahan", "Aplikasi Web", "Pembangunan Daerah"],
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
