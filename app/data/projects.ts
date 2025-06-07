export type Project = {
  id: number;
  title: string;
  category: 'pergole' | 'tarasy' | 'zadaszenia';
  image: string;
  description: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Pergola nowoczesna z zadaszeniem",
    category: "pergole",
    image: "/images/projects/pergola-1.jpg",
    description: "Pergola z drewna modrzewiowego z ruchomym zadaszeniem tekstylnym. Realizacja w Warszawie."
  },
  {
    id: 2,
    title: "Taras z kompozytu",
    category: "tarasy",
    image: "/images/projects/taras-1.jpg",
    description: "Taras z kompozytu drewnianego odporny na warunki atmosferyczne. Realizacja w Krakowie."
  },
  {
    id: 3,
    title: "Zadaszenie tarasu",
    category: "zadaszenia",
    image: "/images/projects/zadaszenie-1.jpg",
    description: "Zadaszenie tarasu z drewna sosnowego impregnowanego. Realizacja w Poznaniu."
  },
  {
    id: 4,
    title: "Pergola klasyczna",
    category: "pergole",
    image: "/images/projects/pergola-2.jpg",
    description: "Klasyczna pergola z drewna dębowego. Realizacja we Wrocławiu."
  },
  {
    id: 5,
    title: "Taras drewniany z barierkami",
    category: "tarasy",
    image: "/images/projects/taras-2.jpg",
    description: "Taras z drewna egzotycznego z barierkami. Realizacja w Gdańsku."
  },
  {
    id: 6,
    title: "Zadaszenie wejścia",
    category: "zadaszenia",
    image: "/images/projects/zadaszenie-2.jpg",
    description: "Zadaszenie wejścia z drewna świerkowego. Realizacja w Łodzi."
  },
  {
    id: 7,
    title: "Pergola z oświetleniem LED",
    category: "pergole",
    image: "/images/projects/pergola-3.jpg",
    description: "Pergola z drewna sosnowego z wbudowanym oświetleniem LED. Realizacja w Katowicach."
  },
  {
    id: 8,
    title: "Taras nad basenem",
    category: "tarasy",
    image: "/images/projects/taras-3.jpg",
    description: "Taras drewniany wokół basenu z drewna tekowego. Realizacja w Szczecinie."
  },
  {
    id: 9,
    title: "Zadaszenie grilla",
    category: "zadaszenia",
    image: "/images/projects/zadaszenie-3.jpg",
    description: "Zadaszona strefa grillowa z drewna modrzewiowego. Realizacja w Bydgoszczy."
  }
]; 