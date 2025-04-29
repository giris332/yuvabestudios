import { motion } from "framer-motion";
import Image from "next/image";
import globeImage from "../../public/images/about/hero.gif";

export default function AboutHeroSection() {
  const logos = [
    { id: 1, src: "/images/logo/logo-1.png", alt: "Client 1" },
    { id: 2, src: "/images/logo/logo-2.png", alt: "Client 2" },
    { id: 3, src: "/images/logo/logo-3.png", alt: "Client 3" },
    { id: 4, src: "/images/logo/logo-4.png", alt: "Client 4" },
    { id: 5, src: "/images/logo/logo-5.png", alt: "Client 5" },
    { id: 6, src: "/images/logo/logo-6.png", alt: "Client 6" },
    { id: 7, src: "/images/logo/logo-7.png", alt: "Client 7" },
    { id: 8, src: "/images/logo/logo-8.png", alt: "Client 8" },
    { id: 9, src: "/images/logo/logo-9.png", alt: "Client 9" },
    { id: 10, src: "/images/logo/logo-10.png", alt: "Client 10" },
    { id: 11, src: '/images/logo/logo-11.png', alt: 'Client 11' },
    { id: 12, src: '/images/logo/logo-12.png', alt: 'Client 12' },
    { id: 13, src: '/images/logo/logo-13.png', alt: 'Client 13' },
    { id: 14, src: '/images/logo/logo-14.png', alt: 'Client 14' },
  ];

  return (
    <div>
      {/* About Us Section */}
      <div className="relative overflow-hidden py-24 px-6 lg:px-24 flex flex-col lg:flex-row items-center bg-white bg-[url('/images/about/bg.svg')] bg-cover bg-center">
        <motion.div
          className="absolute inset-0 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Left Text Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left lg:w-1/2 relative z-20"
        >
          <h2 className="text-5xl font-medium font-primary text-[#FFCA2D] mb-6 px-6 lg:px-12">
            Who We Are?
          </h2>
          <p className="text-white text-lg mb-6 font-secondary font-medium px-4 lg:px-12">
            At Yuvabe, we&apos;re not just a digital agency—we&apos;re a
            movement! Based in Auroville, a community known for innovation and
            sustainable living, we&apos;ve woven these values into everything we
            do.
          </p>
          <p className="text-white text-lg mb-6 font-secondary font-medium px-4 lg:px-12">
            Our team is a vibrant mix of young innovators and seasoned pros,
            passionate about turning today&apos;s challenges into
            tomorrow&apos;s solutions.
          </p>
        </motion.div>

        {/* Right Globe Image */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative lg:w-1/2 w-full flex justify-center lg:justify-center mt-6 lg:mt-0 z-20"
          onContextMenu={(e) => e.preventDefault()}
        >
          <Image
            src={globeImage}
            alt="Globe illustration"
            width={500}
            height={500}
            priority
          />
        </motion.div>
      </div>

      {/* Who We Are Section */}
      <motion.div
        className="bg-white py-12  w-full overflow-hidden  text-center lg:text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Client Logo Slider */}
        <div className="relative  overflow-hidden h-[250px] bg-white py-8 ">
          <div className="w-full flex overflow-hidden relative mt-6">
            <div className="flex animate-marquee space-x-10">
              {logos.map((logo) => (
                <Image
                  key={logo.id}
                  src={logo.src}
                  alt={logo.alt}
                  className="object-contain"
                  width={150}
                  height={150}
                />
              ))}
              {logos.map((logo) => (
                <Image
                  key={`duplicate-${logo.id}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="object-contain"
                  width={150}
                  height={150}
                />
              ))}
            </div>
          </div>
          <h2 className="text-center sm:text-lg md:text-xl lg:text-2xl font-secondary font-semibold mt-12 ">
            <span className="text-violet-500">Clients</span> We&apos;re Proud to
            Work With
          </h2>
        </div>
      </motion.div>

      {/* Our Mission */}
      <motion.div
        className="flex justify-center items-center py-6 px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="lg:w-full sm:w-[370px] sm:h-[377px] max-w-[1250px] lg:h-[250px] bg-gradient-to-l from-[#5829C7] to-[#5829C7] rounded-2xl shadow-lg p-10 text-start flex flex-col justify-center items-center">
          <motion.h2
            className="text-2xl sm:text-4xl font-primary font-semibold text-yellow-400 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="text-white sm:text-base lg:text-xl font-secondary font-light leading-normal sm:leading-relaxed tracking-wide	"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Is to bridge the gap between old-school and new-age strategies,
            pushing boundaries and unlocking fresh opportunities. We deliver
            future-focused solutions that are both creative and human-centered,
            helping clients grow and empowering our community with innovative,
            thoughtful ideas.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
