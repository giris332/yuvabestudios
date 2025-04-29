import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true when the component mounts on the client
  }, []);

  if (!isClient) {
    return null; // Return nothing or a loading spinner during SSR
  }

  return (
    <footer className="bg-[url('/images/svgs/foot.svg')] bg-cover bg-center text-white py-12 px-8 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
        
        {/* Left Side */}
        <div className="space-y-4 w-full md:w-1/2">
          <motion.h3
            className="text-2xl font-semibold text-yellow-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h3>

          <motion.p
            className="text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            
          >
            sales@yuvabe.com
          </motion.p>
          
            {/* Join Team Card */}
          <motion.div
  className="bg-white text-black w-full md:w-[436px] h-[60px] rounded-md flex justify-between items-center p-4 shadow-lg"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
>
  <span className="font-medium text-sm">Interested in Joining the Team?</span>
  <span className="text-gray-600 text-xs text-right">
    Send Your CV and Portfolio to<br />
    <a
      href="mailto:info@yuvabe.com"
      className="text-black font-bold"
    >
      info@yuvabe.com
    </a>
  </span>
</motion.div>


          {/* Logo */}
          <motion.div
            className="mt-4 pt-8 flex items-center space-x-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image src="/images/profile/logo.png" alt="Yuvabe Studios Logo" width={150} height={150} />
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-16 space-y-4 md:space-y-0">
          {/* Main Links */}
          <div className="flex flex-col space-y-2 text-center md:text-left">
            <Link href="/" passHref>
              <motion.a
                className="hover:text-gray-300 cursor-pointer transition underline underline-offset-1"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                Home
              </motion.a>
            </Link>
            <Link href="/work" passHref>
              <motion.a
                className="hover:text-gray-300 cursor-pointer transition underline underline-offset-1"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                Work
              </motion.a>
            </Link>
            <Link href="/about" passHref>
              <motion.a
                className="hover:text-gray-300 cursor-pointer transition underline underline-offset-1"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                About
              </motion.a>
            </Link>
            <Link href="/career" passHref>
              <motion.a
                className="hover:text-gray-300 cursor-pointer transition underline underline-offset-1"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                Careers
              </motion.a>
            </Link>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col space-y-2 text-center md:text-left">
            <motion.a
              href="https://www.instagram.com/yuvabe.auroville/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 cursor-pointer transition underline underline-offset-1"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Instagram
            </motion.a>
            <motion.a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 cursor-pointer transition underline underline-offset-2"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              X
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/company/yuvabe/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 cursor-pointer transition underline underline-offset-1"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="https://www.youtube.com/@yuvabe.auroville"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 cursor-pointer transition underline underline-offset-1"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              YouTube
            </motion.a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <motion.div
  className="text-sm text-black mt-8 md:mt-0 text-center md:text-right"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>
 Copyright &copy; {new Date().getFullYear()} Yuvabe | All rights reserved
</motion.div>

    </footer>
  );
}
