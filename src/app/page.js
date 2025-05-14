'use client';

import dynamic from 'next/dynamic';
import Head from 'next/head';

// Dynamically import components to disable SSR
const HeroSection = dynamic(() => import('./sections/HeroBanner'), {
  ssr: false,
});
const WhyChooseUs = dynamic(() => import('./sections/WhyChooseUs'), {
  ssr: false,
});
const ServicesSection = dynamic(() => import('./sections/OurServices'), {
  ssr: false,
});
const Scroller = dynamic(() => import('@/components/Scroller'), {
  ssr: false,
});
const Map = dynamic(() => import('./sections/Map'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Q-line | Innovative Technology Platform</title>
        <meta
          name="description"
          content="Discover Q-line, your gateway to cutting-edge technology solutions. Explore our services and start your innovation journey today."
        />
        <meta
          name="keywords"
          content="technology, innovation, Q-line, services, platform"
        />
        <meta property="og:title" content="Q-line | Innovative Technology Platform" />
        <meta
          property="og:description"
          content="Join Q-line to unleash innovation with our advanced technology solutions."
        />
        <meta property="og:url" content="https://your-domain.com" />
        <meta property="og:image" content="/images/og-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Q-line | Innovative Technology Platform" />
        <meta
          name="twitter:description"
          content="Join Q-line to unleash innovation with our advanced technology solutions."
        />
        <meta name="twitter:image" content="/images/og-image.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Q-line',
              url: 'https://your-domain.com',
              description:
                'Q-line is a cutting-edge technology platform offering innovative solutions.',
              publisher: {
                '@type': 'Organization',
                name: 'Q-line',
                logo: {
                  '@type': 'ImageObject',
                  url: '/images/QLogo.png',
                },
              },
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
