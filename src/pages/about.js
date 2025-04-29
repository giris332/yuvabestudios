import { NextSeo } from "next-seo";
import AboutHeroSection from "@/components/AboutHeroSection";
import WhatWeDo from "@/components/WhatWeDo";
import WhyChooseUs from "@/components/WhyChooseUs";
import ExpertiseSection from "@/components/ExpertiseSection";
import TeamSection from "@/components/TeamSection";
import Head from "next/head";

const AboutPage = () => {
  return (
    <>
      {/* Next SEO configuration for About Page */}
      <NextSeo
        title="About Us | Yuvabe Studios"
        description="Learn more about Yuvabe Studios, a digital agency based in Auroville, specializing in AI/ML, web development, and digital marketing solutions."
        canonical="https://yuvabestudios.com/about"
        openGraph={{
          url: "https://yuvabestudios.com/about",
          title: "About Us | Yuvabe Studios",
          description:
            "Learn more about Yuvabe Studios, a digital agency that combines innovation and sustainability to create impactful solutions.",
          images: [
            {
              url: "https://yuvabestudios.com/about-image.jpg",
              width: 1200,
              height: 630,
              alt: "Yuvabe Studios About Us",
            },
          ],
          site_name: "Yuvabe Studios",
        }}
        twitter={{
          handle: "@YuvabeStudios",
          site: "@YuvabeStudios",
          cardType: "summary_large_image",
        }}
      />

      {/* Add favicon and page metadata */}
      <Head>
        <link rel="icon" href="/yb-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />

        {/* JSON-LD for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Yuvabe Studios",
              url: "https://yuvabestudios.com/",
              logo: "https://yuvabestudios.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91 78768 77364",
                contactType: "Customer Service",
                areaServed: "Worldwide",
                availableLanguage: ["English", "Tamil"],
              },
              sameAs: [
                "https://www.facebook.com/yuvabe",
                "https://x.com/",
                "https://www.youtube.com/@yuvabe.auroville",
                "https://www.linkedin.com/company/yuvabe/posts/?feedView=all",
                "https://www.instagram.com/yuvabe.auroville/",
              ],
            }),
          }}
        />
      </Head>

      <main>
        {/* Hero Section */}
        <header>
          <AboutHeroSection />
        </header>

        {/* What We Do Section */}
        <section id="what-we-do">
          <WhatWeDo />
        </section>

        {/* Why Choose Us Section */}
        <section id="why-choose-us">
          <WhyChooseUs />
        </section>

        {/* Expertise Section */}
        <section id="expertise">
          <ExpertiseSection />
        </section>

        {/* Team Section */}
        <section id="team">
          <TeamSection />
        </section>
      </main>
    </>
  );
};

export default AboutPage;
