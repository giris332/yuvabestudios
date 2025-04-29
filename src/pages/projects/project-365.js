import Link from "next/link";
import Image from "next/image";
import Call from "@/components/Call";
import Head from "next/head";
import { motion } from "framer-motion";

const hemplanet = () => {
  return (
    <>
      <Head>
        <title>Project-365 - Local Food Education</title>
        <meta
          name="description"
          content="Discover how we helped Project-365 grow awareness through strategic product campaigns, social media marketing, and eco-friendly hemp solutions."
        />
        <meta
          name="keywords"
          content="Project-365, Hemp Products, Sustainability, Social Media Marketing, Eco-Friendly Solutions, Hemp Paper Workshop"
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
              Project-365
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
              From Farm to Table:
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
              A Year of Local Impact, Global Connection!{" "}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto md:mx-0">
              A Year-Long Digital Campaign to Educate the Community on the
              Benefits of Local Food through Consistent, Daily Content Across
              Meta Platforms and the Client’s Website.
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
              src="/images/work/project-365/banner.png"
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
                <span className="w-2 h-2 bg-[#98C93C] rounded-full"></span>
                <span className="text-sm text-gray-700">Product Strategy</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#98C93C] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Social Media Marketing
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#98C93C] rounded-full"></span>
                <span className="text-sm text-gray-700">Graphic Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#98C93C] rounded-full"></span>
                <span className="text-sm text-gray-700">UI/UX Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#98C93C] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Website Development
                </span>
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
              Project 365 aimed to elevate awareness about local food and
              educate the community about its benefits through a comprehensive
              digital campaign. <br />
              <br />
              Over the course of one year, our team executed a daily content
              strategy across Meta platforms and the client’s website, ensuring
              a consistent and engaging presence.
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
              <span className="text-[#98C93C]">●</span> What’s a big event like
              this without some merch?
            </h2>

            {/* Merch Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {/* Merch Items */}
              {[
                "img-1.png",
                "img-2.png",
                "img-3.png",
                "img-4.png",
                "img-5.png",
                "img-6.png",
                "img-7.png",
                "img-8.png",
                "img-9.png",
                "img-10.png",
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
                    src={`/images/work/project-365/${poster}`}
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
                  Automated Content Publishing:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  We developed an automated code to streamline content posting
                  across multiple channels, including WordPress, Facebook,
                  Instagram, and MailChimp. This innovation saved time and
                  ensured synchronisation across platforms.{" "}
                </span>
              </li>

              {/* Key Point 2 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Daily Content Management:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Our team meticulously created, organised, and posted daily
                  content, which included articles, visuals, and interactive
                  elements to keep the audience engaged.{" "}
                </span>
              </li>

              {/* Key Point 3 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Website Revamp:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  We revamped the client&apos;s website to enhance user
                  experience and improve content visibility.{" "}
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

        {/* Snapshot Section */}
        <section className="relative bg-[#205B0B] px-6 md:px-12 lg:px-32 py-16">
          {/* Title */}
          <div className="text-center mb-12">
            <p className="text-white text-2xl md:text-3xl font-semibold">
              <span className="text-[#98C93C]">●</span> Check out a few
              snapshots from the refreshed website
            </p>
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8">
            {/* First Image */}
            <motion.div
              className="overflow-hidden w-[252px] h-[962.25px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src="/images/work/project-365/home-1.png"
                alt="Snapshot 1"
                width={252}
                height={962.25}
                className="object-cover w-full h-full"
              />
            </motion.div>

            {/* Second Image */}
            <motion.div
              className="overflow-hidden w-[252px] h-[811px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/images/work/project-365/home-2.png"
                alt="Snapshot 2"
                width={252}
                height={811}
                className="object-cover w-full h-full"
              />
            </motion.div>

            {/* Third Image */}
            <motion.div
              className="overflow-hidden w-[252px] h-[608px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, ease: "easeOut" }}
            >
              <Image
                src="/images/work/project-365/home-3.png"
                alt="Snapshot 3"
                width={252}
                height={608}
                className="object-cover w-full h-full"
              />
            </motion.div>

            {/* Fourth Image */}
            <motion.div
              className="overflow-hidden w-[252px] h-[772px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <Image
                src="/images/work/project-365/home-4.png"
                alt="Snapshot 4"
                width={252}
                height={772}
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </section>

        <section className="relative h-[1109.19px] bg-white px-6 md:px-12 lg:px-32 py-16 flex flex-col">
          {/* Challenges & Wins */}
          <motion.div
            className="max-w-2xl mb-12 items-center justify-center self-center"
            initial={{ opacity: 0, y: 50 }} // Hidden and slightly below
            whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up
            viewport={{ once: true }} // Trigger animation only once
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Challenges & Wins:
            </h2>
            <p className="text-lg text-gray-700">
              <strong>Challenge: </strong>Coordinating daily content updates and
              managing multiple channels simultaneously required careful
              planning and execution.
              <br />
              <br />
              <strong>Win: </strong>The automated publishing system greatly
              improved efficiency, and the comprehensive content strategy
              significantly boosted engagement and awareness about local food.
            </p>
          </motion.div>

          {/* Image with Link */}
          <motion.div
            className="relative w-full h-[639.19px] rounded-lg overflow-hidden mb-8"
            initial={{ opacity: 0, scale: 0.9 }} // Hidden with slight scaling down
            whileInView={{ opacity: 1, scale: 1 }} // Fade in and scale to normal
            viewport={{ once: true }} // Trigger animation only once
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
          >
            <Link href="https://youtu.be/yz2ksYMFzT8" passHref>
              <div className="relative w-full h-full cursor-pointer">
                <Image
                  src="/images/work/project-365/video.png"
                  alt="Solitude Farm"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </Link>
          </motion.div>

          {/* Watch Video Section */}
          <motion.div
            className="text-lg md:text-xl text-black font-semibold flex items-center justify-center"
            initial={{ opacity: 0, y: 50 }} // Hidden and slightly below
            whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up
            viewport={{ once: true }} // Trigger animation only once
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
          >
            <p>
              {" "}
              <span className="text-[#98C93C]">●</span>Watch this wrap-up video
              that perfectly captures the essence of Project 365.
            </p>
          </motion.div>
        </section>

        {/* Founder Section */}
        <section className="bg-[#205B0B] text-white py-12 px-8">
          <motion.div
            className="max-w-3xl mx-auto text-left"
            initial={{ opacity: 0, y: 50 }} // Start hidden and slide up
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible
            viewport={{ once: true }} // Trigger animation only once
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
          >
            <p className="text-2xl font-medium ">
              “The Project 365 team exceeded our expectations with their
              innovative approach and dedication. Their automated system and
              daily content strategy truly transformed our online presence.”
            </p>
            <p className="mt-4 text-xl font-regular font-secondary">
              Krishna Mckenzie, Founder of Solitude Farm & Cafe
            </p>
          </motion.div>
        </section>

        {/* Snapshot Section */}
        <section className="relative h-auto bg-[#EDF2ED] px-6 md:px-12 lg:px-32 py-16">
          {/* Title */}
          <div className="text-center mb-12">
            <p className="text-black text-2xl md:text-3xl font-semibold">
              <span className="text-[#98C93C]">●</span> Check out a few
              snapshots from the refreshed website
            </p>
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* First Image */}
            <motion.div
              className="overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src="/images/work/project-365/clay.png"
                alt="clay balls"
                width={400}
                height={600}
                className="object-cover w-full h-auto"
              />
            </motion.div>

            {/* Second Image */}
            <motion.div
              className="overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/images/work/project-365/star.png"
                alt="star"
                width={400}
                height={600}
                className="object-cover w-full h-auto"
              />
            </motion.div>

            {/* Third Image */}
            <motion.div
              className="overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, ease: "easeOut" }}
            >
              <Image
                src="/images/work/project-365/tree.png"
                alt="Soapnut"
                width={400}
                height={600}
                className="object-cover w-full h-auto"
              />
            </motion.div>

            {/* Fourth Image */}
            <motion.div
              className="overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <Image
                src="/images/work/project-365/drumstick.png"
                alt="drumstick"
                width={400}
                height={600}
                className="object-cover w-full h-auto"
              />
            </motion.div>
          </div>
        </section>

        <section className="relative h-[600.19px] bg-white px-6 md:px-12 lg:px-32 py-16 flex flex-col">
          <div className="relative w-full h-[300px] sm:h-[400px] rounded-lg overflow-hidden mb-8">
            <Link
              href="https://www.instagram.com/reel/Cq73CS1PjQ5/?igsh=eHA0dXJnMTNkZWZk"
              passHref
            >
              <div className="relative w-full h-full cursor-pointer">
                <Image
                  src="/images/work/project-365/Krishna.png"
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
