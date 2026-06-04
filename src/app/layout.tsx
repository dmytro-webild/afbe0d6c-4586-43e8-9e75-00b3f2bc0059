import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Public_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Eisparadies – Hausgemachtes Eis & Spaghettieis',
  description: 'Entdecke im Eisparadies unsere vielfältige Auswahl an handgemachtem Milchspeiseeis, veganen Sorbets und unwiderstehlichem Spaghettieis. Frisch, lecker, für jeden Geschmack.',
  keywords: ["Eis, Eisdiele, Spaghettieis, Sorbet, veganes Eis, Milchspeiseeis, Toppings, Eiscafe, handgemachtes Eis, Eisparadies"],
  openGraph: {
    "title": "Eisparadies – Dein Lieblings-Eiscafe",
    "description": "Handgemachtes Eis, Spaghettieis und vegane Sorbets. Besuche uns im Eisparadies!",
    "url": "/",
    "siteName": "Eisparadies",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/two-female-friends-eating-burgers-fries-restaurant_23-2148666564.jpg",
        "alt": "Eisparadies Eiscreme und Spaghettieis"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Eisparadies – Dein Lieblings-Eiscafe",
    "description": "Handgemachtes Eis, Spaghettieis und vegane Sorbets. Besuche uns im Eisparadies!",
    "images": [
      "http://img.b2bpic.net/free-photo/two-female-friends-eating-burgers-fries-restaurant_23-2148666564.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const publicSans = Public_Sans({
  variable: "--font-public-sans",  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${publicSans.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
