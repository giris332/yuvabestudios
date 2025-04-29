import Link from "next/link";
import Image from "next/image";
import Call from "@/components/Call";
import Head from "next/head";
import { motion } from "framer-motion";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const kittykat = () => {
  return (
    <>
      <Head>
        <title>Kittykat - Next-Gen Innovations</title>
        <meta
          name="description"
          content="Discover how we helped Kittykat grow awareness through strategic product campaigns, social media marketing, and eco-friendly hemp solutions."
        />
        <meta
          name="keywords"
          content="Kittykat, Hemp Products, Sustainability, Social Media Marketing, Eco-Friendly Solutions, Hemp Paper Workshop"
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
            <span> AI/Ml </span>
            <span className=" sm:inline">{">"}</span>
            <span className="font-medium text-gray-900 whitespace-nowrap">
              Kittykat
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
              Kittykat:
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
              Redefining Visual Appeal in Fashion with Cutting-Edge AI
              Technology{" "}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto md:mx-0">
              Crafting stunning visuals through innovative AI processes and
              precise refinement
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
              src="/images/work/kittykat/logo.svg"
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
                <span className="w-2 h-2 bg-[#2B4B73] rounded-full"></span>
                <span className="text-sm text-gray-700">Generative AI</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#2B4B73] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Data Preprocessing
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#2B4B73] rounded-full"></span>
                <span className="text-sm text-gray-700">Image Refinement</span>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="flex items-center justify-center px-4 md:px-8 py-12 h-auto md:h-[408px] border-b-8 border-[#2B4B73]">
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
              Yuvabe partnered with a leading media company in Singapore to
              revolutionize fashion image creation using Generative AI (GenAI).{" "}
              <br />
              <br />
              This innovative platform automates the seamless integration of
              product images into model photos, addressing critical industry
              challenges. Through advanced algorithms, data preprocessing, and
              model optimization, the platform delivered high-quality, scalable
              solutions that improved efficiency and brand appeal.
            </p>
          </motion.div>
        </section>

        {/* Poster Designs Section */}
        <section className="bg-[#EDF2ED] py-12 px-4 sm:px-6 md:px-12 lg:px-24">
          {/* Title */}
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8 text-center">
            <span className="text-[#9F3A3D]">●</span> Take a look at these
            screenshots from the AI Chatbot
          </h2>

          {/* Poster Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {/* First Row */}
            <motion.div
              className="w-full  overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/images/work/kittykat/screenshot-1.png"
                alt="PoSH Poster"
                width={524}
                height={254}
                className="object-contain w-full h-full"
              />
            </motion.div>
            <motion.div
              className="w-full  overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/images/work/kittykat/Screenshot-2.png" // Replace with actual path
                alt="We're Hiring Poster"
                width={524}
                height={254}
                className="object-contain w-full h-full"
              />
            </motion.div>

            {/* Second Row */}
            <motion.div
              className="w-full overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/images/work/kittykat/Screenshot-3.png" // Replace with actual path
                alt="Thank You Poster"
                width={524}
                height={254}
                className="object-contain w-full h-full"
              />
            </motion.div>
            <motion.div
              className="w-full overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/images/work/kittykat/Screenshot-4.png" // Replace with actual path
                alt="Makar Sankranti Poster"
                width={524}
                height={254}
                className="object-contain w-full h-full"
              />
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
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 text-center md:text-left">
              Process & Key Points:
            </h2>

            {/* Key Points List */}
            <ul className="space-y-4 md:space-y-6">
              {/* Key Point 1 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Automated Image Generation:
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Simplified the process of integrating product images with
                  model photos.
                </span>
              </li>

              {/* Key Point 2 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Data Preprocessing & Model Training:{" "}
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Applied sophisticated algorithms to ensure realistic and
                  high-quality results.
                </span>
              </li>

              {/* Key Point 3 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Hierarchical Image Refinement:{" "}
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Achieved precise facial and proportion accuracy using advanced
                  techniques.
                </span>
              </li>
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Model Optimisation:{" "}
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Enhanced image quality with diverse datasets to align with
                  industry standards.
                </span>
              </li>
            </ul>
          </motion.div>
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
                  Overcoming unresolved use cases in fashion imaging,
                  maintaining visual quality, and ensuring accuracy in
                  proportions
                </span>
              </p>
              <p>
                <strong className="text-lg font-semibold text-gray-900">
                  Win:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  The platform reduced image creation time, eliminated delays,
                  and supported scalable growth, boosting the media company’s
                  brand with innovative solutions.
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
              src="/images/work/kittykat/logo.svg"
              alt="Runner Illustration"
              width={200}
              height={200}
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

export default kittykat;
