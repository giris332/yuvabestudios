import { motion } from "framer-motion";
import Image from "next/image";

const WhatWeDo = () => {
  const services = [
    {
      icon: "/images/about/icon1.png",
      title: "Creatives & Design",
      description:
        "Bringing brands to life with bold graphics, sharp copywriting, and slick UI/UX.",
    },
    {
      icon: "/images/about/icon2.png",
      title: "Marketing & Campaigns",
      description:
        "Reaching the right audience through social media, SEO, email campaigns, and PPC ads.",
    },
    {
      icon: "/images/about/icon3.png",
      title: "Strategy & Optimization",
      description:
        "Using data-driven insights to craft smart strategies, optimize conversion rates, and automate marketing.",
    },
    {
      icon: "/images/about/icon2.png",
      title: "Technology & Development",
      description:
        "From web development and CRM management to AI/ML fine-tuning and cloud, we’ve got you covered.",
    },
  ];

  return (
    <section className="w-full h-auto px-6 py-8 sm:px-16 sm:py-6 flex flex-col justify-between items-start bg-white bg-[url('/images/about/we.svg')] bg-cover bg-center">
      {/* Top Text Section */}
      <div className="max-w-4xl text-center md:text-start lg:text-start space-y-4 mb-4 pl-2 lg:pl-16">
        <motion.h2
          className="text-3xl lg:text-5xl font-medium font-primary"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What We Do?
        </motion.h2>
        <motion.p
          className="text-1xl lg:text-3xl text-[#3500F0] font-semibold font-secondary"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          At Yuvabe, We don’t play it safe, We rewrite the rulebook!
        </motion.p>
        <motion.p
          className="text-[#757575]  font-medium"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          We blend cutting-edge tech with deep expertise to help businesses
          evolve and thrive.
           Here’s how we do it:
        </motion.p>
      </div>

      {/* Services Section */}
      <div className="w-full flex justify-center px-2 mt-[120px] mb-8">
        {" "}
        {/* Reduced center space with negative margin */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-start text-start space-y-10 p-4 pr-2 shadow-lg bg-white w-[300px] h-[280px] rounded-xl border border-r border-b border-yellow-500 border-opacity-30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 + index * 0.1 }}
            >
              <Image
                src={service.icon}
                alt={service.title}
                width={50}
                height={50}
              />
              <h3 className="text-lg font-extrabold font-secondary">
                {service.title}
              </h3>
              <p className="text-gray-600 font-secondary font-semibold">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
