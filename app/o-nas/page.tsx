import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "O nas | TiRas",
  description: "Poznaj naszą firmę TiRas - specjalistów w zakresie konstrukcji drewnianych. Wieloletnie doświadczenie i pasja.",
};

export default function AboutPage() {
  return <AboutPageClient />;
} 