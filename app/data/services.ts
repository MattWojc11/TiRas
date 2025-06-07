export type Service = {
  id: number;
  title: string;
  description: string;
  imagePath: string;
  category: string;
};

export const services: Service[] = [
  {
    id: 1,
    title: "Pergole",
    description: "Eleganckie i funkcjonalne pergole na miarę Twoich oczekiwań. Wykonane z najwyższej jakości drewna, które łączy trwałość z estetyką.",
    imagePath: "/images/pergola.jpg",
    category: "pergole"
  },
  {
    id: 2,
    title: "Tarasy",
    description: "Piękne i trwałe tarasy drewniane. Odporne na warunki atmosferyczne, idealne do relaksu i spotkań z rodziną oraz przyjaciółmi.",
    imagePath: "/images/taras.jpg",
    category: "tarasy"
  },
  {
    id: 3,
    title: "Zadaszenia",
    description: "Funkcjonalne zadaszenia drewniane, które chronią przed słońcem i deszczem. Idealne rozwiązanie do ogrodu, na taras czy przed wejście do domu.",
    imagePath: "/images/zadaszenie.jpg",
    category: "zadaszenia"
  }
]; 