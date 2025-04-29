import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import UseIsMobile from "../hooks/UseIsMobile";

const workData = {
  "AI & Machine Learning": [
    {
      title: "Computer Vision",
      description: "Image Analysis, Object Detection, Facial Recognition.",
      icon: "/images/icons/ai/icon1.png",
    },
    {
      title: "Speech Solutions",
      description: "Voice recognition, transcription, sentiment analysis.",
      icon: "/images/icons/ai/icon5.png",
    },
    {
      title: "Data Management",
      description: "Data curation, labeling, Processing, Visualization",
      icon: "/images/icons/ai/icon4.png",
    },
    {
      title: "NLP",
      description: "Text Generation, Chatbots, Language Modeling.",
      icon: "/images/icons/ai/icon2.png",
    },
    {
      title: "Development",
      description:
        "Front End(Vue.js, React/Next.js), Backend End(Python, Django/Flask, FastAPI, SQL/NoSQL)",
      icon: "/images/icons/ai/icon3.png",
    },
    {
      title: "Advanced AI/ML",
      description:
        "Gen AI, Predictive Analytics Automation, Recommendation Systems.",
      icon: "/images/icons/ai/icon6.png",
    },
    {
      title: "Infrastructure",
      description: "AWS/GCP, Git Integration.",
      icon: "/images/icons/ai/icon6.png",
    },
  ],
  "Digital Marketing": [
    {
      title: "UI/UX Design",
      description:
        "Prototyping (Figma, Adobe XD), User Flows and Accessibility Design, Usability Testing.",
      icon: "/images/icons/dm/icon1.png",
    },
    {
      title: "Graphic Design",
      description:
        "Branding and Identity, Digital and Print Media Design, Marketing Collateral.",
      icon: "/images/icons/dm/icon2.png",
    },
    {
      title: "Web Design",
      description:
        "Responsive Design (Mobile-First), Interaction Design (Animations, Transitions), Design Systems.",
      icon: "/images/icons/dm/icon3.png",
    },
    {
      title: "Motion Design",
      description:
        "Video Editing (Premiere Pro, After Effects), Motion Graphics and Lottie Animations.",
      icon: "/images/icons/dm/icon4.png",
    },
    {
      title: "Visual Design",
      description:
        "Colour Theory, Typography, Iconography, Data Visualization.",
      icon: "/images/icons/dm/icon5.png",
    },
    {
      title: "Product Design",
      description:
        "Design Thinking and Prototyping, Collaboration with Developers and Marketers.",
      icon: "/images/icons/dm/icon6.png",
    },
  ],
  "Design & Brand": [
    {
      title: "Creative & Design:",
      description:
        "Content Creation, Copywriting, Graphic Design, Video Editing",
      icon: "/images/icons/design/icon1.png",
    },
    {
      title: "Marketing & Campaigns:",
      description:
        "Social Media Management, SEO, SEM, PPC, Email Marketing, Influencer & Affiliate Marketing.",
      icon: "/images/icons/design/icon2.png",
    },
    {
      title: "Strategy & Optimization:",
      description:
        "Brand Strategy, Data Analysis, Conversion Rate Optimization (CRO), and Marketing Automation.",
      icon: "/images/icons/design/icon3.png",
    },
    {
      title: "Technology & Management:",
      description:
        "Web Development, Project Management, CRM Management, Analytics & Reporting.",

      icon: "/images/icons/design/icon4.png",
    },
  ],

  "Market Research": [
    {
      title: "Consumer Insight:",
      description:
        "Consumer Behaviour Analysis, Discourse Segmentation, Semiotics, Custom Reports Analysis.",
      icon: "/images/icons/mr/icon1.png",
    },
    {
      title: "Market Trend Analysis:",
      description:
        "Creative Generation, Identifying Emerging Trends, Trend Tracking, Trend Evaluation.",
      icon: "/images/icons/mr/icon2.png",
    },
    {
      title: "Brand Competitive Landscape:",
      description: "Brand positioning, Brand Health, Brand Strategy.",
      icon: "/images/icons/mr/icon3.png",
    },
    {
      title: "Financial Analysis:",
      description:
        "Investment Memo, Investment Thesis, Database Curation, Competitive Analysis, Research & Content Curation.",

      icon: "/images/icons/mr/icon4.png",
    },
  ],
};

// Service Card Component with animation
const ServiceCard = ({ title, icon, isActive, onClick, x, y }) => {
  return (
    <motion.div
      className={`absolute flex flex-col items-center justify-center w-[80px] h-[75px] sm:w-[132px] sm:h-[115px] rounded-lg shadow-lg cursor-pointer transition-all 
                  ${
                    isActive
                      ? "bg-white text-purple-800 border border-purple-500 shadow-[0_0_15px_4px_rgba(128,0,255,0.5)]"
                      : "bg-[#f5f3fc] text-black"
                  }`}
      style={{ left: x, top: y }}
      onClick={onClick}
      initial={{ scale: 1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center justify-center text-center">
        <Image
          src={icon}
          alt={title}
          width={30}
          height={50}
          className="sm:w-[20px] sm:h-[20px] md:w-[50px] md:h-[50px]"
        />
        <h3 className="text-xs sm:text-sm font-medium mt-2">{title}</h3>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [activeService, setActiveService] = useState("Digital Marketing");

  // Default positions for each service card
  const defaultPositions = {
    desktop: {
      "AI & Machine Learning": { x: "35%", y: "-10%" },
      "Digital Marketing": { x: "80%", y: "35%" },
      "Design & Brand": { x: "35%", y: "80%" },
      "Market Research": { x: "-15%", y: "35%" },
    },
    mobile: {
      "AI & Machine Learning": { x: "12%", y: "40%" },
      "Design & Brand": { x: "68%", y: "40%" },
      "Digital Marketing": { x: "40%", y: "63%" },
      "Market Research": { x: "40%", y: "15%" },
    },
  };

  // Handle card click logic: swapping positions
  const handleCardClick = (clickedService) => {
    setActiveService(clickedService);
  };

  // Swapping the positions based on active service
  const getCardPosition = (service) => {
    const isMobile = UseIsMobile();
    const positions = isMobile
      ? defaultPositions.mobile
      : defaultPositions.desktop;

    const swapLogic = {
      "AI & Machine Learning": {
        "AI & Machine Learning": positions["Digital Marketing"],
        "Digital Marketing": positions["AI & Machine Learning"],
        "Design & Brand": positions["Market Research"],
        "Market Research": positions["Design & Brand"],
      },
      "Digital Marketing": {
        "AI & Machine Learning": positions["AI & Machine Learning"],
        "Digital Marketing": positions["Digital Marketing"],
        "Design & Brand": positions["Design & Brand"],
        "Market Research": positions["Market Research"],
      },
      "Design & Brand": {
        "AI & Machine Learning": positions["Market Research"],
        "Digital Marketing": positions["AI & Machine Learning"],
        "Design & Brand": positions["Digital Marketing"],
        "Market Research": positions["Design & Brand"],
      },
      "Market Research": {
        "AI & Machine Learning": positions["Design & Brand"],
        "Digital Marketing": positions["Market Research"],
        "Design & Brand": positions["AI & Machine Learning"],
        "Market Research": positions["Digital Marketing"],
      },
    };

    return swapLogic[activeService][service] || positions[service];
  };

  return (
    <section className="px-4 py-12 mb-12 h-auto bg-white flex flex-col items-center overflow-hidden">
      {/* Heading Section with Animation */}
      <motion.div
        className="text-center sm:mb-12 mb-0 py-10 sm:py-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl lg:text-5xl font-medium text-[#371B34]">
          Our Services
        </h2>
        <p className="font-secondary font-medium text-lg text-gray-600 mt-2">
          We have a{" "}
          <span className="text-violet-500">incredibly talented </span>team with
          a <span className="text-violet-500">incredibly diverse </span> skill
          set.{" "}
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col lg:flex-row items-center lg:items-start w-full lg:justify-center gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Section: Central Circle and Clickable Cards with Animation */}
        <div className="relative lg:w-1/2  items-center justify-center mb-12 pl-24 lg:mb-0 hidden sm:block">
          <motion.div
            className="relative flex items-center justify-center w-[250px] sm:w-[298px] lg:w-[398.78px] h-[250px] sm:h-[298px] lg:h-[389.78px] rounded-full border border-purple-500 font-semibold font-secondary"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/images/logo/yb.png"
              alt="Logo"
              width={400}
              height={400}
              className="absolute"
            />

            {/* Dots on Circle Line with Gradient Stroke */}
            <div
              className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-white sm:left-[-4%] sm:block hidden md:block"
              style={{ left: "-3%", top: "47%", border: "2px solid white" }}
            ></div>
            <div
              className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-white sm:block hidden "
              style={{ left: "80%", top: "9%", border: "2px solid white" }}
            ></div>

            {/* Service Cards */}
            <ServiceCard
              title="AI & Machine Learning"
              icon="/images/icons/ai.png"
              isActive={activeService === "AI & Machine Learning"}
              onClick={() => handleCardClick("AI & Machine Learning")}
              x={getCardPosition("AI & Machine Learning").x}
              y={getCardPosition("AI & Machine Learning").y}
            />
            <ServiceCard
              title="Design & Brand"
              icon="/images/icons/market.png"
              isActive={activeService === "Digital Marketing"}
              onClick={() => handleCardClick("Digital Marketing")}
              x={getCardPosition("Digital Marketing").x}
              y={getCardPosition("Digital Marketing").y}
            />
            <ServiceCard
              title="Digital Marketing"
              icon="/images/icons/bevolve.png"
              isActive={activeService === "Design & Brand"}
              onClick={() => handleCardClick("Design & Brand")}
              x={getCardPosition("Design & Brand").x}
              y={getCardPosition("Design & Brand").y}
            />
            <ServiceCard
              title="Market Research"
              icon="/images/icons/mr.png"
              isActive={activeService === "Market Research"}
              onClick={() => handleCardClick("Market Research")}
              x={getCardPosition("Market Research").x}
              y={getCardPosition("Market Research").y}
            />
          </motion.div>
        </div>

        {/* Mobile View: Left Section: Central Circle and Clickable Cards with Animation*/}
        <div className="relative lg:w-1/2  items-center justify-center mb-2 lg:mb-0  block sm:hidden">
          <motion.div
            className="relative flex items-center justify-center w-[450px] sm:w-[298px]  lg:w-[398.78px] h-[450px] sm:h-[298px] lg:h-[389.78px] font-semibold font-secondary"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/images/logo/yb.png"
              alt="Logo"
              width={800}
              height={800}
              className="absolute"
            />

            {/* Dots on Circle Line with Gradient Stroke */}
            <div
              className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-white sm:left-[-4%] sm:block hidden md:block"
              style={{ left: "-3%", top: "47%", border: "2px solid white" }}
            ></div>
            <div
              className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-white sm:block hidden "
              style={{ left: "80%", top: "9%", border: "2px solid white" }}
            ></div>

            {/* Service Cards */}
            <ServiceCard
              title="AI & Machine Learning"
              icon="/images/icons/ai.png"
              isActive={activeService === "AI & Machine Learning"}
              onClick={() => handleCardClick("AI & Machine Learning")}
              x={getCardPosition("AI & Machine Learning").x}
              y={getCardPosition("AI & Machine Learning").y}
            />
            <ServiceCard
              title="Digital Marketing"
              icon="/images/icons/market.png"
              isActive={activeService === "Digital Marketing"}
              onClick={() => handleCardClick("Digital Marketing")}
              x={getCardPosition("Digital Marketing").x}
              y={getCardPosition("Digital Marketing").y}
            />
            <ServiceCard
              title="Design & Brand"
              icon="/images/icons/bevolve.png"
              isActive={activeService === "Design & Brand"}
              onClick={() => handleCardClick("Design & Brand")}
              x={getCardPosition("Design & Brand").x}
              y={getCardPosition("Design & Brand").y}
            />
            <ServiceCard
              title="Market Research"
              icon="/images/icons/mr.png"
              isActive={activeService === "Market Research"}
              onClick={() => handleCardClick("Market Research")}
              x={getCardPosition("Market Research").x}
              y={getCardPosition("Market Research").y}
            />
          </motion.div>
        </div>

        {/* Right Section: Work Cards with Animated Entrance */}
        <motion.div
          className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mx-4 lg:mx-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {workData[activeService].map((work, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col justify-between bg-white border border-purple-400 rounded-lg shadow-sm 
                 w-[280px] h-[95px] 
                 sm:w-[320px] sm:h-[120px] 
                 lg:w-[350px] lg:h-[95px] 
                 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Icon in Top-Right Corner */}
              <Image
                src={work.icon}
                alt={work.title}
                width={24}
                height={24}
                className="absolute top-2 right-2 sm:top-3 sm:right-3"
              />

              {/* Card Content */}
              <div className="px-3 py-2 sm:py-3">
                <h3 className="text-[14px] sm:text-[16px] font-semibold text-purple-800">
                  {work.title}
                </h3>
                <p className="text-[12px] sm:text-[12px] text-gray-600 mt-1 sm:mt-2 mb-1 sm:mb-2 ">
                  {work.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
