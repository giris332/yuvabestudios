import Link from "next/link";
import Image from "next/image";
import Call from "@/components/Call";
import Head from "next/head";
import { motion } from "framer-motion";

const hemplanet = () => {
  return (
    <>
      <Head>
        <title>Hemplanet - Local Food Education</title>
        <meta
          name="description"
          content="Discover how we helped Hemplanet grow awareness through strategic product campaigns, social media marketing, and eco-friendly hemp solutions."
        />
        <meta
          name="keywords"
          content="Hemplanet, Hemp Products, Sustainability, Social Media Marketing, Eco-Friendly Solutions, Hemp Paper Workshop"
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
            <span className=" sm:inline">{">"} </span>
            <span> Digital Marketing</span>
            <span className=" sm:inline">{">"}</span>
            <span className="font-medium text-gray-900 whitespace-nowrap">
              Hemplanet
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
              Hemplanet:
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
              Promoting Hemp Solutions for a Sustainable Future.{" "}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto md:mx-0">
              Crafting impactful campaigns and visuals to showcase Hemplanet’s
              innovative hemp solutions.
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
              src="/images/work/hemplanet/hemplanet.png"
              alt="bmh"
              width={400}
              height={400}
              className="object-contain sm:w-[500px] sm:h-[500px]"
            />
          </motion.div>
        </header>
        <section className="px-6 md:px-12 py-6 border-b border-gray-200 items-center justify-items-center w-full overflow-hidden">
          {/* Row with Title and Services */}
          <motion.div
            className="flex flex-wrap items-start md:items-center justify-center md:justify-start space-y-4 md:space-y-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Title */}
            <h3 className="text-lg font-medium text-gray-800 border-b-4 border-gray-800 pb-1 mr-4 md:mr-8 w-full md:w-auto text-center md:text-left">
              What We Did
            </h3>

            {/* Services List */}
            <div className="flex flex-wrap items-center justify-center md:justify-start space-x-4 md:space-x-6">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#205B0B] rounded-full"></span>
                <span className="text-sm text-gray-700">Brand Strategy</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#205B0B] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Social Media Marketing
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#205B0B] rounded-full"></span>
                <span className="text-sm text-gray-700">Photography</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#205B0B] rounded-full"></span>
                <span className="text-sm text-gray-700">Market Research</span>
              </div>
            </div>
          </motion.div>
        </section>
        <section className="flex items-center justify-center px-4 md:px-8 py-12 h-auto md:h-[408px] border-b-8 border-[#205B0B]">
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
              Hemplanet specializes in hemp-related products, focusing on
              sustainable alternatives for eco-conscious consumers. <br />
              <br />
              The project aimed to enhance brand awareness by showcasing
              hemp&apos;s potential through high-quality content, targeted
              campaigns, and detailed research.
            </p>
          </motion.div>
        </section>
        <section className="w-full bg-[#EDF2ED] px-4 md:px-8 lg:px-16 py-12 flex items-center justify-center">
          <div className="w-full max-w-screen-lg">
            {/* Section Title */}
            <motion.h2
              className="text-xl md:text-2xl font-semibold text-gray-900 mb-8 flex items-start justify-start"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-[#98C93C] mr-2">●</span> Some Lovely Brand
              Photography
            </motion.h2>

            {/* Gallery Row */}
            <motion.div
              className="flex flex-wrap md:flex-nowrap items-center justify-center md:space-x-4 space-y-4 md:space-y-0 overflow-x-auto scrollbar-hide"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.2,
              }}
            >
              {/* Image 1 */}
              <motion.div
                className="  overflow-hidden w-full md:w-[163.69px] h-[291px]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/images/work/hemplanet/brand-1.png"
                  alt="Brand Photography 1"
                  width={163.69}
                  height={291}
                  className="object-contain w-full h-full"
                />
              </motion.div>

              {/* Image 2 */}
              <motion.div
                className="  overflow-hidden w-full md:w-[163.69px] h-[291px]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/images/work/hemplanet/brand-2.png"
                  alt="Brand Photography 2"
                  width={163.69}
                  height={291}
                  className="object-contain w-full h-full"
                />
              </motion.div>

              {/* Image 3 */}
              <motion.div
                className=" overflow-hidden w-full md:w-[516.69px] h-[291px]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/images/work/hemplanet/brand-4.webp"
                  alt="Brand Photography 3"
                  width={516.69}
                  height={291}
                  className="object-contain w-full h-full"
                />
              </motion.div>

              {/* Image 4 */}
              <motion.div
                className="  overflow-hidden w-full md:w-[163.69px] h-[291px]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/images/work/hemplanet/brand-3.png"
                  alt="Brand Photography 4"
                  width={163.69}
                  height={291}
                  className="object-contain w-full h-full"
                />
              </motion.div>
            </motion.div>
          </div>
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
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Process & Key Points:
            </h2>

            {/* Key Points List */}
            <ul className="space-y-6">
              {/* Key Point 1 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Social Media Marketing:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Developed content pillars and a strategic plan for Facebook
                  and Instagram to enhance brand presence{" "}
                </span>
              </li>

              {/* Key Point 2 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Photography & Workshop Coverage:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Captured high-quality product photography and documented
                  workshop events to support marketing efforts.{" "}
                </span>
              </li>

              {/* Key Point 3 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Research & Product Focus:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Conducted thorough research on hemp products and target
                  audiences to refine product offerings and market focus.{" "}
                </span>
              </li>
            </ul>
          </motion.div>
        </section>
        <section className="w-full bg-green-900 px-12 py-12 flex justify-center">
          <div className="max-w-[1200px] w-full">
            {/* Section Title */}
            <motion.h2
              className="text-xl md:text-2xl font-semibold text-white mb-8 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-[#98C93C] mr-2">●</span> Some Images from
              our Hemp Paper Making Workshop
            </motion.h2>

            {/* Image Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mx-auto">
              {[
                "/images/work/hemplanet/workshop1.png",
                "/images/work/hemplanet/workshop2.png",
                "/images/work/hemplanet/workshop3.png",
                "/images/work/hemplanet/workshop4.png",
                "/images/work/hemplanet/workshop5.png",
                "/images/work/hemplanet/workshop6.png",
                "/images/work/hemplanet/workshop7.png",
                "/images/work/hemplanet/workshop8.png",
                "/images/work/hemplanet/workshop9.png",
              ].map((src, index) => (
                <motion.div
                  key={index}
                  className="rounded-lg overflow-hidden"
                  style={{ width: "100%", height: "100%" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 + index * 0.1 }}
                >
                  <Image
                    src={src}
                    alt={`Workshop Image ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        ;{/* Challenges & Wins Section */}
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
                  Establishing a consistent brand theme and optimizing content
                  to maintain coherence across all platforms.
                </span>
              </p>
              <p>
                <strong className="text-lg font-semibold text-gray-900">
                  Win:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Achieved strong engagement through effective event coverage
                  and insightful product research, all within a tight timeframe.
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
              src="/images/work/hemplanet/logo-h.png"
              alt="Runner Illustration"
              width={300}
              height={300}
              className="object-contain"
            />
          </motion.div>
        </section>
        {/* Design Section */}
        <section className="bg-[#EDF2ED] px-6 md:px-16 py-12 flex items-center justify-center">
          {/* Wrapper to Center the Content */}
          <motion.div
            className="w-full max-w-screen-xl"
            initial={{ opacity: 0, y: 50 }} // Initial state: hidden and slightly below
            whileInView={{ opacity: 1, y: 0 }} // When in view: fade in and slide up
            viewport={{ once: true }} // Animation occurs only once
            transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and easing
          >
            {/* Title */}
            <h2 className="text-xl font-semibold text-black mb-8 text-start">
              <span className="text-[#98C93C]">●</span> What’s a big event like
              this without some merch?
            </h2>

            {/* Merch Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {/* Merch Items */}
              {[
                "design1.png",
                "design2.png",
                "design3.png",
                "design4.png",
                "design5.png",
                "design6.png",
                "design7.png",
                "design8.png",
                "design9.png",
                "design9.png",
              ].map((poster, index) => (
                <motion.div
                  key={index}
                  className="bg-[#EDF2ED] rounded-lg overflow-hidden"
                  style={{ width: "100%", aspectRatio: "1/1" }} // Maintain square aspect ratio
                  initial={{ opacity: 0, scale: 0.9 }} // Initial state: hidden and slightly smaller
                  whileInView={{ opacity: 1, scale: 1 }} // When in view: fade in and scale to normal size
                  viewport={{ once: true }} // Animation occurs only once
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1, // Staggered animation for each item
                    ease: "easeOut",
                  }}
                >
                  <Image
                    src={`/images/work/hemplanet/${poster}`}
                    alt={`Merch Item ${index + 1}`}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
        {/* Image with Link */}
        <section className="relative h-[600.19px] bg-white px-6 md:px-12 lg:px-32 py-16 flex flex-col">
          <div className="relative w-full h-[300px] sm:h-[400px] rounded-lg overflow-hidden mb-8">
            <Link
              href="https://youtu.be/GpdYt1xaHCo?si=iQrQ9w8vFknYKj4-"
              passHref
            >
              <div className="relative w-full h-full cursor-pointer">
                <Image
                  src="/images/work/hemplanet/banner.png"
                  alt="hemplanet"
                  layout="fill"
                  objectFit="contain" // Use contain to display the full image
                  className="rounded-lg"
                />
              </div>
            </Link>
          </div>

          {/* Watch Video Section */}
          <div className="text-lg md:text-xl text-black text-center font-semibold flex items-center justify-center">
            <p>
              {" "}
              <span className="text-[#98C93C]">●</span>Watch this testimonial
              video for Yuvabe by Krishna Mckenzie, Founder of Solitude Farm &
              Cafe
            </p>
          </div>
        </section>
        {/* Call to Action Section */}
        <Call />
      </div>
    </>
  );
};

export default hemplanet;
