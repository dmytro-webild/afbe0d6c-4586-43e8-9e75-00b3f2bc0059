"use client";

import { ThemeProvider } from '@/providers/themeProvider/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="smallMedium"
      sizing="largeSizeMediumTitles"
      background="floatingGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="glass"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Eisparadies"
          navItems={[
            { name: "Startseite", id: "#hero" },
            { name: "Speisekarte", id: "#menu" },
            { name: "Toppings", id: "#features" },
            { name: "Über uns", id: "#about" },
            { name: "Kontakt", id: "#contact" }
          ]}
          button={{ text: "Jetzt bestellen", href: "#menu" }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Eisparadies – Dein Lieblingsgeschmack wartet"
          description="Entdecke handgemachtes Eis, erfrischende Sorbets und unwiderstehliche Spaghettieis-Kreationen."
          buttons={[
            { text: "Unsere Speisekarte", href: "#menu" },
            { text: "Finde uns", href: "#contact" }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/two-female-friends-eating-burgers-fries-restaurant_23-2148666564.jpg"
          imageAlt="Delicious ice cream cones and Spaghettieis on a sunny day"
          showBlur={true}
          textPosition="bottom"
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardOne
          title="Unsere Klassiker & Spezialitäten"
          description="Von traditionellem Milcheis bis zu exotischen Sorbets – handgemacht mit Liebe und den besten Zutaten."
          products={[
            { id: "spaghettieis-gross", name: "Spaghettieis Groß", price: "6,90 €", imageSrc: "http://img.b2bpic.net/free-photo/vanilla-flavored-sweet-roll-decorated-with-sprinkles-white-plate_114579-66469.jpg?_wi=1", imageAlt: "Große Portion Spaghettieis mit Erdbeersoße und Sahne" },
            { id: "spaghettieis-klein", name: "Spaghettieis Klein", price: "5,50 €", imageSrc: "http://img.b2bpic.net/free-photo/vanilla-flavored-sweet-roll-decorated-with-sprinkles-white-plate_114579-66469.jpg?_wi=2", imageAlt: "Kleine Portion Spaghettieis mit Erdbeersoße und Sahne" },
            { id: "milcheis-vanille", name: "Milcheis Vanille", price: "2,30 € / Kugel", imageSrc: "http://img.b2bpic.net/free-photo/summer-dessert-ice-cream-ice-cream-with-coconut_185193-110739.jpg", imageAlt: "Kugel Vanille-Milcheis" },
            { id: "milcheis-schokolade", name: "Milcheis Schokolade", price: "2,30 € / Kugel", imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-ice-cream-cookies_23-2149681869.jpg", imageAlt: "Kugel Schokolade-Milcheis" },
            { id: "milcheis-stracciatella", name: "Milcheis Stracciatella", price: "2,30 € / Kugel", imageSrc: "http://img.b2bpic.net/free-photo/close-up-ice-cream-sorbet-with-berries_23-2148425340.jpg", imageAlt: "Kugel Stracciatella-Milcheis" },
            { id: "milcheis-sesam", name: "Milcheis Geröst. Schwarzer Sesam", price: "2,30 € / Kugel", imageSrc: "http://img.b2bpic.net/free-photo/dessert-with-ice-cream-sesame-side-view_141793-4400.jpg", imageAlt: "Kugel Gerösteter Schwarzer Sesam Milcheis" },
            { id: "milcheis-pistazien", name: "Milcheis Geröst. Pistazien", price: "2,30 € / Kugel", imageSrc: "http://img.b2bpic.net/free-photo/gourmet-chocolate-dessert-black-plate-indulgence-generative-ai_188544-9450.jpg", imageAlt: "Kugel Geröstete Pistazien Milcheis" },
            { id: "milcheis-krokantino", name: "Milcheis Krokantino-Sahneeis", price: "2,30 € / Kugel", imageSrc: "http://img.b2bpic.net/free-photo/from-waffle-cones-with-banana-ice-cream-banana-slices-gypsophila-ice-cream-cup_176474-2664.jpg", imageAlt: "Kugel Krokantino-Sahneeis mit karamellisierten Streuseln" },
            { id: "milcheis-safrancreme", name: "Milcheis Safrancreme", price: "2,30 € / Kugel", imageSrc: "http://img.b2bpic.net/free-photo/close-up-tasty-caramelized-pears_23-2148238687.jpg", imageAlt: "Kugel Safrancreme Milcheis mit getrockneter Aprikose und Pinienkernen" },
            { id: "sorbet-mango", name: "Sorbet Mango (Vegan)", price: "2,30 € / Kugel", imageSrc: "http://img.b2bpic.net/free-photo/arrangement-delicious-homemade-dessert_23-2148900950.jpg", imageAlt: "Kugel Mango Sorbet" },
            { id: "sorbet-grapefruit", name: "Sorbet Grapefruit (Vegan)", price: "2,30 € / Kugel", imageSrc: "http://img.b2bpic.net/free-photo/high-angle-bowls-with-delicious-granita-dessert-still-life_23-2149412318.jpg", imageAlt: "Kugel Grapefruit Sorbet" },
            { id: "sorbet-quitte-apfel", name: "Sorbet Quitte & Apfel (Vegan)", price: "2,30 € / Kugel", imageSrc: "http://img.b2bpic.net/free-photo/delicious-creamy-melted-cheese_23-2149332836.jpg", imageAlt: "Kugel Quitte & Apfel Sorbet" },
            { id: "sorbet-chocolate-vegan", name: "Sorbet Schokolade (Vegan)", price: "2,30 € / Kugel", imageSrc: "http://img.b2bpic.net/free-photo/close-up-delicious-acai-cereal-bowl_23-2149258864.jpg", imageAlt: "Kugel Schokolade Sorbet (Vegan)" },
            { id: "sonstiges-kurbiskerne", name: "Geröstete Kürbiskerne", price: "2,30 €", imageSrc: "http://img.b2bpic.net/free-photo/high-angle-chocolate-milkshake-glass_23-2148601292.jpg", imageAlt: "Schale mit gerösteten Kürbiskernen" },
            { id: "sonstiges-schwarzwald", name: "Schwarzwälder Kirschtorte Eis", price: "2,30 € / Kugel", imageSrc: "http://img.b2bpic.net/free-photo/sweet-drink-with-whipped-cream-top-crepes_181624-5658.jpg", imageAlt: "Kugel Schwarzwälder Kirschtorte Eis mit Kirschwasser und Schokostreuseln" },
            { id: "sonstiges-spekulatius", name: "Spekulatius Eis", price: "2,30 € / Kugel", imageSrc: "http://img.b2bpic.net/free-photo/bottom-view-xmas-tarts-pine-branches-grey-table_140725-102938.jpg", imageAlt: "Kugel Spekulatius Eis" },
            { id: "sonstiges-crunchy-peanut", name: "Crunchy Peanut Eis", price: "2,30 € / Kugel", imageSrc: "http://img.b2bpic.net/free-photo/breakfast-composition_23-2147788575.jpg", imageAlt: "Kugel Crunchy Peanut Eis mit gerösteten Erdnüssen und Schoko Cornflakes" }
          ]}
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSeven
          title="Veredle Dein Eis mit unseren Extras"
          description="Wähle aus unseren feinen Toppings und mache dein Eis zu einem einzigartigen Genussmoment."
          features={[
            { title: "Sahne", description: "Frische, geschlagene Sahne als klassisches Topping.", imageSrc: "http://img.b2bpic.net/free-photo/delicious-traditional-dessert-assortment_23-2149143315.jpg", imageAlt: "Portion geschlagene Sahne" },
            { title: "Mandelkrokant", description: "Knusprige, karamellisierte Mandelsplitter für extra Biss.", imageSrc: "http://img.b2bpic.net/free-photo/close-up-fresh-cookies-white-plate_114579-85533.jpg", imageAlt: "Mandelkrokant als Eis-Topping" },
            { title: "Weiße Schokostreusel", description: "Feine weiße Schokoladenstreusel für einen süßen Akzent.", imageSrc: "http://img.b2bpic.net/free-photo/yummy-brown-candies-colorful-plate_114579-60154.jpg", imageAlt: "Weiße Schokoladenstreusel" },
            { title: "Hausgemachte Erdbeersoße", description: "Unsere frische, hausgemachte Erdbeersoße – fruchtig und lecker.", imageSrc: "http://img.b2bpic.net/free-photo/front-view-yummy-strawberry-cake-with-berries-dark-surface_140725-75057.jpg", imageAlt: "Hausgemachte Erdbeersoße" },
            { title: "Schokosoße", description: "Cremige Schokosoße für alle Schokoladenliebhaber.", imageSrc: "http://img.b2bpic.net/free-photo/scoop-vanilla-ice-cream-with-chocolate-syrup-toppings_84443-94476.jpg", imageAlt: "Cremige Schokosoße" },
            { title: "Eierlikör", description: "Ein Schuss Eierlikör für den besonderen Genussmoment (ab 18 Jahren).", imageSrc: "http://img.b2bpic.net/free-photo/close-up-delicious-ice-cream-dessert_23-2151982847.jpg", imageAlt: "Eierlikör als Eis-Topping" }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Unsere Leidenschaft für Eis"
          description={[
            "Seit Generationen verwöhnen wir unsere Kunden mit handgemachtem Eis nach traditionellen Rezepten. Bei uns wird jede Kugel zu einem kleinen Kunstwerk, mit viel Liebe und den besten Zutaten zubereitet.",            "Wir legen Wert auf frische, regionale Produkte und außergewöhnliche Kreationen, die dich immer wieder begeistern werden. Komm vorbei und erlebe den Unterschied im Eisparadies!"
          ]}
          useInvertedBackground={true}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="Was unsere Kunden sagen"
          description="Höre, warum unser Eis so geliebt wird. Echte Meinungen von echten Genießern."
          testimonials={[
            { id: "1", name: "Anna Meier", date: "22. Mai 2024", title: "Das beste Spaghettieis der Stadt!", quote: "Ich komme extra für das Spaghettieis her! Es schmeckt einfach himmlisch, die Erdbeersoße ist frisch und die Sahne perfekt. Jedes Mal ein Genuss!", tag: "Spaghettieis-Fan", avatarSrc: "http://img.b2bpic.net/free-photo/cool-darkskinned-bearded-man-white-tshirt-orange-jacket-smiles-sincerely-outside-charming-guy-sunglasses-shows-ok-signs-near-white-wall_197531-28765.jpg", avatarAlt: "Anna Meier", imageSrc: "http://img.b2bpic.net/free-photo/smiley-friends-having-fun-outdoors_23-2148735486.jpg", imageAlt: "Glückliche Familie im Eiscafe" },
            { id: "2", name: "Max Müller", date: "18. Mai 2024", title: "Große Auswahl, tolle Qualität", quote: "Die Sortenauswahl ist fantastisch, besonders die veganen Sorbets sind unglaublich lecker und erfrischend. Immer wieder gerne!", tag: "Veganer Genießer", avatarSrc: "http://img.b2bpic.net/free-photo/portrait-smiley-man-with-ice-cream_23-2150923089.jpg", avatarAlt: "Max Müller", imageSrc: "http://img.b2bpic.net/free-photo/group-girlfriends-sitting-table-together-celebrating-birthday-outdoor-park_613910-19989.jpg", imageAlt: "Paar genießt Eis in der Sonne" },
            { id: "3", name: "Lena Schmidt", date: "10. Mai 2024", title: "Mein Lieblings-Eiscafé", quote: "Das Eisparadies ist einfach das gemütlichste Eiscafé. Die Atmosphäre ist toll und das Personal super freundlich. Fühle mich hier immer wohl.", tag: "Stammkundin", avatarSrc: "http://img.b2bpic.net/free-photo/medium-shot-old-woman-holding-cake_23-2150232041.jpg", avatarAlt: "Lena Schmidt", imageSrc: "http://img.b2bpic.net/free-photo/group-friends-cheering-with-wine-glasses-restaurant_23-2150520071.jpg", imageAlt: "Freundinnen unterhalten sich im Cafe" },
            { id: "4", name: "Tom Becker", date: "05. Mai 2024", title: "Qualität schmeckt man!", quote: "Man schmeckt förmlich die frischen Zutaten und die Liebe, die in jede Kugel gesteckt wird. Das Preis-Leistungs-Verhältnis ist unschlagbar!", tag: "Qualitätsbewusst", avatarSrc: "http://img.b2bpic.net/free-photo/cute-girl-smiling-studio_23-2147824947.jpg", avatarAlt: "Tom Becker", imageSrc: "http://img.b2bpic.net/free-photo/girl-eating-chocolate-ice-cream-park_23-2148268130.jpg", imageAlt: "Junge isst Spaghettieis" },
            { id: "5", name: "Laura Richter", date: "01. Mai 2024", title: "Kreative Eissorten!", quote: "Ich liebe die saisonalen und außergewöhnlichen Sorten wie Zwetschge Zimt oder Schwarzer Sesam. Immer wieder eine Überraschung!", tag: "Eis-Entdeckerin", avatarSrc: "http://img.b2bpic.net/free-photo/close-up-lifestyle-portrait-happy-carefree-black-woman-enjoying-coffee-break-paris_273443-1402.jpg", avatarAlt: "Laura Richter", imageSrc: "http://img.b2bpic.net/free-photo/close-up-people-eating-break-time_23-2149256937.jpg", imageAlt: "Mädchen mit Erdbeereis" }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Deine Fragen, unsere Antworten"
          description="Alles, was du über unser Eis, Zutaten, Allergene und Services wissen musst."
          faqs={[
            { id: "faq-1", title: "Sind alle eure Sorbets vegan?", content: "Ja, alle unsere Sorbet-Sorten werden ausschließlich aus Frucht, Wasser und Zucker hergestellt und sind somit 100% vegan und laktosefrei." },
            { id: "faq-2", title: "Verwendet ihr frische Zutaten?", content: "Absolut! Wir legen größten Wert auf frische und hochwertige Zutaten. Viele unserer Früchte beziehen wir von lokalen Bauernhöfen." },
            { id: "faq-3", title: "Bietet ihr glutenfreies Eis an?", content: "Viele unserer Eissorten sind von Natur aus glutenfrei. Bitte sprich unser Personal an, wir beraten dich gerne zu den Optionen." },
            { id: "faq-4", title: "Kann ich größere Mengen für Events bestellen?", content: "Ja, wir bieten auch Eis für besondere Anlässe und Events an. Kontaktiere uns hierfür bitte direkt, um Details zu besprechen." }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/thoughtful-young-young-woman-choosing-pastries_171337-16951.jpg"
          imageAlt="Modernes Eiscafé Interieur"
          mediaAnimation="slide-up"
          faqsAnimation="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Kontakt"
          title="Besuche uns im Eisparadies"
          description="Wir freuen uns darauf, dich bald bei uns begrüßen zu dürfen. Kontaktiere uns für spezielle Anfragen oder Feedback."
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
          inputPlaceholder="Deine E-Mail Adresse"
          buttonText="Nachricht senden"
          termsText="Durch das Absenden deiner Nachricht stimmst du unseren Datenschutzbestimmungen zu."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Eisparadies"
          logoSrc="http://img.b2bpic.net/free-vector/frozo-fun-ice-cream-logo-design_742173-32175.jpg"
          logoAlt="Eisparadies Logo"
          leftLink={{ text: "Datenschutz", href: "#" }}
          rightLink={{ text: "Impressum", href: "#" }}
        />
      </div>
    </ThemeProvider>
  );
}
