import React from 'react';
import '../components/OmOss.css';
import real from "../assets/estate.png";


function OmOss() {
  return (
     <>
      <h1>Välkommen till Catch Me – Din Partner för Fastighetslösningar</h1>
      <section className="intro-section">
        <figure className="intro-image">
          <img src={real} alt="fastighet" className="fastighet" />
        </figure>
        <p>
          På Catch Me brinner vi för att skapa hållbara, attraktiva och trygga bostäder och kommersiella fastigheter för alla. Med flera års erfarenhet inom fastighetsbranschen och en stark lokal närvaro är vi en pålitlig partner för både privatpersoner och företag.
        </p>
      </section>

  

      <section>
        <h2>Vad vi erbjuder</h2>
        <ul>
          <li><strong>Köp och försäljning av fastigheter:</strong> Vi hjälper dig att hitta ditt drömhem eller den perfekta lokalen för din verksamhet.</li>
          <li><strong>Förvaltning och underhåll:</strong> Vi erbjuder professionell fastighetsförvaltning för att säkerställa att din investering behåller sitt värde.</li>
          <li><strong>Nyproduktion:</strong> Våra projekt inom nyproduktion kombinerar modern design med hållbara lösningar.</li>
          <li><strong>Fastighetsutveckling:</strong> Vi arbetar med att utveckla områden och skapa moderna lösningar som förbättrar livet för boende och företagare.</li>
        </ul>
      </section>
        <figure>
            <img src={real} alt="fastighet" className="fastihget" />
        </figure>
      <section>
        <h2>Vår vision</h2>
        <p>
          Vi strävar efter att vara det självklara valet inom fastighetsbranschen genom att sätta kundens behov i centrum. Vårt mål är att bidra till samhällsutvecklingen genom att skapa trivsamma boendemiljöer och hållbara fastigheter.
        </p>
      </section>

      <section>
        <h2>Varför välja oss?</h2>
        <ul>
          <li><strong>Erfarenhet och expertis:</strong> Med lång erfarenhet inom fastighetsmarknaden kan vi erbjuda lösningar anpassade till dina behov.</li>
          <li><strong>Hållbarhet i fokus:</strong> Vi integrerar hållbara material och tekniker i våra projekt för att skapa långsiktiga värden.</li>
          <li><strong>Kundfokus:</strong> Hos oss får du alltid personlig service och stöd genom hela processen.</li>
        </ul>
      </section>

      <section>
        <h2>Kontakta oss idag</h2>
        <p>
          Vill du veta mer om våra tjänster eller se vilka fastigheter vi har tillgängliga just nu? Besök vår hemsida eller kontakta oss direkt. Vi ser fram emot att hjälpa dig!
        </p>
      </section>

      <section>
        <p>
          Om du vill kan jag anpassa texten ytterligare efter dina specifika behov eller ge den en unik ton. 😊
        </p>
      </section>
    </>
  );
}

export default OmOss;
