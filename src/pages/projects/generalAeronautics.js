import Link from "next/link";
import Image from "next/image";
import Call from "@/components/Call";
import Head from "next/head";
import { motion } from "framer-motion";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const generalAeronautics = () => {
  return (
    <>
      <Head>
        <title>General Aeronautics - Next-Gen Innovations</title>
        <meta
          name="description"
          content="Discover how we helped General Aeronautics grow awareness through strategic product campaigns, social media marketing, and eco-friendly hemp solutions."
        />
        <meta
          name="keywords"
          content="General Aeronautics, Hemp Products, Sustainability, Social Media Marketing, Eco-Friendly Solutions, Hemp Paper Workshop"
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
              General Aeronautics
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
              Next-Gen Innovations:
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
              Revolutionizing Agricultural Technology with Aerial Solutions{" "}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto md:mx-0">
              Building a user-first digital experience to support the future of
              agriculture and defense innovation.
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
              src="/images/work/general/logo.png"
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
            <h3 className="text-lg font-medium text-gray-800 border-b-4 border-gray-800 pb-1 mr-4 md:mr-8 w-full md:w-auto text-center md:text-left">
              What We Did
            </h3>

            {/* Services List */}
            <div className="flex flex-wrap items-center justify-center md:justify-start space-x-4 md:space-x-6">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#938953] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Web Application Development
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#938953] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Social Media Strategy
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#938953] rounded-full"></span>
                <span className="text-sm text-gray-700">Content Creation</span>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="flex items-center justify-center px-4 md:px-8 py-12 h-auto md:h-[408px] border-b-8 border-[#938953]">
          <motion.div
            className="max-w-xl md:max-w-2xl text-center md:text-left"
            initial={{ opacity: 0, scale: 0.9 }} // Start hidden with slight scaling down
            whileInView={{ opacity: 1, scale: 1 }} // Animate to visible
            viewport={{ once: true }} // Trigger animation only once
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Description
            </h2>
            <p className="text-lg text-gray-700">
              General Aeronautics specialises in unmanned drones for defence and
              agriculture, offering cost-effective solutions for complex
              challenges. <br />
              <br />
              The project involved a complete website revamp, enhanced branding,
              and UI/UX design for their web application, by crafting a cohesive
              digital presence, we aimed to position General Aeronautics as a
              leader in drone technology, streamlining user interaction and
              showcasing their innovative solutions to diverse audiences.
            </p>
          </motion.div>
        </section>

        {/* button */}
        <section className="h-[168px] bg-[#EDF2ED] flex items-center justify-center">
          <a
            href="https://generalaeronautics.com/"
            className="flex items-center justify-between w-[1121px] h-[56px] bg-[#33ACA933] rounded-md px-6 shadow-md hover:shadow-lg transition-shadow border border-[#9D9D9D]"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Dot and Text */}
            <span className="flex items-center space-x-2 text-[#545454] font-semibold text-lg">
              <span className="w-2 h-2 bg-[#33ACA9] rounded-full"></span>{" "}
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
                  Website Revamp:
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Enhanced user experience and content visibility through a
                  complete redesign.
                </span>
              </li>

              {/* Key Point 2 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Branding:{" "}
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Created a new logo, illustrations, videos, and engaging blog
                  content.
                </span>
              </li>

              {/* Key Point 3 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Social Media:{" "}
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Designed promotional banners and crafted organic content to
                  boost social presence
                </span>
              </li>
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  UI/UX for Web Application:{" "}
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Conducted user research and designed intuitive screens for the
                  web app.
                </span>
              </li>
            </ul>
          </motion.div>
        </section>

        {/* Infographic Poster Designs Section */}
        <section className="bg-[#EDF2ED] py-12 px-4 sm:px-6 md:px-12 lg:px-24">
          {/* Title */}
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8 text-center">
            <span className="text-[#9F3A3D]">●</span> Take a Look at these
            amazing infographic poster designs
          </h2>

          {/* Poster Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {/* First Row */}
            <motion.div
              className="w-full rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/images/work/general/poster1.png" // Replace with actual path
                alt="PoSH Poster"
                width={480}
                height={392}
                className="object-contain w-full h-full"
              />
            </motion.div>
            <motion.div
              className="w-full rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/images/work/general/poster2.png" // Replace with actual path
                alt="We're Hiring Poster"
                width={589}
                height={392}
                className="object-contain w-full h-full"
              />
            </motion.div>

            {/* Second Row */}
            <motion.div
              className="w-full rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/images/work/general/poster3.png" // Replace with actual path
                alt="Thank You Poster"
                width={528}
                height={529}
                className="object-contain w-full h-full"
              />
            </motion.div>
            <motion.div
              className="w-full rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/images/work/general/poster4.png" // Replace with actual path
                alt="Makar Sankranti Poster"
                width={528}
                height={529}
                className="object-contain w-full h-full"
              />
            </motion.div>
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
                  Balancing simplicity and interactivity in the design while
                  coordinating with developers.
                </span>
              </p>
              <p>
                <strong className="text-lg font-semibold text-gray-900">
                  Win:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Delivered a platform that positioned General Aeronautics as a
                  leader in cost-effective drone technology solutions.
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
              src="/images/work/general/logo.png"
              alt="Runner Illustration"
              width={300}
              height={300}
              className="object-contain"
            />
          </motion.div>
        </section>

        {/* Call to Action Section */}
        <Call />
      </div>
    </>
  );
};

export default generalAeronautics;
