import { motion } from "framer-motion";
import Image from "next/image"; 

export default function ExpertiseSection() {
  return (
    <section className="relative w-full bg-white p-8 ">
  {/* Section Title */}
  <div className="text-left mb-16 pl-6 sm:pl-12 mt-10">
    <h2 className=" sm:text-5xl text-3xl font-medium font-primary text-gray-800 pl-0 sm:pl-14">Our Expertise Is Diverse</h2>
    <p className="text-xl sm:text-2xl font-secondary font-semibold text-[#3500F0] mt-2 pl-0 sm:pl-14">The Tools to Transform Your Business</p>
  </div>

  {/* Card Layout */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto max-w-screen-xl px-4 relative isolate">
    {/* Row 1 */}
    <div className="relative">
      <Image
        src="/images/logo/line1.png"
        alt="Connection between Card 1 and Card 2"
        width={340}
        height={100}
        className="absolute top-[-80px] left-[53%] hidden md:block z-[-1]" 
      />
      <ExpertiseCard
        title="Content Creation"
        category="Design & Marketing"
        details="Copywriting, Graphic Design, Video Editing, UI/UX"
        className="border border-violet-600"
      />
    </div>

    <div className="relative">
      <Image
        src="/images/logo/line2.png"
        alt="Connection between Card 1 and Card 4"
        width={200}
        height={100}
        className="absolute top-[160px] left-[-90%] hidden md:block z-[-1]" 
      />
      <ExpertiseCard
        title="Marketing Campaigns"
        category="Design & Marketing"
        details="Social Media, SEO, PPC, Email Marketing, Influencer & Affiliate Marketing"
        className="border border-violet-600"
      />
    </div>

    <div className="relative">
      <Image
        src="/images/logo/line3.png"
        alt="Connection next to Card 4"
        width={200}
        height={100}
        className="absolute top-[360px] left-[-150%] hidden md:block z-[-1]"
      />
      <ExpertiseCard
        title="Project Management"
        category="Analytics & Management"
        details="Web Development, CRM Management, Analytics & Reporting"
        className="border border-blue-600"
      />
    </div>

    {/* Row 2 with central gap */}
    <div className="relative">
      <Image
        src="/images/logo/line4.png"
        alt="Connection left of Card 6"
        width={200}
        height={100}
        className="absolute top-[calc(50%+250px)] left-[188%] hidden md:block z-[-1]"
      />
      <ExpertiseCard
        title="Strategy & Optimization"
        category="Design & Marketing"
        details="Brand Strategy, Data Analysis, CRO, Marketing Automation"
        className="border border-violet-600"
      />
    </div>
    <div className="col-span-1 sm:col-span-0"></div>
    <div className="relative">
      <Image
        src="/images/logo/line5.png"
        alt="Connection between Card 8 and Card 9"
        width={300}
        height={2}
        className="absolute top-[calc(40%)] left-[-55%] hidden md:block z-[-1]"
      />
      <ExpertiseCard
        title="Marketing Campaigns"
        category="AI/ML & Development"
        details="Social Media, SEO, PPC, Email Marketing, Influencer & Affiliate Marketing"
        className="border border-red-600"
      />
    </div>

    {/* Row 3 with central gap */}
    <div className="col-span-1 sm:col-span-0"></div>
    <div className="relative">
      <Image
        src="/images/logo/line6.png"
        alt="Connection above Card 8"
        width={80}
        height={2}
        className="absolute top-[calc(-50%)] left-[22%] hidden md:block z-[-1]"
      />
      <ExpertiseCard
        title="Content Creation"
        category="AI/ML & Development"
        details="Copywriting, Graphic Design, Video Editing, UI/UX"
        className="border border-red-600"
      />
    </div>

    <div className="relative">
      <Image
        src="/images/logo/blue.png"
        alt="Connection above Card 9"
        width={80}
        height={2}
        className="absolute lg:top-[calc(-255%)] lg:left-[10%] hidden md:block z-[-1]" 
      />
      <ExpertiseCard
        title="Strategy & Optimization"
        category="AI/ML & Development"
        details="Brand Strategy, Data Analysis, CRO, Marketing Automation"
        className="border border-red-600"
      />
    </div>
  </div>

    </section>

  );
}

// Card Component with additional inner gap
function ExpertiseCard({ title, category, details, className }) {
  return (
    <motion.div
      className={`w-full sm:w-[344px] h-[246px] p-4 bg-white bg-opacity-20 backdrop-blur-lg shadow-md rounded-lg border ${className}`}
      whileHover={{ scale: 1.05 }}
    >
      {/* Category with background and border */}
      <span
        className={`inline-block px-2 py-1 rounded text-sm font-semibold font-primary mb-4 ${
          category === "AI/ML & Development"
            ? "bg-red-100 text-red-600 border border-red-600 "
            : category === "Design & Marketing"
            ? "bg-violet-100 text-violet-600 border border-violet-600"
            : "bg-blue-100 text-blue-600 border border-blue-600"
        }`}
      >
        {category}
      </span>
      {/* Title without background or border */}
      <h3 className="text-lg sm:text-xl font-primary font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 font-secondary mt-2">{details}</p>
    </motion.div>
  );
}
