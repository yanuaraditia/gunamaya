export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Gunamaya membantu kami mewujudkan platform AI video generation dari nol. Mereka tidak hanya paham teknis, tapi juga mengerti bagaimana produk harus terasa bagi pengguna. Hasilnya, Centracast jadi sangat simpel dan otomatis seperti yang kami impikan.",
    name: "Centracast",
    title: "AI Video Generation Platform",
  },
  {
    quote:
      "Kolaborasi dengan Gunamaya sangat profesional dan terstruktur. Aplikasi Kecamatan Berdaya yang mereka bangun benar-benar mendukung program pemberdayaan daerah kami. Proses komunikasi dan delivery tepat waktu — mitra yang bisa diandalkan.",
    name: "Kecamatan Berdaya",
    title: "Program Pemerintah Jawa Tengah",
  },
  {
    quote:
      "Yang membedakan Gunamaya adalah mereka benar-benar mendengarkan kebutuhan kami, mengajukan pertanyaan yang tepat, dan menghasilkan solusi yang melampaui ekspektasi. Engineering quality dan perhatian terhadap detail mereka luar biasa.",
    name: "PT Mitra Digital",
    title: "Enterprise Solutions Partner",
  },
];
