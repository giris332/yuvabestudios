import Link from "next/link";
import Image from "next/image";
import Call from "@/components/Call";
import Head from "next/head";
import { motion } from "framer-motion";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const prakritisattva = () => {
  return (
    <>
      <Head>
        <title>Prakriti Sattva - Revitalizing Ayurveda</title>
        <meta
          name="description"
          content="Discover how we helped Prakriti Sattva grow awareness through strategic product campaigns, social media marketing, and eco-friendly hemp solutions."
        />
        <meta
          name="keywords"
          content="Prakriti Sattva, Hemp Products, Sustainability, Social Media Marketing, Eco-Friendly Solutions, Hemp Paper Workshop"
        />
        <meta name="author" content="Yuvabe Studio" />
      </Head>

      <div className="min-h-screen bg-white text-gray-900  overflow-x-hidden ">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm text-gray-500 px-6 md:px-12 lg:px-32 py-4 border-b border-gray-200  overflow-x-hidden">
          <div className="flex flex-wrap items-center space-x-2">
            <Link href="/work">
              <button className="hover:underline text-gray-500 whitespace-nowrap">
                Work
              </button>
            </Link>
            <span className=" sm:inline">{">"}</span>
            <span> Design </span>
            <span className=" sm:inline">{">"}</span>
            <span className="font-medium text-gray-900 whitespace-nowrap">
              Prakriti Sattva
            </span>
          </div>
        </nav>

        <header className="px-6 md:px-16 lg:px-32 py-10 border-b border-gray-200 flex flex-col-reverse md:flex-row items-center justify-between">
          {/* Left Content */}
          <motion.div
            className="w-full md:w-2/3 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
              Revitalizing Ayurveda:
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
              A Modern Identity for Prakriti Sattva{" "}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto md:mx-0">
              Bringing Ayurveda to the modern age with strategic rebranding and
              digital innovation
            </p>
          </motion.div>

          {/* Right Content - Logo */}
          <motion.div
            className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/images/work/prakritisattva/logo.png"
              alt="bmh"
              width={400} // Adjusted for mobile view
              height={400} // Adjusted for mobile view
              className="object-contain rounded-3xl sm:w-[500px] sm:h-[500px]"
            />
          </motion.div>
        </header>

        <section className="px-6 md:px-12 py-6 border-b border-gray-200 items-center justify-items-center w-full overflow-hidden">
          {/* Row with Title and Services */}
          <motion.div
            className="flex flex-wrap items-start md:items-center justify-center md:justify-start space-y-4 md:space-y-0"
            initial={{ opacity: 0, y: 50 }} // Start hidden and slide in from below
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible
            viewport={{ once: true }} // Trigger animation only once
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
          >
            {/* Title */}
            <h3 className="text-lg font-medium text-gray-800 border-b-4 border-[#839627] pb-1 mr-4 md:mr-8 w-full md:w-auto text-center md:text-left">
              What We Did
            </h3>

            {/* Services List */}
            <div className="flex flex-wrap items-center justify-center md:justify-start space-x-4 md:space-x-6">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#839627] rounded-full"></span>
                <span className="text-sm text-gray-700">Website Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#839627] rounded-full"></span>
                <span className="text-sm text-gray-700">Rebranding</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#839627] rounded-full"></span>
                <span className="text-sm text-gray-700">Packaging Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#839627] rounded-full"></span>
                <span className="text-sm text-gray-700">Logo Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#839627] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Social Media Marketing
                </span>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="flex items-center justify-center px-4 md:px-8 py-12 h-auto md:h-[408px] border-b-8 border-[#839627]">
          <motion.div
            className="max-w-xl md:max-w-2xl text-center md:text-left"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Description
            </h2>
            <p className="text-lg text-gray-700">
              Prakriti Sattva is an Ayurvedic wellness brand focused on helping
              individuals embrace a natural and holistic lifestyle rooted in
              Ayurveda, they sell both body-care products and offer Ayurvedic
              consultations. <br />
              <br />
              Our task was to completely rebrand of their product labels and
              redesign their website within a two-month timeline.
            </p>
          </motion.div>
        </section>

        {/* button */}
        <section className="h-[168px] bg-[#EDF2ED] flex items-center justify-center">
          <a
            href="https://generalaeronautics.com/"
            className="flex items-center justify-between w-[1121px] h-[56px] bg-[#8396274D] rounded-md px-6 shadow-md hover:shadow-lg transition-shadow border border-[#9D9D9D]"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Dot and Text */}
            <span className="flex items-center space-x-2 text-black font-semibold text-lg">
              <span className="w-2 h-2 bg-[#316714] rounded-full"></span>{" "}
              {/* Dot */}
              <span>Take a look at the General Aeronautics Website</span>
            </span>

            {/* Arrow */}
            <span className="text-black text-xl">
              <FaRegArrowAltCircleRight />
            </span>
          </a>
        </section>

        {/* Process & Key Points Section */}
        <section className="flex items-center justify-center px-4 md:px-8 py-12 h-auto md:h-[534px]">
          <motion.div
            className="max-w-xl md:max-w-3xl w-full"
            initial={{ opacity: 0, y: 50 }} // Initial state: hidden and slightly below
            whileInView={{ opacity: 1, y: 0 }} // When in view: fade in and slide up
            viewport={{ once: true }} // Animation triggers only once
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
          >
            {/* Section Title */}
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 text-center md:text-left">
              Process & Key Points:
            </h2>

            {/* Key Points List */}
            <ul className="space-y-4 md:space-y-6">
              {/* Key Point 1 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Social Media Marketing:
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Promoted the rebranding via MailChimp, Facebook, and Instagram
                  to drive engagement.
                </span>
              </li>

              {/* Key Point 2 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Rebranding:{" "}
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Crafted a new logo, tagline, and colour palette while refining
                  their target audience.
                </span>
              </li>

              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Product Redesign:{" "}
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Conducted packaging research to align product labels with the
                  updated brand identity.
                </span>
              </li>
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Website Redesign:{" "}
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Blended modern aesthetics with a traditional feel to appeal to
                  both younger and older audiences.{" "}
                </span>
              </li>
            </ul>
          </motion.div>
        </section>

        {/* Label Section */}
        <section className="bg-[#EDF2ED] px-6 md:px-16 lg:px-32 py-12">
          <div className="flex flex-col items-center">
            {/* Section Title */}
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-12">
              <span className="text-[#9F3A3D] mr-2">●</span> Take a Look at
              these beautiful label designs
            </h2>

            {/* Rows Container */}
            <div className="space-y-8 w-full max-w-screen-lg">
              {/* 1st, 2nd, 3rd Rows */}
              {[
                "/images/work/prakritisattva/label1.png",
                "/images/work/prakritisattva/label2.png",
                "/images/work/prakritisattva/label3.png",
              ].map((src, index) => (
                <motion.div
                  key={index}
                  className="w-full"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    src={src}
                    alt={`Row ${index + 1}`}
                    width={1116}
                    height={148}
                    className="object-cover w-full h-[148px] rounded-md"
                  />
                </motion.div>
              ))}

              {/* 4th Row */}
              <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/images/work/prakritisattva/label4.png"
                  alt="4th Row"
                  width={1116}
                  height={483}
                  className="object-cover w-full h-[483px] rounded-md"
                />
              </motion.div>

              {/* 5th Row */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {[
                  "/images/work/prakritisattva/label5.png",
                  "/images/work/prakritisattva/label6.png",
                  "/images/work/prakritisattva/label7.png",
                ].map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    alt={`5th Row Image ${index + 1}`}
                    width={356}
                    height={359}
                    className="object-cover w-full h-[359px] rounded-md"
                  />
                ))}
              </motion.div>

              {/* 6th Row */}
              <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/images/work/prakritisattva/label8.png"
                  alt="6th Row"
                  width={1116}
                  height={464}
                  className="object-cover w-full h-[464px] rounded-md"
                />
              </motion.div>

              {/* 7th Row */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {[
                  "/images/work/prakritisattva/label9.png",
                  "/images/work/prakritisattva/label10.png",
                  "/images/work/prakritisattva/label11.png",
                  "/images/work/prakritisattva/label12.png",
                ].map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    alt={`7th Row Image ${index + 1}`}
                    width={258}
                    height={258}
                    className="object-cover rounded-full"
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Challenges & Wins Section */}
        <section className="px-6 md:px-12 lg:px-32 py-12 bg-white flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <motion.div
            className="lg:w-2/3 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Challenges & Wins:
            </h2>
            <div className="space-y-4">
              <p>
                <strong className="text-lg font-semibold text-gray-900">
                  Challenge:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Completing the rebranding, product redesign, and website
                  overhaul within the tight two-month timeline.
                </span>
              </p>
              <p>
                <strong className="text-lg font-semibold text-gray-900">
                  Win:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Delivered a visually engaging website that resonated with a
                  modern audience while preserving traditional Ayurvedic values.
                </span>
              </p>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="lg:w-1/3 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/images/work/prakritisattva/hair.png"
              alt="Runner Illustration"
              width={300}
              height={300}
              className="object-contain"
            />
          </motion.div>
        </section>

        {/* Two-Image Section */}
        <section className="px-6 md:px-16 lg:px-32 py-12 bg-[#D8789E] flex items-center justify-center">
          <div className="w-full max-w-screen-lg">
            {/* Title */}
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-12 text-center">
              <span className="text-white">●</span> Some Mockups Exploring The
              Maatram Logo, Both English and Tamil, Applied to Various Places
            </h2>

            {/* Image Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">
              {/* Left Image */}
              <motion.div
                className="w-full max-w-[537px] h-auto flex items-center justify-center rounded-lg overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/images/work/prakritisattva/product.png" // Replace with your actual image path
                  alt="Mockup 1"
                  width={537}
                  height={504}
                  className="object-cover w-full h-auto md:w-[537px] md:h-[504px]"
                />
              </motion.div>

              {/* Right Image */}
              <motion.div
                className="w-full max-w-[537px] h-auto flex items-center justify-center rounded-lg overflow-hidden"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/images/work/prakritisattva/product2.png" // Replace with your actual image path
                  alt="Mockup 2"
                  width={537}
                  height={504}
                  className="object-cover w-full h-auto md:w-[537px] md:h-[504px]"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <Call />
      </div>
    </>
  );
};

export default prakritisattva;
