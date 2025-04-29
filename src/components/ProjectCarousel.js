import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

export default function ProjectCarousel() {
  const [currentProject, setCurrentProject] = useState(0); // State to track the active slide

  const settings = {
    infinite: false,
    speed: 500,
    loop: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setCurrentProject(newIndex), // Update active slide
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const projects = [
    {
      title: "From Farm to Table:",
      description: "Local Food Education with Project 365",
      tags: ["Social Media Marketing", "UI/UX"],
      imageUrl: "/images/projects/slide1.png",
    },
    // {
    //   title: "Bevolve AI",
    //   description: "Boosting Auroville Marathon Participation",
    //   tags: ["Branding", "UX/UI"],
    //   imageUrl: "/images/projects/slide2.png",
    // },
    {
      title: "General Aeronautics",
      description:
        "Revolutionizing Agricultural Technology with Aerial Solutions",
      tags: ["Innovation", "Technology"],
      imageUrl: "/images/projects/slide3.png",
    },
    {
      title: "Prakriti Satva:",
      description:
        "Revitalizing Ayurveda:A Modern Identity for Prakriti Sattva",
      tags: ["Rebranding", "Package Design"],
      imageUrl: "/images/projects/slide4.png",
    },
    {
      title: "KittyKat ",
      description:
        "Redefining Visual Appeal in Fashion with Cutting-Edge AI Technology.",
      tags: ["AI/ML Gen AI", "Full Stack Development"],
      imageUrl: "/images/projects/slide5.png",
    },
    {
      title: "Maatram: ",
      description:
        "Crafting a Digital Space for Mental Health and Transformation.",
      tags: ["Brand Identity", "Website Design"],
      imageUrl: "/images/projects/slide6.png",
    },
    {
      title: "Hemplanet:",
      description: " Promoting Hemp Solutions for a Sustainable Future.",
      tags: ["Strategy", "Photography"],
      imageUrl: "/images/projects/slide7.png",
    },
    {
      title: "Matrimandir:",
      description: "A Digital Gateway to Auroville’s Heart",
      tags: ["Web Design", "Illustrations"],
      imageUrl: "/images/projects/slide8.png",
    },
    {
      title: "Rangasutra:",
      description: "Where Artisanal Craft Meets Modern Marketing.",
      tags: ["Strategy", "Campaign Developing"],
      imageUrl: "/images/projects/slide9.png",
    },
    {
      title: "Tvam:",
      description:
        " Revolutionizing health, wealth and wellbeing with advanced AI Solutions",
      tags: ["Multilingual Chatbot"],
      imageUrl: "/images/projects/slide10.png",
    },
    {
      title: "Auroville Marathon:",
      description: " A Celebration of Movement and Unity.",
      tags: ["Strategy", "Graphic Design"],
      imageUrl: "/images/projects/slide11.png",
    },
    {
      title: "Building Momentum:",
      description: "Boosting B2B Growth for BMH",
      tags: ["Newsletter Design", "Website"],
      imageUrl: "/images/projects/slide12.png",
    },
    {
      title: "Quilt AI:",
      description: "Human Insight with AI-Driven Precision",
      tags: ["Market Research", "Data Analysis"],
      imageUrl: "/images/projects/mr-1.png",
    },
    {
      title: "Startup-O",
      description: "Smarter Startup Funding with Data-Driven Insight",
      tags: ["Finance Market Research"],
      imageUrl: "/images/projects/mr-2.png",
    },
    // {
    //   title: "Ageshift",
    //   description:
    //     "Revolutionizing Agricultural Technology with Aerial Solutions",
    //   tags: ["Innovation", "Technology"],
    //   imageUrl: "/images/projects/slide13.png",
    // },
  ];

  const activeProject = projects[currentProject] || projects[0];

  return (
    <div className="relative overflow-hidden py-8 px-4 bg-[url('/images/svgs/car.svg')] bg-cover bg-center md:py-16 md:px-10">
      {/* Heading Section */}
      <div className="relative z-10 mb-6 text-start pl-4 md:pl-10">
        <h2 className="text-lg md:text-4xl font-bold text-yellow-400">
          Work We&apos;re Proud Of
        </h2>
        <p className="text-xs md:text-lg text-white">
          Discover our exceptional work and the stories of our satisfied clients
        </p>
      </div>

      {/* Slider */}
      <Slider {...settings} className="relative z-10 pl-0 md:pl-10">
        {projects.map((project, index) => (
          <div key={index} className="p-0 md:p-4">
            <motion.div
              className={`relative overflow-hidden rounded-lg flex items-center justify-center transition-all duration-500 ${
                index === currentProject
                  ? "w-[100%] h-[156px] md:w-[800px] md:h-[364px]"
                  : "w-full h-[150px] md:w-[643px] md:h-[292px]"
              }`}
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={index === currentProject ? 870 : 688}
                height={index === currentProject ? 395 : 315}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
              />
            </motion.div>
          </div>
        ))}
      </Slider>

      {/* Title, Description, Tags, and Button */}
      <div className="mt-6 md:mt-8 pl-4 md:pl-10 flex flex-col md:flex-row md:justify-between items-start">
        {/* Left Section */}
        <div className="text-start">
          <h3 className="text-sm md:text-3xl font-semibold text-white">
            {activeProject.title}
          </h3>
          <p className="text-xs md:text-lg text-gray-300 mt-2">
            {activeProject.description}
          </p>
          <div className="flex gap-2 mt-3 flex-wrap">
            {activeProject.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-yellow-300 text-black rounded-full text-[10px] md:text-sm font-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="mt-6 md:mt-0 flex-shrink-0">
          <Link href="/work">
            <button className="px-3 py-2 md:px-6 md:py-2 w-[100px] h-[34px] md:w-[167px] md:h-[55px] bg-yellow-400 text-black text-[10px] md:text-lg font-secondary font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition">
              View Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
