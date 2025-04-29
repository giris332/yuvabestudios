import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <motion.section
      className="relative h-[268px] w-full sm:h-[300px] lg:h-[350px] flex items-center justify-center bg-[url('/images/svgs/why.svg')] bg-cover bg-center overflow-hidden"
    >
      {/* Text Content */}
      <div className="text-center z-10 px-8 lg:px-32">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-secondary text-yellow-500 mb-4">
          Why Choose Us?
        </h2>
        <p className="text-white font-secondary max-w-[90%] sm:max-w-[80%] lg:max-w-[100%] mx-auto leading-relaxed text-xs sm:text-lg md:text-xl tracking-widest ">
          Well, for starters, we&apos;re fueled by the unique magic of <strong>Auroville,</strong> where nature, innovation, 
          and sustainable living collide. This one-of-a-kind community shapes how we work and drives us 
          to collaborate, innovate, and deliver cutting-edge yet meaningful work. Let&apos;s break barriers 
          and make waves—together!
        </p>
      </div>
    </motion.section>
  );
}
