import AllProjectsGallery from "../components/projects/AllProjectsGallery";
import { Suspense } from "react";

export const metadata = {
  title: 'Realizacje | TiRas - Konstrukcje Drewniane',
  description: 'Zobacz nasze zrealizowane projekty pergoli, tarasów i zadaszeń. Pergole ogrodowe, tarasy drewniane i inne konstrukcje drewniane wykonane przez firmę TiRas.',
};

export default function RealizacjePage() {
  return (
    <>
      {/* Hero section */}
      <section className="relative py-24 bg-[#2D3748]">
        <div className="absolute inset-0 bg-[url('/images/realizacje-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Nasze realizacje</h1>
            <p className="text-xl mb-8">
              Przeglądaj galerię naszych projektów i zainspiruj się do stworzenia własnej przestrzeni.
              Pergole, tarasy, zadaszenia i inne konstrukcje drewniane wykonane z pasją i dbałością o detale.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <Suspense fallback={<div className="py-16 text-center">Ładowanie projektów...</div>}>
        <AllProjectsGallery />
      </Suspense>

      {/* Call to action */}
      <section className="py-16 bg-[#E6F9FF]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-black">Masz pomysł na własny projekt?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Skontaktuj się z nami, aby omówić szczegóły. Oferujemy bezpłatną konsultację i wycenę.
          </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/kontakt" className="btn btn-primary">
            Skontaktuj się z nami
              </a>
              <a href="/o-nas" className="btn btn-secondary">
                Poznaj naszą firmę
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 