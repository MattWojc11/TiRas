import type { Metadata } from "next";
import PageHeader from "../components/shared/PageHeader";

export const metadata: Metadata = {
  title: "Regulamin | TiRas",
  description: "Regulamin korzystania z usług firmy TiRas - konstrukcje drewniane, pergole, tarasy, zadaszenia.",
};

export default function RegulaminPage() {
  return (
    <>
      <PageHeader 
        title="Regulamin" 
        description="Zasady korzystania z usług firmy TiRas"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>§1. Postanowienia ogólne</h2>
            <p>
              1.1. Niniejszy regulamin określa zasady korzystania z usług oferowanych przez firmę TiRas, 
              specjalizującą się w projektowaniu i wykonawstwie konstrukcji drewnianych, w tym pergoli, 
              tarasów i zadaszeń.
            </p>
            <p>
              1.2. Złożenie zamówienia jest równoznaczne z akceptacją warunków niniejszego regulaminu.
            </p>
            <p>
              1.3. Firma TiRas zastrzega sobie prawo do zmiany regulaminu. Zmiany wchodzą w życie z chwilą 
              opublikowania na stronie internetowej.
            </p>

            <h2>§2. Zamówienia i realizacja</h2>
            <p>
              2.1. Zamówienia można składać poprzez formularz kontaktowy na stronie internetowej, telefonicznie 
              lub drogą mailową.
            </p>
            <p>
              2.2. Warunkiem rozpoczęcia realizacji zamówienia jest podpisanie umowy oraz wpłata zaliczki 
              w wysokości ustalonej w umowie.
            </p>
            <p>
              2.3. Termin realizacji zamówienia jest ustalany indywidualnie i zależy od zakresu prac, 
              dostępności materiałów oraz warunków atmosferycznych.
            </p>
            <p>
              2.4. Firma TiRas zastrzega sobie prawo do zmiany terminu realizacji w przypadku wystąpienia 
              okoliczności niezależnych od wykonawcy, takich jak warunki atmosferyczne uniemożliwiające 
              prowadzenie prac, opóźnienia w dostawie materiałów, itp.
            </p>

            <h2>§3. Płatności</h2>
            <p>
              3.1. Ceny usług są ustalane indywidualnie na podstawie zakresu prac i wybranych materiałów.
            </p>
            <p>
              3.2. Płatności realizowane są w formie gotówkowej lub przelewem na konto bankowe firmy.
            </p>
            <p>
              3.3. Standardowy harmonogram płatności:
            </p>
            <ul>
              <li>Zaliczka: 30% wartości zamówienia przy podpisaniu umowy</li>
              <li>Płatność częściowa: 40% po dostawie materiałów i rozpoczęciu prac</li>
              <li>Płatność końcowa: 30% po zakończeniu realizacji i odbiorze prac</li>
            </ul>

            <h2>§4. Gwarancja</h2>
            <p>
              4.1. Firma TiRas udziela gwarancji na wykonane konstrukcje drewniane na okres 24 miesięcy 
              od daty odbioru prac.
            </p>
            <p>
              4.2. Gwarancja obejmuje wady wykonawcze oraz materiałowe.
            </p>
            <p>
              4.3. Gwarancja nie obejmuje:
            </p>
            <ul>
              <li>Naturalnych zmian w drewnie wynikających z warunków atmosferycznych</li>
              <li>Uszkodzeń mechanicznych powstałych z winy użytkownika</li>
              <li>Uszkodzeń wynikających z nieprawidłowej konserwacji</li>
              <li>Uszkodzeń powstałych w wyniku klęsk żywiołowych</li>
            </ul>
            <p>
              4.4. Warunkiem zachowania gwarancji jest przestrzeganie zaleceń dotyczących konserwacji 
              i użytkowania konstrukcji drewnianych.
            </p>

            <h2>§5. Reklamacje</h2>
            <p>
              5.1. Reklamacje należy zgłaszać pisemnie na adres email: kontakt@tiras.pl lub listownie 
              na adres siedziby firmy.
            </p>
            <p>
              5.2. Reklamacja powinna zawierać opis wady, datę jej zauważenia oraz dokumentację fotograficzną.
            </p>
            <p>
              5.3. Firma TiRas zobowiązuje się do rozpatrzenia reklamacji w terminie 14 dni od daty jej otrzymania.
            </p>
            <p>
              5.4. W przypadku uznania reklamacji, firma TiRas zobowiązuje się do bezpłatnego usunięcia wad 
              w terminie ustalonym z klientem.
            </p>

            <h2>§6. Postanowienia końcowe</h2>
            <p>
              6.1. W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają przepisy Kodeksu Cywilnego.
            </p>
            <p>
              6.2. Wszelkie spory wynikające z realizacji umowy będą rozstrzygane polubownie, a w przypadku 
              braku porozumienia, przez sąd właściwy dla siedziby firmy TiRas.
            </p>
            <p>
              6.3. Regulamin wchodzi w życie z dniem 01.01.2023 r.
            </p>
          </div>
        </div>
      </section>
    </>
  );
} 