import Head from "next/head";
import { NextSeo } from "next-seo";
import Hero from "../components/Hero";
import Principles from "@/components/Principles";
import Call from "@/components/Call";
import CoreValues from "@/components/CoreValues";
import Timeline from "@/components/Timeline";
import ProjectCarousel from "@/components/ProjectCarousel";
import ClientLogoSlider from "@/components/ClientLogoSlider";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  return (
    <>
      {/* Add Next SEO configuration */}
      <NextSeo
        title="Yuvabe Studios | Sustainable Creative Studio"
        description="Yuvabe Studios is a value-driven creative studio specializing in design, marketing, AI/ML solutions, and technology services to help your business grow."
        canonical="https://yuvabestudios.com/"
        openGraph={{
          url: "https://yuvabestudios.com/",
          title: "Yuvabe Studios | Sustainable Creative Studio",
          description:
            "Specializing in design, marketing, AI/ML solutions, and technology services.",
          images: [
            {
              url: "https://yuvabestudios.com/yb-logo.png",
              width: 1200,
              height: 630,
              alt: "Yuvabe Studios Open Graph Image",
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
                availableLanguage: ["English", "Tamil", "Hindi", "French", "Malayalam"],
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
          <Hero />
        </header>

        {/* Services Section */}
        <section id="services">
          <ServiceCard />
        </section>

        {/* Project Carousel Section */}
        <section id="projects">
          <ProjectCarousel />
        </section>

        {/* Client Logo Slider Section */}
        <section id="clients">
          <ClientLogoSlider />
        </section>

        {/* Timeline Section */}
        <section id="timeline">
          <Timeline />
        </section>

        {/* Core Values Section */}
        <section id="core-values">
          <CoreValues />
        </section>

        {/* Call to Action Section */}
        <section id="call-to-action">
          <Call />
        </section>

        {/* Principles Section */}
        <section id="principles">
          <Principles />
        </section>
      </main>
    </>
  );
}  


