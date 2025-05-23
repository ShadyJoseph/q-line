"use client";

import dynamic from "next/dynamic";
import Head from "next/head";

const HeroSection = dynamic(() => import("./sections/HeroBanner"), {
  ssr: false,
});
const WhyChooseUs = dynamic(() => import("./sections/WhyChooseUs"), {
  ssr: false,
});
const ServicesSection = dynamic(() => import("./sections/OurServices"), {
  ssr: false,
});
const Scroller = dynamic(() => import("@/components/Scroller"), { ssr: false });
const Map = dynamic(() => import("./sections/Map"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Q-line | Professional Printing Services & Custom Print Solutions
        </title>
        <meta
          name="description"
          content="Q-line provides high-quality commercial printing services including business cards, flyers, brochures, and large-format prints. Fast turnaround and custom solutions tailored to your needs."
        />
        <meta
          name="keywords"
          content="printing services, custom printing, commercial printing, business cards, brochure printing, flyer printing, poster printing, print shop"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://qline-eg.com" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Q-line | Professional Printing Services"
        />
        <meta
          property="og:description"
          content="Discover Q-line's full-service print solutions including flyers, business cards, brochures, and more. Quality prints. Fast delivery."
        />
        <meta property="og:url" content="https://qline-eg.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        {/* Schema Markup for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Q-line",
              image: "https://qline-eg.com/images/QLogo.png",
              "@id": "https://qline-eg.com",
              url: "https://qline-eg.com",
              telephone: "+20 100 501 8500",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Heliopolis",
                addressLocality: "Cairo",
                addressRegion: "Cairo",
                addressCountry: "Egypt",
              },
              description:
                "Q-line is a professional printing company offering commercial and custom print services including business cards, posters, and promotional materials.",
              openingHours: "Mo-Fr 09:00-17:00",
              sameAs: [
                "https://www.facebook.com/qlineprint",
                "https://www.instagram.com/qlineprint",
              ],
            }),
          }}
        />
      </Head>

      <main className="flex flex-col min-h-screen w-full" role="main">
        <HeroSection />
        <WhyChooseUs />
        <ServicesSection />
        <Scroller />
        <Map />
      </main>
    </>
  );
}
