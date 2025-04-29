import Link from "next/link";
import Image from "next/image";
import Call from "@/components/Call";
import Head from "next/head";
import { motion } from "framer-motion";

const martimandir = () => {
  return (
    <>
      <Head>
        <title>Martimandir - Building Awareness</title>
        <meta
          name="description"
          content="Discover how we helped Rangsutra grow awareness through strategic product campaigns, social media marketing, and eco-friendly hemp solutions."
        />
        <meta
          name="keywords"
          content="Rangsutra, Rangsutra Products, Sustainability, Social Media Marketing, Eco-Friendly Solutions, Hemp Paper Workshop"
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
              Martimandir
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
              Martimandir:
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
              A Digital Gateway to Auroville’s Heart{" "}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto md:mx-0">
              Designing a virtual reflection of Matrimandir’s harmony, purpose,
              and community impact.
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
              src="/images/work/martimandir/globe.png"
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
                <span className="w-2 h-2 bg-[#9F3A3D] rounded-full"></span>
                <span className="text-sm text-gray-700">Website Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#9F3A3D] rounded-full"></span>
                <span className="text-sm text-gray-700">Donor Engagement</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#9F3A3D] rounded-full"></span>
                <span className="text-sm text-gray-700">Illustrations</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Description Section */}
        <section className="flex items-center justify-center px-4 md:px-8 py-12 h-auto md:h-[408px] border-b-8 border-[#9F3A3D]">
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
              Matrimandir, the centre and soul of Auroville, is a sanctuary of
              beauty and meditation. The Matrimandir team approached Yuvabe to
              create a website that would serve as a dynamic platform for
              donors.
              <br />
              <br />
              The site needed to provide comprehensive updates on various
              landscape design work, share stories of volunteers, and offer
              detailed technical information about the donation process.
            </p>
          </motion.div>
        </section>

        <section className="h-[168px] bg-[#F7FAF5] flex items-center justify-center">
          <a
            href="https://www.matrimandir.org"
            className="flex items-center justify-between w-[1121px] h-[56px] bg-[#FBE9A3] rounded-md px-6 shadow-md hover:shadow-lg transition-shadow"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Dot and Text */}
            <span className="flex items-center space-x-2 text-black font-semibold text-lg">
              <span className="w-2 h-2 bg-black rounded-full"></span>{" "}
              {/* Dot */}
              <span>Take a look at the Matrimandir Website</span>
            </span>

            {/* Arrow */}
            <span className="text-black text-xl">➜</span>
          </a>
        </section>

        {/* Process & Key Points Section */}
        <section className="flex flex-col items-center justify-start px-8 py-12 h-auto">
          {/* Top Center Image */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: -50 }} // Initial animation: fade-in and slide down
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} // Animation triggers only once
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
          >
            <Image
              src="/images/work/martimandir/logo-1.png" // Replace with your actual image path
              alt="Matrimandir Logo"
              width={810}
              height={475}
              className="object-contain"
            />
          </motion.div>

          <motion.div
            className="max-w-3xl w-full"
            initial={{ opacity: 0, y: 50 }} // Initial animation: fade-in and slide up
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} // Animation triggers only once
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
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
                  event and engage potential participants.
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
                  participants’ minds.
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
                  registrations.
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
                  Meeting the aggressive registration target within a tight
                  timeframe required a highly effective marketing strategy.
                </span>
              </p>
              <p>
                <strong className="text-lg font-semibold text-gray-900">
                  Win:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Achieving the registration goal in 15 days was a testament to
                  our effective social media strategy and execution.
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
              src="/images/work/martimandir/logo-2.png"
              alt="Runner Illustration"
              width={300}
              height={300}
              className="object-contain"
            />
          </motion.div>
        </section>

        {/* Section with Background Image */}
        <section
          className="bg-cover bg-center h-[768px]"
          style={{
            backgroundImage: "url('/images/work/martimandir/bg.png')", // Replace with your image path
          }}
        ></section>

        {/* Call to Action Section */}
        <Call />
      </div>
    </>
  );
};

export default martimandir;
