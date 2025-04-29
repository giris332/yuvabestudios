import Link from "next/link";
import Image from "next/image";
import Call from "@/components/Call";
import Head from "next/head";
import { motion } from "framer-motion";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const maatram = () => {
  return (
    <>
      <Head>
        <title>Maatram - Redefining Mental Health </title>
        <meta
          name="description"
          content="Discover how we helped Maatram grow awareness through strategic product campaigns, social media marketing, and eco-friendly hemp solutions."
        />
        <meta
          name="keywords"
          content="Maatram, Maatram Products, Sustainability, Social Media Marketing, Eco-Friendly Solutions, Hemp Paper Workshop"
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
              Maatram
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
              Maatram:
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
              Crafting a Digital Space for Mental Health and Transformation.{" "}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto md:mx-0">
              Crafting a user-focused website and meaningful logo to embody
              Maatram’s mission of mental health support and transformation.
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
              src="/images/work/maatram/logo.png"
              alt="bmh"
              width={500}
              height={500}
              className="object-contain rounded-3xl sm:w-[500px] sm:h-[500px]"
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
                <span className="w-2 h-2 bg-[#33ACA9] rounded-full"></span>
                <span className="text-sm text-gray-700">Brand Identity</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#33ACA9] rounded-full"></span>
                <span className="text-sm text-gray-700">Logo Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#33ACA9] rounded-full"></span>
                <span className="text-sm text-gray-700">Website Design</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Description Section */}
        <section className="flex items-center justify-center px-4 md:px-8 py-12 h-auto md:h-[408px] border-b-8 border-[#33ACA9]">
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
              Maatram, Auroville’s leading mental health support unit, entrusted
              Yuvabe with creating a digital presence that reflects their
              values. <br />
              <br />
              The project involved designing a user-friendly website and an
              expressive logo that resonates with Maatram’s mission of change,
              community, and support.
            </p>
          </motion.div>
        </section>

        {/* button */}
        <section className="h-[168px] bg-[#EDF2ED] flex items-center justify-center">
          <a
            href="https://maatram.org.in/"
            className="flex items-center justify-between w-[1121px] h-[56px] bg-[#33ACA933] rounded-md px-6 shadow-md hover:shadow-lg transition-shadow border border-[#9D9D9D]"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Dot and Text */}
            <span className="flex items-center space-x-2 text-[#545454] font-semibold text-lg">
              <span className="w-2 h-2 bg-[#33ACA9] rounded-full"></span>{" "}
              {/* Dot */}
              <span>Take a look at the Maatram Website</span>
            </span>

            {/* Arrow */}
            <span className="text-black text-xl">
              <FaRegArrowAltCircleRight />
            </span>
          </a>
        </section>

        {/* Process & Key Points Section */}
        <section className="flex items-center justify-center h-auto bg-white px-6 md:px-12 lg:px-32 py-12">
          <motion.div
            className="w-full max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 50 }} // Initial state: fade in and slide up
            whileInView={{ opacity: 1, y: 0 }} // Animate when in view
            viewport={{ once: true }} // Trigger animation only once
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
          >
            {/* Left Column */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Process & Key Points:
              </h2>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Logo Design:
              </h3>
              <ul className="space-y-4 text-gray-700 tracking-wide leading-relaxed">
                <li>
                  <strong className="font-semibold">
                    Color Palette Selection:
                  </strong>{" "}
                  Chose colors that reflect Maatram’s identity and resonate with
                  their core values.
                </li>
                <li>
                  <strong className="font-semibold">Typography:</strong>{" "}
                  Selected fonts that complement the brand’s feel and message,
                  ensuring readability across mediums.
                </li>
                <li>
                  <strong className="font-semibold">Logo Form Design:</strong>{" "}
                  Crafted a logo inspired by traditional kolam designs,
                  embodying Maatram’s mission of change and support.
                </li>
              </ul>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4 md:mt-[38px]">
                Website Design:
              </h3>
              <ul className="space-y-4 text-gray-700 tracking-wide leading-relaxed">
                <li>
                  <strong className="font-semibold">
                    Defining Core Values and Services:
                  </strong>{" "}
                  Crafted a clear and compelling message aligned with Maatram’s
                  mission.
                </li>
                <li>
                  <strong className="font-semibold">
                    Structuring Information:
                  </strong>{" "}
                  Organized content into key sections—What, Why, How, and
                  Who—for clarity and impact.
                </li>
                <li>
                  <strong className="font-semibold">Content Refinement:</strong>{" "}
                  Edited and polished the content to ensure consistency and
                  engagement.
                </li>
              </ul>
            </div>
          </motion.div>
        </section>

        {/* Mockups Section */}
        <section className="h-auto bg-[#33ACA9] px-6 md:px-16 lg:px-32 py-12 flex items-center justify-center relative overflow-hidden">
          <div className="w-full max-w-screen-lg flex flex-col items-center">
            {/* Title */}
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-12 text-center">
              <span className="text-white">●</span> Some Mockups Exploring The
              Maatram Logo, Both English and Tamil, Applied to Various Places
            </h2>

            {/* Positioned Images */}
            <div className="relative w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-4">
              {/* First Image */}
              <motion.div
                className="w-[80%] md:w-[546px] h-auto rounded-tl-[16px] overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/images/work/maatram/mockup_1.png"
                  alt="Mockup 1"
                  width={546}
                  height={362}
                  className="object-cover w-full h-full"
                />
              </motion.div>

              {/* Second Image */}
              <motion.div
                className="w-[80%] md:w-[546px] h-auto rounded-tl-[16px] overflow-hidden"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/images/work/maatram/mockup_2.png"
                  alt="Mockup 2"
                  width={546}
                  height={362}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Challenges and Wins Section */}
        <section className="px-6 md:px-16 lg:px-32 py-12 bg-white flex items-start justify-around h-auto">
          <motion.div
            className="w-full max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"
            initial={{ opacity: 0, y: 50 }} // Initial state for animation
            whileInView={{ opacity: 1, y: 0 }} // While in view: fade in and slide up
            viewport={{ once: true }} // Trigger animation only once
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
          >
            {/* Challenges Column */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Challenges
              </h3>
              <p className="text-base font-secondary  text-gray-700 mb-4">
                <strong>Website :</strong> Lack of images and content. We relied
                on stock images and focused on making the connection to
                Auroville clear.
              </p>
              <p className="text-base text-gray-700 font-secondary ">
                <strong>Logo:</strong> Aligning colour, form, and typography to
                Maatram’s core values was a learning process for the team.
              </p>
            </div>

            {/* Wins Column */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Wins</h3>
              <p className="text-base text-gray-700 mb-4 font-secondary ">
                <strong>Website :</strong> Delivered a user-friendly website
                that enabled more people in Auroville to connect with Maatram
                for appointments and work opportunities.
              </p>
              <p className="text-base text-gray-700 font-secondary ">
                <strong>Logo:</strong> The logo, a stylized &quot;M&quot;
                inspired by kolam design, has been well-received by the
                community and boasts high recall.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Call to Action Section */}
        <Call />
      </div>
    </>
  );
};

export default maatram;
