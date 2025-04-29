import Link from "next/link";
import Image from "next/image";
import Call from "@/components/Call";
import Head from "next/head";
import { motion } from "framer-motion";

const rangsutra = () => {
  return (
    <>
      <Head>
        <title>Rangsutra - Building Awareness</title>
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
            <Link href="/portfolio/digital-marketing">
              <button className="hover:underline text-gray-500 whitespace-nowrap">
                Digital Marketing
              </button>
            </Link>
            <span className=" sm:inline">{">"}</span>
            <span className="font-medium text-gray-900 whitespace-nowrap">
              Rangsutra
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
              Rangsutra:
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
              Where Artisanal Craft Meets Modern Marketing.{" "}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto md:mx-0">
              A Comprehensive Social Media Campaign to Enhance Brand Awareness
              and Drive Lead Generation for an Artisan-Led Retail and E-commerce
              Clothing Brand.
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
              src="/images/work/rangsutra/banner.png"
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
                <span className="text-sm text-gray-700">Brand Strategy</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#9F3A3D] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Social Media Marketing
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#9F3A3D] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Campaign Development
                </span>
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
              Rangsutra is a retail and online clothing store owned and operated
              by artisans as stakeholders. <br />
              <br />
              The project’s primary goal was to create brand awareness and
              effectively generate leads through strategic campaigns by
              showcasing the unique craftsmanship of the artisans.
            </p>
          </motion.div>
        </section>

        {/* Illustration Section */}
        <section className="bg-[#EDF2ED] px-6 md:px-16 lg:px-32 py-12 h-auto flex items-center justify-center">
          <div className="w-full max-w-screen-lg">
            {/* Text Section */}
            <motion.div
              className="mb-8 md:mb-0"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                <span className="text-[#9F3A3D] mr-2">●</span> Take a look at
                these Illustrations
              </h2>
            </motion.div>

            {/* Images Section */}
            <div className="flex flex-col md:flex-row items-start md:items-start justify-between space-y-8 md:space-y-0">
              {/* First Image */}
              <motion.div
                className="rounded-lg overflow-hidden w-full md:w-[576px] md:h-[477px]"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/images/work/rangsutra/women-2.png"
                  alt="Illustration 1"
                  width={576}
                  height={477}
                  className="object-contain w-full h-full"
                />
              </motion.div>

              {/* Second Image */}
              <motion.div
                className="rounded-lg overflow-hidden w-full md:w-[351px] md:h-[319px] mt-4 md:mt-0"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/images/work/rangsutra/women-1.png"
                  alt="Illustration 2"
                  width={351}
                  height={319}
                  className="object-contain w-full h-full md:ml-auto"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process & Key Points Section */}
        <section className="flex items-center justify-center px-4 md:px-8 py-12 h-auto md:h-[534px]">
          <motion.div
            className="max-w-xl md:max-w-3xl w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
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
                  We created unique strategies for each social media channel,
                  ensuring the brand stayed consistent and engaging.
                </span>
              </li>

              {/* Key Point 2 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Campaign Strategy:{" "}
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  We built campaigns and aligned them across different platforms
                  to maximize reach and impact.
                </span>
              </li>

              {/* Key Point 3 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Reporting:{" "}
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  We prepared monthly reports to track performance and used them
                  to optimize content for better results.
                </span>
              </li>
            </ul>
          </motion.div>
        </section>

        {/* Centered Image Section */}
        <section className="bg-[#9F3A3D] flex items-center justify-center h-[400px] px-4 md:px-8">
          <div className="relative w-[374px] h-[261px]">
            <Image
              src="/images/work/rangsutra/handloom.png"
              alt="handloom Illustration"
              width={374}
              height={261}
              className="object-contain w-full h-full"
            />
          </div>
        </section>

        {/* challenges */}
        <section className="flex items-center justify-center px-4 md:px-8 py-12 h-auto md:h-[534px]">
          <motion.div
            className="max-w-xl md:max-w-3xl w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Section Title */}
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 text-center md:text-left">
              Challenges
            </h2>

            {/* Key Points List */}
            <ul className="space-y-4 md:space-y-6">
              {/* Key Point 1 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Maintaining Consistency:
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Ensuring unified brand messaging across various social media
                  platforms, each catering to different audiences and content
                  formats.{" "}
                </span>
              </li>

              {/* Key Point 2 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Balancing Goals:{" "}
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Creating engaging content for brand awareness while optimising
                  campaigns to generate leads effectively.{" "}
                </span>
              </li>

              {/* Key Point 3 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Adapting Content:{" "}
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Continuously refining and optimising content based on monthly
                  performance reports while meeting tight deadlines.
                  registrations.{" "}
                </span>
              </li>
            </ul>
          </motion.div>
        </section>

        {/* Wins Section */}
        <section className="flex items-start justify-center px-6 md:px-12 lg:px-32 py-6 bg-white">
          <motion.div
            className="flex flex-col md:flex-row items-center md:items-start justify-between w-full max-w-screen-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Left Side Image */}
            <div className="w-[232px] h-[182px] flex-shrink-0 mx-auto md:mx-0">
              <Image
                src="/images/work/rangsutra/win.png"
                alt="Wins Illustration"
                width={232}
                height={182}
                className="object-contain w-full h-full"
              />
            </div>

            {/* Right Side Text */}
            <div className="flex flex-col justify-center text-center md:text-left mt-6 md:mt-0 md:ml-8 pt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Wins</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Successfully met deadlines while delivering high-quality,
                optimized content. Enhanced brand visibility and engagement
                across social media, aligning with the client’s goals. Developed
                and executed campaigns that resonated with the target audience,
                driving brand awareness and lead generation.
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

export default rangsutra;
