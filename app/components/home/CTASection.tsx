import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#2D3748] to-[#1A202C] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Gotowy na realizację swojego projektu?</h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Skontaktuj się z nami, aby omówić szczegóły i otrzymać bezpłatną wycenę. 
            Zrealizujemy Twój wymarzony projekt pergoli, tarasu lub zadaszenia.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/kontakt" className="btn btn-primary bg-[#00CAFF] text-white hover:bg-[#0099CC]">
              Skontaktuj się z nami
            </Link>
            <Link href="/realizacje" className="btn btn-secondary border-white text-white hover:bg-white/10">
              Zobacz nasze realizacje
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 