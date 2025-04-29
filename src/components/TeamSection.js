import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teamMembers = [
  {
    name: "Priya",
    role: "Head Of Digital Marketing",
    category: "Digital Marketing",
    imagePath: "/images/team/priya.png",
  },
  {
    name: "Vicky",
    role: "UI/UX & Graphic Designer",
    category: "Digital Marketing",
    imagePath: "/images/team/vicky.png",
  },
  {
    name: "Sagar",
    role: "UI/UX Designer,Web Developer",
    category: "Digital Marketing",
    imagePath: "/images/team/sagar.png",
  },
  {
    name: "Logasundari",
    role: "Digital Marketing Associate",
    category: "Digital Marketing",
    imagePath: "/images/team/logi.png",
  },
  {
    name: "Anjali",
    role: "Digital Marketing Associate",
    category: "Digital Marketing",
    imagePath: "/images/team/anjali.png",
  },
  // {
  //   name: "Sanjeevika",
  //   role: "Digital Marketing Associate",
  //   category: "Digital Marketing",
  //   imagePath: "/images/team/sanjeevi.png",
  // },
  {
    name: "Hemapriya",
    role: "Copywriting and Branding",
    category: "Digital Marketing",
    imagePath: "/images/team/hema.png",
  },
  {
    name: "Vanchi",
    role: "Video Editor, Motion Designer",
    category: "Digital Marketing",
    imagePath: "/images/team/vanchi.png",
  },
  {
    name: "Roopan",
    role: "Web Application Developer",
    category: "Digital Marketing",
    imagePath: "/images/team/roopan.png",
  },
  {
    name: "Anupama",
    role: "AI/ML Mentor",
    category: "AI/ML",
    imagePath: "/images/team/anupama.png",
  },
  {
    name: "Vimal",
    role: "AI/ML Mentor",
    category: "AI/ML",
    imagePath: "/images/team/vimal.png",
  },
  {
    name: "Keerthana",
    role: "AI/ML Developer",
    category: "AI/ML",
    imagePath: "/images/team/kee.png",
  },
  {
    name: "Dhanush",
    role: "AI/ML Developer",
    category: "AI/ML",
    imagePath: "/images/team/dhanush.png",
  },
  {
    name: "Thamarai Kannan",
    role: "AI/ML Developer",
    category: "AI/ML",
    imagePath: "/images/team/mem7.png",
  },
  {
    name: "Eyuvaraj",
    role: "AI/ML Developer",
    category: "AI/ML",
    imagePath: "/images/team/mem2.png",
  },
  {
    name: "Girisankar",
    role: "AI/ML Intern",
    category: "AI/ML",
    imagePath: "/images/team/mem3.png",
  },
  {
    name: "Arun Kumar",
    role: "AI/ML Intern",
    category: "AI/ML",
    imagePath: "/images/team/mem4.png",
  },
  {
    name: "Shri Jayaram",
    role: "AI/ML Intern",
    category: "AI/ML",
    imagePath: "/images/team/mem5.png",
  },
  {
    name: "Abinesh Kumar",
    role: "AI/ML Intern",
    category: "AI/ML",
    imagePath: "/images/team/abi.png",
  },
  {
    name: "Hari Prasath",
    role: "AI/ML Intern",
    category: "AI/ML",
    imagePath: "/images/team/mem6.png",
  },
  {
    name: "Bhuvana",
    role: "Market Research Lead",
    category: "Market Research",
    imagePath: "/images/team/bhuvana.png",
  },
  {
    name: "Vasantharaj",
    role: "Senior Market Researcher",
    category: "Market Research",
    imagePath: "/images/team/vasanth.png",
  },
  {
    name: "Abilash",
    role: "Market Research Lead",
    category: "Market Research",
    imagePath: "/images/team/abilash.png",
  },
  {
    name: "Hariharan",
    role: "Market Research Lead",
    category: "Market Research",
    imagePath: "/images/team/hari.png",
  },
  {
    name: "Shimalini",
    role: "Senior Market Researcher",
    category: "Market Research",
    imagePath: "/images/team/shimalini.png",
  },
  {
    name: "Sharat Kumar",
    role: "Senior Market Researcher",
    category: "Market Research",
    imagePath: "/images/team/sharat.png",
  },
  {
    name: "Poovendiran",
    role: "Senior Market Researcher",
    category: "Market Research",
    imagePath: "/images/team/poove.png",
  },
  {
    name: "Praveen",
    role: "Senior Market Researcher",
    category: "Market Research",
    imagePath: "/images/team/praveen.png",
  },
  {
    name: "Manivel",
    role: "Market Research Analyst",
    category: "Market Research",
    imagePath: "/images/team/mani.png",
  },
  {
    name: "Anishvathi",
    role: "Market Research Analyst",
    category: "Market Research",
    imagePath: "/images/team/anishvathi.png",
  },
  {
    name: "Vinodhini",
    role: "Market Research Analyst",
    category: "Market Research",
    imagePath: "/images/team/vinodhini.png",
  },
  {
    name: "Arthi",
    role: "Market Research Analyst",
    category: "Market Research",
    imagePath: "/images/team/arthi.png",
  },
  {
    name: "Sindhu",
    role: "Market Research Analyst",
    category: "Market Research",
    imagePath: "/images/team/sindhu.png",
  },
  {
    name: "Sarguru",
    role: "Market Research Analyst",
    category: "Market Research",
    imagePath: "/images/team/guru.png",
  },
  {
    name: "Rajeswari",
    role: "Market Research Analyst",
    category: "Market Research",
    imagePath: "/images/team/raji.png",
  },
  {
    name: "Velmurugan",
    role: "Market Research Analyst",
    category: "Market Research",
    imagePath: "/images/team/velu.png",
  },
  {
    name: "Valantina",
    role: "Market Research Analyst",
    category: "Market Research",
    imagePath: "/images/team/valantina.png",
  },
  {
    name: "Niraimathy",
    role: "Market Research Analyst",
    category: "Market Research",
    imagePath: "/images/team/niraimathy.png",
  },
  {
    name: "Selvi",
    role: "Financial Market Research Analyst",
    category: "Market Research",
    imagePath: "/images/team/selvi.png",
  },
  {
    name: "Vigneshwaran",
    role: "Financial Market Research Analyst",
    category: "Market Research",
    imagePath: "/images/team/vignesh.png",
  },
  {
    name: "Sundhranandhan",
    role: "Backend Developer",
    category: "Market Research",
    imagePath: "/images/team/sundhar.png",
  },
  {
    name: "Kalaiarasi",
    role: "Data Engineer & Backend Developer",
    category: "Market Research",
    imagePath: "/images/team/kalai.png",
  },
  {
    name: "Arjun",
    role: "Backend Developer",
    category: "Market Research",
    imagePath: "/images/team/arjun.png",
  },
  {
    name: "Nagachandiran",
    role: "Data Engineer",
    category: "Market Research",
    imagePath: "/images/team/naga.png",
  },
  {
    name: "Hariharan",
    role: "Data Engineer",
    category: "Market Research",
    imagePath: "/images/team/harii.png",
  },
];

export default function TeamSection() {
  const digitalMarketingTeam = teamMembers.filter(
    (member) => member.category === "Digital Marketing"
  );
  const aiMlTeam = teamMembers.filter((member) => member.category === "AI/ML");
  const marketResearchTeam = teamMembers.filter(
    (member) => member.category === "Market Research"
  );

  // Slider settings for Digital Marketing
  const digitalSettings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 464,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  };

  const aiMlSettings = {
    ...digitalSettings,
    rtl: true,
  };

  const marketResearchSettings = {
    ...digitalSettings,
    rtl: false,
  };

  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-5xl font-medium text-gray-800">
          Our Incredible Team
        </h2>
        <p className="text-2xl font-secondary font-semibold text-[#3500F0] mt-2">
          Meet the Creative Minds Behind the Magic
        </p>
      </div>

      {/* Digital Marketing Team Carousel */}
      <div className="relative w-full mb-12">
        <div className="absolute left-[-10px] top-[50%] w-[280px] h-[320px] transform -translate-y-1/2 bg-purple-300/50 border-violet-200 rounded-xl shadow-lg p-6 text-white font-medium text-4xl flex items-center justify-center z-20 backdrop-blur-lg border border-purple-200/50 hidden lg:flex">
          Digital <br />
          Marketing
        </div>

        <Slider {...digitalSettings} className="overflow-hidden">
          {digitalMarketingTeam.map((member, index) => (
            <div key={index} className="px-2 py-6">
              <div
                className="bg-white rounded-lg shadow-lg text-left flex flex-col justify-between"
                style={{ width: "208px", height: "312px" }}
              >
                <div className="rounded-t-lg overflow-hidden h-[70%]">
                  <Image
                    src={member.imagePath}
                    alt={member.name}
                    width={208}
                    height={218}
                    className="object-cover h-full w-full"
                    quality={100}
                  />
                </div>
                <div className="px-4 py-3">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* AI/ML Team Carousel */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute right-[-10px] top-[50%] w-[280px] h-[320px] transform -translate-y-1/2 bg-[#F04E2733]/20 rounded-xl shadow-lg p-6 text-white font-medium text-4xl  items-center justify-center z-20 backdrop-blur-lg border border-orange-200/50 hidden lg:flex">
          AI/ML
        </div>

        <Slider {...aiMlSettings} className="overflow-hidden">
          {aiMlTeam.map((member, index) => (
            <div key={index} className="px-2 py-6">
              <div
                className="bg-white rounded-lg shadow-lg text-left flex flex-col justify-between"
                style={{ width: "208px", height: "312px" }}
              >
                <div className="rounded-t-lg overflow-hidden h-[70%]">
                  <Image
                    src={member.imagePath}
                    alt={member.name}
                    width={208}
                    height={218}
                    className="object-cover h-full w-full"
                    quality={100}
                  />
                </div>
                <div className="px-4 py-3">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Market Research Team Carousel */}
      <div className="relative w-full mb-12 mt-12">
        <div className="absolute left-[-10px] top-[50%] w-[280px] h-[320px] transform -translate-y-1/2 bg-green-300/50 border-green-200 rounded-xl shadow-lg p-6 text-white font-medium text-4xl flex items-center justify-center z-20 backdrop-blur-lg border border-green-200/50 hidden lg:flex">
          Market <br />
          Research
        </div>

        <Slider {...marketResearchSettings} className="overflow-hidden">
          {marketResearchTeam.map((member, index) => (
            <div key={index} className="px-2 py-6">
              <div
                className="bg-white rounded-lg shadow-lg text-left flex flex-col justify-between"
                style={{ width: "208px", height: "312px" }}
              >
                <div className="rounded-t-lg overflow-hidden h-[70%]">
                  <Image
                    src={member.imagePath}
                    alt={member.name}
                    width={208}
                    height={218}
                    className="object-cover h-full w-full"
                    quality={100}
                  />
                </div>
                <div className="px-4 py-3">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
