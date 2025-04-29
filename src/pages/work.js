import React, { Fragment, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { NextSeo } from "next-seo";

export default function WorkPage() {
  const digitalSliderRef = useRef(null);
  const designSliderRef = useRef(null);
  const aimlSliderRef = useRef(null);
  const marketResearchSliderRef = useRef(null);

  const projects = [
    {
      title: "From Farm to Table:",
      description: "A Year of Local Impact, Global Connection!",
      tags: ["Social Media Marketing", "UI/UX"],
      imageSrc: "/images/work/dm-1.png",
      link: "/projects/project-365",
    },
    {
      title: "Auroville Marathon:",
      description: "A Celebration of Movement and Unity.",
      tags: ["Social Media Marketing", "UI/UX"],
      imageSrc: "/images/work/dm-2.png",
      link: "/projects/auroville-marathon",
    },
    {
      title: "Hemplanet: ",
      description: "Promoting Hemp Solutions for a Sustainable Future. ",
      tags: ["Strategy", "Photography"],
      imageSrc: "/images/work/dm-3.png",
      link: "/projects/hemplanet",
    },
    {
      title: "Building Momentum:",
      description: " Boosting B2B Growth for BMH",
      tags: ["Newsletter Design", "Website"],
      imageSrc: "/images/work/dm-4.png",
      link: "/projects/bmh",
    },
    {
      title: "Rangsutra:",
      description: " Where Artisanal Craft Meets Modern Marketing. ",
      tags: ["Campaign Developing"],
      imageSrc: "/images/work/dm-5.png",
      link: "/projects/rangsutra",
    },
  ];

  const designProjects = [
    {
      title: "General Aeronautics:",
      description: " Revolutionizing Agricultural Technology for the Future. ",
      tags: ["Web Design", "Content"],
      imageSrc: "/images/work/d-1.png",
      link: "/projects/generalAeronautics",
    },
    {
      title: "Matrimandir :",
      description: "A Digital Gateway to Auroville’s Heart",
      tags: ["Web Design", "Illustrations"],
      imageSrc: "/images/work/d-2.png",
      link: "/projects/matrimandir",
    },
    {
      title: "Maatram:",
      description: "A Digital Space for Mental Health and Transformation.  ",
      tags: ["Brand Identity", "Website Design"],
      imageSrc: "/images/work/d-4.png",
      link: "/projects/maatram",
    },
    {
      title: "Prakriti Sattva:",
      description:
        " Revitalizing Ayurveda:A Modern Identity for Prakriti Sattva.",
      tags: ["Rebranding", "Package Design"],
      imageSrc: "/images/work/d-3.png",
      link: "/projects/prakritisattva",
    },
  ];

  const aimlProjects = [
    {
      title: "Tvam:",
      description: " Revolutionizing health, wealth and wellbeing with AI.",
      tags: ["UI/UX", "Social Media Marketing"],
      imageSrc: "/images/work/ai-1.png",
      link: "/projects/tvam",
    },
    {
      title: "KittyKat:",
      description: "Redefining Visual Appeal in Fashion with Cutting-Edge AI.",
      tags: ["AI", "Social Media Marketing"],
      imageSrc: "/images/work/ai-3.png",
      link: "/projects/kittykat",
    },
    {
      title: "Bevolve",
      description: "AI-powered insights for business optimization.",
      tags: ["AI", "Social Media Marketing"],
      imageSrc: "/images/work/ai-2.png",
      link: "/work",
    },

    {
      title: "Ageshift",
      description: "AI-powered insights for business optimization.",
      tags: ["AI", "Social Media Marketing"],
      imageSrc: "/images/work/ai-4.png",
      link: "/work",
    },
  ];
  const marketResearchProjects = [
    {
      title: "QUILT.AI",
      description: "Human Insights with AI-Driven Precision",
      tags: ["Market Research & Data Analysis"],
      imageSrc: "/images/work/quilt.png",
      link: "/projects/quilt-ai",
    },
    {
      title: "Startup-O",
      description: "Smarter Startup Funding with Data-Driven Insights",
      tags: ["Financial Market Research"],
      imageSrc: "/images/work/startup-o.png",
      link: "/projects/startup-o",
    },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Fragment>
      <NextSeo
        title="Take a Glance at Our Best Work | Yuvabe Studios"
        description="Explore Yuvabe Studios' portfolio featuring innovative projects in web design, digital marketing, and AI/ML solutions."
        canonical="https://yuvabestudios.com/work"
        openGraph={{
          url: "https://yuvabestudios.com/work",
          title: "Our Work | Yuvabe Studios",
          description:
            "Discover Yuvabe Studios' top projects that highlight creativity and innovation in digital marketing, web design, and AI/ML.",
          images: [
            {
              url: "https://yuvabestudios.com/images/d-2.png",
              width: 1200,
              height: 630,
              alt: "Yuvabe Studios Portfolio",
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

      <Head>
        <link rel="icon" href="/yb-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Take a Glance at Our Best Work | Yuvabe Studios",
              url: "https://yuvabestudios.com/work",
              description:
                "Explore our creative projects in digital marketing, web design, and AI/ML solutions.",
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://yuvabestudios.com/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Our Work",
                    item: "https://yuvabestudios.com/work",
                  },
                ],
              },
              author: {
                "@type": "Organization",
                name: "Yuvabe Studios",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91 78768 77364",
                contactType: "Customer Service",
                areaServed: "Worldwide",
                availableLanguage: ["English", "Tamil", "Hindi"],
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

      {/* First Section */}
      <section className="h-[300px] bg-white flex items-start px-8 md:px-12 lg:px-32 py-8">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-medium text-[#371B34] mb-4">
            Take a Glance at Our Best Work
          </h1>
          <p className="text-xl md:text-2xl text-[#5829C7] font-secondary font-semibold mb-4">
            We&apos;d love to hear from you!
          </p>
          <p className="text-lg md:text-xl font-medium text-[#757575]">
            Whether you&apos;re curious about our services, interested in
            working together, or just want to learn more about Yuvabe Studios,
            our team is here to help.
          </p>
        </motion.div>
      </section>

      {/* Digital Marketing Section */}
      <section className="relative py-4 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="flex flex-col-reverse md:flex-row md:items-end justify-between">
          {/* Left Panel with Title and Navigation Buttons */}
          <motion.div
            className="w-full md:w-1/3 flex flex-col items-center md:items-start mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-3xl sm:text-4xl font-semibold mb-6 text-center md:text-left ml-0 md:ml-8"
              style={{
                background:
                   "linear-gradient(90deg, rgba(88,41,199,1) 0%, rgba(88,41,199,0.7036064425770308) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Digital
              <br />
              Marketing
            </h2>
            <div className="flex space-x-4 border border-[#5829C7] ml-0 md:ml-8 py-2 px-4 rounded-3xl w-[132.64px] sm:w-[132.64px] h-[64.26px] sm:h-[64.26px]">
              <button
                className="w-[44.84px] sm:w-[44.84px] sm:h-[44.84px] rounded-full border-2 border-dashed border-[#5829C7] flex items-center justify-center text-[#5829C7]"
                onClick={() => digitalSliderRef.current.slickPrev()}
              >
                <FaArrowLeft />
              </button>
              <button
                className="w-[44.84px] sm:w-[44.84px] h-[44.84px] sm:h-[44.84px] rounded-full border-2 border-[#5829C7] flex items-center justify-center text-[#5829C7]"
                onClick={() => digitalSliderRef.current.slickNext()}
              >
                <FaArrowRight />
              </button>
            </div>
          </motion.div>

          {/* Right Panel with Slider */}
          <div className="w-full md:w-[70%]">
            <Slider {...settings} ref={digitalSliderRef}>
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="p-4"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Project Card */}
                  <div className="bg-white shadow-lg border border-purple-300 rounded-lg p-4 w-[100%] sm:w-[417.55px] mx-auto sm:h-[420px] h-auto">
                    <div className="relative w-full max-w-[95%] sm:max-w-[372px] h-[194px] sm:h-[258px] mx-auto rounded-lg overflow-hidden mb-4">
                      <Image
                        src={project.imageSrc}
                        alt={project.title}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-lg"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {project.description}
                    </p>

                    {/* Tags and Read More Button */}
                    <div className="flex items-center justify-between flex-wrap">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 items-center h-[32.85px]">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm bg-gray-100 text-[#5829C7] rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Read More Button */}
                      <Link href={project.link}>
                        <button className="flex justify-center ml-1 md:ml-0 mt-3 md:mt-0 items-center w-[126px] h-[28.95px] bg-purple-100 text-[#3500F0] rounded-lg text-sm font-medium border border-[#5829C7] hover:bg-purple-200 transition-all duration-300">
                          <span className="mr-2">Read More</span>
                          <IoIosArrowForward className="text-[#3500F0]" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Design Section */}
      <section className="relative py-10 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-end">
          {/* left: Project Cards */}
          <div className="w-full md:w-[70%]">
            <Slider {...settings} ref={designSliderRef}>
              {designProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="p-4"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Card Container */}
                  <div className="bg-white shadow-lg border border-blue-300 rounded-lg p-4 w-[100%] sm:w-[417.55px] mx-auto sm:h-[420px] h-auto">
                    <div className="relative w-full max-w-[95%] sm:max-w-[372px] h-[194px] sm:h-[258px] mx-auto rounded-lg overflow-hidden mb-4">
                      <Image
                        src={project.imageSrc}
                        alt={project.title}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-lg"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {project.description}
                    </p>

                    {/* Tags and Read More Button */}
                    <div className="flex items-center justify-between flex-wrap ">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 items-center h-[32.85px]">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm bg-gray-100 text-[#2C73D2] rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Read More Button */}
                      <Link href={project.link}>
                        <button className="flex justify-center ml-1 md:ml-0 mt-3 md:mt-0 items-center w-[100px] sm:w-[126px] h-[30px] sm:h-[32.95px] bg-blue-100 text-[#2C73D2] rounded-lg text-sm font-medium border border-[#2C73D2] hover:bg-blue-200 transition-all duration-300">
                          <span className="mr-1">Read More</span>
                          <IoIosArrowForward className="text-[#2C73D2]" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Slider>
          </div>

          {/* right: Heading and Buttons */}
          <motion.div
            className="w-full md:w-1/3 flex flex-col items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Heading */}
            <h2
              className="text-3xl sm:text-4xl font-semibold mb-6 text-center md:text-left ml-0 md:ml-28"
              style={{
                background:
                  "linear-gradient(90deg, rgba(0,119,255,1) 0%, rgba(167,206,251,1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Design
            </h2>

            {/* Navigation Buttons */}
            <div className="flex justify-center md:justify-start space-x-4 border ml-0 md:ml-28 border-[#2C73D2] py-2 px-4 rounded-3xl w-[132.64px] sm:w-[132.64px] h-[64.24px] sm:h-[64.26px]">
              <button
                className="w-[44.84px] sm:w-[44.84px] h-[44.84px] sm:h-[44.84px] rounded-full border-2 border-dashed border-[#2C73D2] flex items-center justify-center text-[#2C73D2]"
                onClick={() => designSliderRef.current.slickPrev()}
              >
                <FaArrowLeft />
              </button>
              <button
                className="w-[44.84px] sm:w-[44.84px] h-[44.84px] sm:h-[44.84px] rounded-full border-2  border-[#2C73D2] flex items-center justify-center text-[#2C73D2]"
                onClick={() => designSliderRef.current.slickNext()}
              >
                <FaArrowRight />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI/ML Section */}
      <section className="relative py-10 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="flex flex-col-reverse md:flex-row md:items-end justify-between">
          {/* Left: Title and Navigation */}
          <motion.div
            className="w-full md:w-1/3 flex flex-col items-center md:items-start mb-8 md:mb-0 "
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-3xl sm:text-4xl font-semibold mb-6 text-center md:text-left ml-0 md:ml-8"
              style={{
                background:
                  "linear-gradient(90deg, rgba(240,78,39,1) 0%, rgba(241,161,142,1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              AI/ML
            </h2>
            <div className="flex space-x-4 ml-0 md:ml-8 border border-[#FF5722] py-2 px-4 rounded-3xl  w-[132.64px] sm:w-[132.64px] h-[64.24px] sm:h-[64.26px]">
              <button
                className="w-[44.84px] sm:w-[44.84px] h-[44.84px] sm:h-[44.84px] rounded-full border-2 border-dashed border-[#FF5722] flex items-center justify-center text-[#FF5722]"
                onClick={() => aimlSliderRef.current.slickPrev()}
              >
                <FaArrowLeft />
              </button>
              <button
                className="w-[44.84px] sm:w-[44.84px] h-[44.84px] sm:h-[44.84px] rounded-full border-2 border-[#FF5722] flex items-center justify-center text-[#FF5722]"
                onClick={() => aimlSliderRef.current.slickNext()}
              >
                <FaArrowRight />
              </button>
            </div>
          </motion.div>

          {/* Right: Project Cards */}
          <div className="w-full md:w-[70%]">
            <Slider {...settings} ref={aimlSliderRef}>
              {aimlProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="p-4"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="w-[100%] sm:w-[417.55px] mx-auto sm:h-[420px] h-auto bg-white shadow-lg border border-orange-300 rounded-lg p-4">
                    <div className="relative w-full max-w-[95%] sm:max-w-[372px] h-[194px] sm:h-[258px] mx-auto rounded-lg overflow-hidden mb-4">
                      <Image
                        src={project.imageSrc}
                        alt={project.title}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-lg"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {project.description}
                    </p>
                    {/* Tags and Read More Button */}
                    <div className="flex items-center justify-between flex-wrap">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 items-center h-[32.85px]">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm bg-gray-100 text-[#FF5722] rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {/* Read More Button */}
                      <Link href={project.link}>
                        <button className="flex  justify-center ml-1 md:ml-0 mt-3 md:mt-0 items-center w-[126px] h-[32.95px] bg-orange-100 text-[#FF5722] rounded-lg text-sm font-medium border border-[#FF5722] hover:bg-orange-200 transition-all duration-300">
                          <span className="mr-1">Read More</span>
                          <IoIosArrowForward className="text-[#FF5722]" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <section className="relative py-10 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-end">
          {/* left: Project Cards */}
          <div className="w-full md:w-[70%]">
            <Slider {...settings} ref={marketResearchSliderRef}>
              {marketResearchProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="p-4"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Card Container */}
                  <div className="bg-white shadow-lg border border-[#0F8745] rounded-lg p-4 w-[100%] sm:w-[417.55px] mx-auto sm:h-[420px] h-auto">
                    <div className="relative w-full max-w-[95%] sm:max-w-[372px] h-[194px] sm:h-[258px] mx-auto rounded-lg overflow-hidden mb-4">
                      <Image
                        src={project.imageSrc}
                        alt={project.title}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-lg"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {project.description}
                    </p>

                    {/* Tags and Read More Button */}
                    <div className="flex items-center justify-between flex-wrap ">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 items-center h-[32.85px]">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm bg-gray-100 text-[#0F8745] rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Read More Button */}
                      <Link href={project.link}>
                        <button className="flex justify-center ml-1 md:ml-0 mt-3 md:mt-0 items-center w-[100px] sm:w-[126px] h-[30px] sm:h-[32.95px] bg-green-100 text-[#0F8745] rounded-lg text-sm font-medium border border-[#0F8745] hover:bg-green-200 transition-all duration-300">
                          <span className="mr-1">Read More</span>
                          <IoIosArrowForward className="text-[#0F8745]" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Slider>
          </div>

          {/* right: Heading and Buttons */}
          <motion.div
            className="w-full md:w-1/3 flex flex-col items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Heading */}
            <h2
              className="text-3xl sm:text-4xl font-semibold mb-6 text-center md:text-left"
              style={{
                background:
                  "linear-gradient(90deg, rgba(15,135,69,1) 0%, rgba(16,233,114,1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Market <br />
              Research
            </h2>

            {/* Navigation Buttons */}
            <div className="flex justify-center md:justify-start space-x-4 border border-[#0F8745] py-2 px-4 rounded-3xl w-[132.64px] sm:w-[132.64px] h-[64.24px] sm:h-[64.26px]">
              <button
                className="w-[44.84px] sm:w-[44.84px] h-[44.84px] sm:h-[44.84px] rounded-full border-2 border-dashed border-[#0F8745] flex items-center justify-center text-[#0F8745]"
                onClick={() => marketResearchSliderRef.current.slickPrev()}
              >
                <FaArrowLeft />
              </button>
              <button
                className="w-[44.84px] sm:w-[44.84px] h-[44.84px] sm:h-[44.84px] rounded-full border-2  border-[#0F8745] flex items-center justify-center text-[#0F8745]"
                onClick={() => marketResearchSliderRef.current.slickNext()}
              >
                <FaArrowRight />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Fragment>
  );
}
