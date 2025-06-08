import type { Metadata } from "next";
import PageHeader from "../components/shared/PageHeader";

export const metadata: Metadata = {
  title: "Polityka Prywatności | TiRas",
  description: "Polityka prywatności firmy TiRas - informacje o przetwarzaniu danych osobowych.",
};

export default function PolitykaPrywatnosciPage() {
  return (
    <>
      <PageHeader 
        title="Polityka Prywatności" 
        description="Informacje o przetwarzaniu danych osobowych przez firmę TiRas"
        className="bg-gradient-to-r from-[#1A202C] to-[#2D3748]"
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md prose prose-lg prose-p:text-black prose-li:text-black prose-ul:text-black">
            <h2 className="text-[#00CAFF] border-b border-gray-200 pb-2">1. Informacje ogólne</h2>
            <p>
              1.1. Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych 
              przekazanych przez Użytkowników w związku z korzystaniem ze strony internetowej TiRas.
            </p>
            <p>
              1.2. Administratorem danych osobowych jest firma TiRas z siedzibą w Warszawie, 
              ul. Przykładowa 123, 00-000 Warszawa, NIP: 000-000-00-00, REGON: 000000000.
            </p>
            <p>
              1.3. Administrator danych osobowych dokłada wszelkich starań w celu zapewnienia 
              poszanowania prywatności i ochrony udzielonych informacji osobowych podczas 
              korzystania z witryny i dokonywania transakcji, a także podejmuje w tym celu 
              wszelkie niezbędne działania.
            </p>

            <h2 className="text-[#00CAFF] border-b border-gray-200 pb-2">2. Rodzaj zbieranych danych</h2>
            <p>
              2.1. Administrator może przetwarzać następujące dane osobowe Użytkowników:
            </p>
            <ul className="text-black font-medium">
              <li className="text-black">Imię i nazwisko</li>
              <li className="text-black">Adres e-mail</li>
              <li className="text-black">Numer telefonu</li>
              <li className="text-black">Adres zamieszkania/dostawy/wykonania usługi</li>
              <li className="text-black">Dane dotyczące zamówienia/zapytania</li>
            </ul>
            <p>
              2.2. W przypadku Użytkowników, którzy korzystają z usług wymagających płatności, 
              Administrator może przetwarzać dodatkowo dane dotyczące płatności, w tym dane 
              rachunku bankowego lub karty płatniczej, w zakresie niezbędnym do realizacji płatności.
            </p>

            <h2 className="text-[#00CAFF] border-b border-gray-200 pb-2">3. Cel zbierania danych</h2>
            <p>
              3.1. Dane osobowe Użytkowników są przetwarzane w celu:
            </p>
            <ul className="text-black font-medium">
              <li className="text-black">Realizacji zamówień i świadczenia usług</li>
              <li className="text-black">Odpowiedzi na zapytania i kontakt z klientem</li>
              <li className="text-black">Przesyłania informacji handlowych (za zgodą Użytkownika)</li>
              <li className="text-black">Prowadzenia działań marketingowych (za zgodą Użytkownika)</li>
              <li className="text-black">Realizacji obowiązków prawnych ciążących na Administratorze</li>
              <li className="text-black">Dochodzenia roszczeń</li>
            </ul>

            <h2 className="text-[#00CAFF] border-b border-gray-200 pb-2">4. Podstawa prawna przetwarzania danych</h2>
            <p>
              4.1. Dane osobowe są przetwarzane zgodnie z przepisami Rozporządzenia Parlamentu 
              Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony 
              osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego 
              przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).
            </p>
            <p>
              4.2. Podstawą prawną przetwarzania danych osobowych jest:
            </p>
            <ul className="text-black font-medium">
              <li className="text-black">Zgoda Użytkownika (art. 6 ust. 1 lit. a RODO)</li>
              <li className="text-black">Niezbędność do wykonania umowy lub podjęcia działań przed zawarciem umowy (art. 6 ust. 1 lit. b RODO)</li>
              <li className="text-black">Wypełnienie obowiązku prawnego ciążącego na Administratorze (art. 6 ust. 1 lit. c RODO)</li>
              <li className="text-black">Prawnie uzasadniony interes Administratora (art. 6 ust. 1 lit. f RODO)</li>
            </ul>

            <h2 className="text-[#00CAFF] border-b border-gray-200 pb-2">5. Okres przechowywania danych</h2>
            <p>
              5.1. Dane osobowe Użytkowników będą przechowywane przez okres niezbędny do realizacji 
              celów, dla których zostały zebrane, a po tym czasie przez okres wymagany przez przepisy prawa 
              lub do czasu przedawnienia roszczeń.
            </p>
            <p>
              5.2. Dane osobowe przetwarzane na podstawie zgody będą przechowywane do momentu jej wycofania.
            </p>

            <h2 className="text-[#00CAFF] border-b border-gray-200 pb-2">6. Prawa Użytkowników</h2>
            <p>
              6.1. Użytkownikom przysługują następujące prawa:
            </p>
            <ul className="text-black font-medium">
              <li className="text-black">Prawo dostępu do swoich danych oraz otrzymania ich kopii</li>
              <li className="text-black">Prawo do sprostowania (poprawiania) swoich danych</li>
              <li className="text-black">Prawo do usunięcia danych</li>
              <li className="text-black">Prawo do ograniczenia przetwarzania danych</li>
              <li className="text-black">Prawo do przenoszenia danych</li>
              <li className="text-black">Prawo do wniesienia sprzeciwu wobec przetwarzania danych</li>
              <li className="text-black">Prawo do cofnięcia zgody w dowolnym momencie (bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem)</li>
              <li className="text-black">Prawo do wniesienia skargi do organu nadzorczego (Prezes Urzędu Ochrony Danych Osobowych)</li>
            </ul>

            <h2 className="text-[#00CAFF] border-b border-gray-200 pb-2">7. Udostępnianie danych</h2>
            <p>
              7.1. Dane osobowe Użytkowników mogą być udostępniane podmiotom uprawnionym do ich otrzymania 
              na mocy obowiązujących przepisów prawa, a także podmiotom współpracującym z Administratorem 
              w zakresie niezbędnym do realizacji usług, takim jak:
            </p>
            <ul className="text-black font-medium">
              <li className="text-black">Dostawcy usług IT</li>
              <li className="text-black">Firmy kurierskie i transportowe</li>
              <li className="text-black">Dostawcy usług księgowych i prawnych</li>
              <li className="text-black">Dostawcy usług marketingowych</li>
            </ul>

            <h2 className="text-[#00CAFF] border-b border-gray-200 pb-2">8. Pliki cookies</h2>
            <p>
              8.1. Strona internetowa TiRas wykorzystuje pliki cookies (ciasteczka), czyli małe pliki 
              tekstowe zapisywane na urządzeniu końcowym Użytkownika, które służą do identyfikacji 
              przeglądarki Użytkownika w czasie korzystania z serwisu.
            </p>
            <p>
              8.2. Pliki cookies wykorzystywane są w celu:
            </p>
            <ul className="text-black font-medium">
              <li className="text-black">Dostosowania zawartości stron do preferencji Użytkownika</li>
              <li className="text-black">Optymalizacji korzystania ze strony internetowej</li>
              <li className="text-black">Tworzenia statystyk oglądalności</li>
              <li className="text-black">Utrzymania sesji Użytkownika</li>
            </ul>
            <p>
              8.3. Użytkownik może w każdej chwili wyłączyć w swojej przeglądarce opcję przyjmowania 
              cookies, jednak może to spowodować utrudnienia w korzystaniu z serwisu.
            </p>

            <h2 className="text-[#00CAFF] border-b border-gray-200 pb-2">9. Bezpieczeństwo danych</h2>
            <p>
              9.1. Administrator stosuje odpowiednie środki techniczne i organizacyjne zapewniające 
              bezpieczeństwo danych osobowych, w tym środki zapobiegające ich utracie, zniszczeniu, 
              uszkodzeniu oraz nieuprawnionemu dostępowi.
            </p>

            <h2 className="text-[#00CAFF] border-b border-gray-200 pb-2">10. Zmiany Polityki Prywatności</h2>
            <p>
              10.1. Administrator zastrzega sobie prawo do wprowadzania zmian w Polityce Prywatności. 
              Zmiany wchodzą w życie z chwilą opublikowania ich na stronie internetowej.
            </p>
            <p>
              10.2. Data ostatniej aktualizacji: 01.01.2023 r.
            </p>

            <h2 className="text-[#00CAFF] border-b border-gray-200 pb-2">11. Kontakt</h2>
            <p>
              11.1. W sprawach związanych z ochroną danych osobowych można kontaktować się 
              z Administratorem danych osobowych:
            </p>
            <ul className="text-black font-medium">
              <li className="text-black">Listownie: TiRas, ul. Przykładowa 123, 00-000 Warszawa</li>
              <li className="text-black">Mailowo: kontakt@tiras.pl</li>
              <li className="text-black">Telefonicznie: +48 123 456 789</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
} 