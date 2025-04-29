// components/CallToActionSection.js
import { motion } from "framer-motion";

export default function Call() {
  return (
    <div className="flex items-center justify-center w-full h-[243px] bg-[url('/images/svgs/call.svg')] bg-cover bg-center px-4 border-b-2 border-violet-700 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl w-full md:space-x-10 space-y-6 md:space-y-0">
        {/* Text content on the left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left w-full md:w-auto"
        >
          <h2 className="text-3xl font-primary font-medium text-[#371B34] mb-2 md:text-4xl">
            Like What You See?
          </h2>
          <p className="text-lg font-secondary font-bold text-indigo-600 md:text-xl">
            Let’s Make It Happen.
          </p>
        </motion.div>

        {/* Button on the right */}
        <motion.button
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => (window.location.href = "mailto:info@yuvabe.com")}
          className="w-[260px] md:w-[323px] h-[59px] text-lg md:text-2xl border-2 border-purple-600 bg-white px-6 py-3 rounded-lg text-violet-600 font-primary font-semibold hover:bg-purple-600 hover:text-white transition"
        >
          Book a Discovery Call
        </motion.button>
      </div>
    </div>
  );
}
