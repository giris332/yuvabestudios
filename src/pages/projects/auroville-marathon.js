import Link from "next/link";
import Image from "next/image";
import Call from "@/components/Call";
import Head from "next/head";
import { motion } from "framer-motion";

const AurovilleMarathon = () => {
  return (
    <>
      <Head>
        <title>AV Marathon - Local Food Education</title>
        <meta
          name="description"
          content="Discover how we helped AV Marathon grow awareness through strategic product campaigns, social media marketing, and eco-friendly hemp solutions."
        />
        <meta
          name="keywords"
          content="AV Marathon, Hemp Products, Sustainability, Social Media Marketing, Eco-Friendly Solutions, Hemp Paper Workshop"
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
            <span> Digital Marketing</span>
            <span className=" sm:inline">{">"}</span>
            <span className="font-medium text-gray-900 whitespace-nowrap">
              AV Marathon
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
              Auroville Marathon:
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
              A Celebration of Movement and Unity.{" "}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto md:mx-0">
              A Targeted Social Media Strategy to Engage and Drive Registrations
              and Participation for a Community-Focused Annual Running Event.
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
              src="/images/work/marathon.png"
              alt="bmh"
              width={400}
              height={400}
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
                <span className="w-2 h-2 bg-[#05155E] rounded-full"></span>
                <span className="text-sm text-gray-700">Product Strategy</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#05155E] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Social Media Marketing
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#05155E] rounded-full"></span>
                <span className="text-sm text-gray-700">Graphic Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#05155E] rounded-full"></span>
                <span className="text-sm text-gray-700">UI/UX Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#05155E] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Website Development
                </span>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="flex items-center justify-center px-4 md:px-8 py-12 h-auto md:h-[408px] border-b-8 border-[#05155E]">
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
              AV Marathon is an annual local event celebrating the joy of
              running, where every participant is a winner. <br />
              <br />
              Our goal was to drive registrations through targeted social media
              marketing within a three-month project period as well as help
              manage the event and media coverage.
            </p>
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
              <span className="text-[#05155E]">●</span> Check out some of these
              amazing designs for AV Marathon&apos;s social media
            </h2>

            {/* Merch Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {/* Merch Items */}
              {[
                "poster_1.png",
                "poster_2.png",
                "poster_3.png",
                "poster_4.png",
                "poster_5.png",
                "poster_6.png",
                "poster_7.png",
                "poster_8.png",
                "poster_9.png",
                "poster_10.png",
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
                    src={`/images/work/marathon/${poster}`}
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
                  We utilised MailChimp, Facebook, and Instagram to promote the
                  event and engage potential participants.{" "}
                </span>
              </li>

              {/* Key Point 2 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Daily Content Posting:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Our team was responsible for creating and posting engaging
                  content daily, keeping the event at the forefront of
                  participants’ minds.{" "}
                </span>
              </li>

              {/* Key Point 3 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Registration Target:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  We set a goal to achieve 2500 registrations through social
                  media in one and a half months. By leveraging strategic
                  content and targeted ads, we reached this milestone in just 15
                  days. On the closing date, we received up to 2984
                  registrations.{" "}
                </span>
              </li>
              {/* Key Point 4 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Advertising Campaigns:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Implemented both organic and paid advertisements to promote
                  workshops, reaching a wider audience and driving
                  participation.{" "}
                </span>
              </li>
            </ul>
          </motion.div>
        </section>

        {/* Design Section */}
        <section className="bg-[#05155E] px-6 md:px-16 py-12 flex items-center justify-center">
          {/* Wrapper to Center the Content */}
          <motion.div
            className="w-full max-w-screen-xl"
            initial={{ opacity: 0, y: 50 }} // Initial state: hidden and slightly below
            whileInView={{ opacity: 1, y: 0 }} // When in view: fade in and slide up
            viewport={{ once: true }} // Animation occurs only once
            transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and easing
          >
            {/* Title */}
            <h2 className="text-xl font-semibold text-white mb-8 text-start">
              <span className="text-white">●</span> What&apos;s a big event like
              this without some merch?
            </h2>

            {/* Merch Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {/* Merch Items */}
              {[
                "poster_01.png",
                "poster_02.png",
                "poster_03.png",
                "poster_04.png",
                "poster_06.png",
                "poster_07.png",
                "poster_08.png",
                "poster_09.png",
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
                    src={`/images/work/marathon/${poster}`}
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
                  Meeting the aggressive registration target within a tight
                  timeframe <br />
                  required a highly effective marketing strategy.
                </span>
              </p>
              <p>
                <strong className="text-lg font-semibold text-gray-900">
                  Win:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Achieving the registration goal in 15 days was a testament to
                  our effective
                  <br /> social media strategy and execution.
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
              src="/images/work/marathon/runner.png"
              alt="Runner Illustration"
              width={300}
              height={300}
              className="object-contain"
            />
          </motion.div>
        </section>

        {/* Founder Section */}
        <section className="bg-[#05155E] text-white py-12 px-8">
          <motion.div
            className="max-w-3xl mx-auto text-left"
            initial={{ opacity: 0, y: 50 }} // Start hidden and slide up
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible
            viewport={{ once: true }} // Trigger animation only once
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
          >
            <p className="text-lg font-semibold">
              &quot;The marketing campaign for Av Marathon was a huge success.
              The team&apos;s ability to exceed the registration goal so quickly
              was impressive and greatly contributed to the event&apos;s
              success.&quot;
            </p>
            <p className="mt-4 text-sm font-medium">Av Marathon Team.</p>
          </motion.div>
        </section>

        {/* Gallery Section */}
        <section className="px-8 py-12">
          {/* Title */}
          <motion.h2
            className="text-xl font-semibold text-gray-900 mb-8 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-[#05155E]">●</span> A few other things you
            might need at a marathon - Maps, Medals, Bibs, Certificates and more
          </motion.h2>

          {/* Gallery Grid */}
          <motion.div
            className="grid gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              staggerChildren: 0.1,
            }}
          >
            {/* First Row */}
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.div
                className="rounded-lg overflow-hidden shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/images/work/marathon/p1.png"
                  alt="Turn Right"
                  width={204}
                  height={244}
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <motion.div
                className="rounded-lg overflow-hidden shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/images/work/marathon/p2.png"
                  alt="Go Straight"
                  width={204}
                  height={244}
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <motion.div
                className="rounded-lg overflow-hidden shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/images/work/marathon/p3.png"
                  alt="Turn Left"
                  width={204}
                  height={244}
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <motion.div
                className="rounded-lg overflow-hidden shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/images/work/marathon/certificate-06.png"
                  alt="Certificate"
                  width={345}
                  height={244}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>

            {/* Second Row */}
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.div
                className="rounded-lg overflow-hidden shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/images/work/marathon/bib.png"
                  alt="Green Bib"
                  width={297}
                  height={198}
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <motion.div
                className="rounded-lg overflow-hidden shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/images/work/marathon/bib2.png"
                  alt="Red Bib"
                  width={297}
                  height={198}
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <motion.div
                className="rounded-lg overflow-hidden shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/images/work/marathon/map.png"
                  alt="Map"
                  width={356}
                  height={244}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Call to Action Section */}
        <Call />
      </div>
    </>
  );
};

export default AurovilleMarathon;
