import Link from "next/link";
import Image from "next/image";
import Call from "@/components/Call";
import Head from "next/head";
import { motion } from "framer-motion";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const tvam = () => {
  return (
    <>
      <Head>
        <title>Tvam - Next-Gen Innovations</title>
        <meta
          name="description"
          content="Discover how we helped Tvam grow awareness through strategic product campaigns, social media marketing, and eco-friendly hemp solutions."
        />
        <meta
          name="keywords"
          content="Tvam, Hemp Products, Sustainability, Social Media Marketing, Eco-Friendly Solutions, Hemp Paper Workshop"
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
            <span> AI/ML </span>
            <span className=" sm:inline">{">"}</span>
            <span className="font-medium text-gray-900 whitespace-nowrap">
              Tvam
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
              Tvam:
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
              Revolutionizing health, wealth and wellbeing with advanced AI
              Solutions{" "}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto md:mx-0">
              Simplifying complexity with AI-driven advisors and tools designed
              for success.
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
              src="/images/work/tvam/tvam3d.gif"
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
                <span className="w-2 h-2 bg-[#F26524] rounded-full"></span>
                <span className="text-sm text-gray-700">AI Integration</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#F26524] rounded-full"></span>
                <span className="text-sm text-gray-700">Website Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#F26524] rounded-full"></span>
                <span className="text-sm text-gray-700">Cloud Deployment</span>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="flex items-center justify-center px-4 md:px-8 py-12 h-auto md:h-[408px] border-b-8 border-[#F26524]">
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
              Yuvabe collaborated with a health and insurance company based in
              India to develop AI-powered Health and Policy Advisors, along with
              a USMLE preparation tool. <br />
              <br />
              These projects focused on automating processes, streamlining user
              interactions, and delivering innovative solutions. Leveraging
              cutting-edge AI models, cloud technologies, and a
              Retrieval-Augmented Generation (RAG) system, Yuvabe ensured
              scalable, efficient, and user-friendly deployments tailored to the
              company’s needs.
            </p>
          </motion.div>
        </section>

        {/* Snapshot Section */}
        <section className="relative bg-[#EDF2ED] px-6 md:px-12 lg:px-32 py-16">
          {/* Title */}
          <div className="text-start mb-12">
            <p className="text-black text-xl md:text-2xl lg:text-3xl font-semibold">
              <span className="text-[#F26524]">●</span> Check out a few
              snapshots from the refreshed website
            </p>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Snapshot 1 */}
            <div className="overflow-hidden flex justify-center">
              <div className="w-[305px] h-[660px]">
                <Image
                  src="/images/work/tvam/screenshot-1.png" // Replace with actual path
                  alt="Snapshot 1"
                  width={305}
                  height={660}
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Snapshot 2 */}
            <div className="overflow-hidden flex justify-center">
              <div className="w-[305px] h-[660px]">
                <Image
                  src="/images/work/tvam/screenshot-2.png" // Replace with actual path
                  alt="Snapshot 2"
                  width={305}
                  height={660}
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Snapshot 3 */}
            <div className="overflow-hidden flex justify-center">
              <div className="w-[305px] h-[660px]">
                <Image
                  src="/images/work/tvam/screenshot-3.png" // Replace with actual path
                  alt="Snapshot 3"
                  width={305}
                  height={660}
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Process & Key Points Section */}
        <section className="flex items-center justify-center px-4 md:px-8 py-12 h-auto md:h-[654px]">
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
                  Health Advisor Development:
                </strong>
                <ul className="list-disc pl-5 text-base md:text-lg text-gray-700">
                  <li>
                    Integrated a chat-based AI model for health-related queries.
                  </li>
                  <li>
                    Secured conversation storage using Google Cloud Storage.
                  </li>
                  <li>
                    Incorporated TTS & STT capabilities for enhanced user
                    experiences.
                  </li>
                  <li>
                    Deployed the application using Docker and Google Cloud.
                  </li>
                </ul>
              </li>

              {/* Key Point 2 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Policy Advisor Implementation:
                </strong>
                <ul className="list-disc pl-5 text-base md:text-lg text-gray-700">
                  <li>
                    Built a knowledge base using RAG systems and stored vectors
                    in Pinecone.
                  </li>
                  <li>
                    Enabled file upload integration and seamless query
                    processing.
                  </li>
                  <li>
                    Deployed on Azure Cloud with secure conversation storage in
                    Supabase.
                  </li>
                </ul>
              </li>

              {/* Key Point 3 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  USMLE Preparation Tool:
                </strong>
                <ul className="list-disc pl-5 text-base md:text-lg text-gray-700">
                  <li>
                    Designed promotional banners and crafted organic content to
                    boost social presence.
                  </li>
                </ul>
              </li>

              {/* Key Point 4 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  UI/UX for Web Application:
                </strong>
                <ul className="list-disc pl-5 text-base md:text-lg text-gray-700">
                  <li>
                    Enhanced accuracy with Chain of Thought (CoT) reasoning for
                    7,000 questions.
                  </li>
                  <li>
                    Developed a vector database for efficient question
                    retrieval.
                  </li>
                  <li>
                    Created a robust RAG-based system using Python and SQLite3.
                  </li>
                </ul>
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
                  Integrating diverse AI services, managing data security, and
                  coordinating seamless system interactions.
                </span>
              </p>
              <p>
                <strong className="text-lg font-semibold text-gray-900">
                  Win:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Delivered AI-powered solutions that automated tasks, improved
                  customer engagement, and empowered users with effective tools
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
              src="/images/work/tvam/logo.png"
              alt="Runner Illustration"
              width={100}
              height={100}
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

export default tvam;
