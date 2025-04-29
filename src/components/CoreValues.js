import { motion } from "framer-motion";
import Image from "next/image";

const CoreValues = () => {
  const coreValues = [
    {
      id: 1,
      title: "Care",
      description: "Building an attitude of care towards the self and the community.",
      icon: "/images/profile/vector3.png", // Replace with your icon path
    },
    {
      id: 2,
      title: "Courage",
      description: "Enabling youth to develop the courage to question the status quo.",
      icon: "/images/profile/vector4.png", // Replace with your icon path
    },
    {
      id: 3,
      title: "Creativity",
      description: "Providing a creative environment that engenders a growth mindset.",
      icon: "/images/profile/vector2.png", // Replace with your icon path
    },
  ];

  return (
    <section className="relative bg-[url('/images/svgs/core.svg')] bg-cover bg-center py-16 overflow-hidden">
      {/* Section title */}
      <h2 className="text-center text-white text-4xl font-primary font-medium mb-12">
        Our Core Values
      </h2>

      {/* Core values cards */}
      <div className="flex flex-col space-y-6 items-center md:flex-row md:justify-center md:space-x-8 md:space-y-0">
        {coreValues.map((value) => (
          <motion.div
            key={value.id}
            className="flex items-center md:flex-col bg-gradient-to-br from-[#764fd0] to-[#794cf0] 
             rounded-2xl w-[90%] max-w-[310px] h-auto p-4 md:w-[288px] md:h-[276px] 
              md:max-w-xs md:p-8 
             border border-white border-opacity-50 backdrop-blur-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: value.id * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Icon Container */}
            <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] flex-shrink-0 md:mb-6 mr-4 md:mr-0">
              <Image
                src={value.icon}
                alt={`${value.title} icon`}
                width={100}
                height={100}
                objectFit="contain"
              />
            </div>

            {/* Text Content */}
            <div className="text-left md:text-center">
              <h3 className="text-white text-[20px] md:text-[32px] font-primary font-medium">
                {value.title}
              </h3>
             <p
  className={`text-white mt-2 md:text-sm font-secondary font-medium 
    leading-tight md:leading-snug 
    text-[clamp(12px,3vw,14px)] 
    w-full md:w-[256px] h-auto md:h-[34px] 
    overflow-hidden whitespace-normal`}
>
  {value.description}
</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;


// className="text-white  w-[256px] h-[34px]  font-secondary font-semibold leading-tight md:leading-snug text-[clamp(10px,2vw,14px)] max-h-[calc(2 * 1.6em)] overflow-hidden whitespace-normal"