import React from 'react';
import Image from 'next/image';

const ClientLogoSlider = () => {
  const logos = [
    { id: 1, src: '/images/logo/logo-1.png', alt: 'Client 1' },
    { id: 2, src: '/images/logo/logo-2.png', alt: 'Client 2' },
    { id: 3, src: '/images/logo/logo-3.png', alt: 'Client 3' },
    { id: 4, src: '/images/logo/logo-4.png', alt: 'Client 4' },
    { id: 5, src: '/images/logo/logo-5.png', alt: 'Client 5' },
    { id: 6, src: '/images/logo/logo-6.png', alt: 'Client 6' },
    { id: 7, src: '/images/logo/logo-7.png', alt: 'Client 7' },
    { id: 8, src: '/images/logo/logo-8.png', alt: 'Client 8' },
    { id: 9, src: '/images/logo/logo-9.png', alt: 'Client 9' },
    { id: 10, src: '/images/logo/logo-10.png', alt: 'Client 10' },
    { id: 11, src: '/images/logo/logo-11.png', alt: 'Client 11' },
    { id: 12, src: '/images/logo/logo-12.png', alt: 'Client 12' },
    { id: 13, src: '/images/logo/logo-13.png', alt: 'Client 13' },
    { id: 14, src: '/images/logo/logo-14.png', alt: 'Client 14' },
  ];

  return (
    <div className="relative overflow-hidden h-[250px] bg-white py-8 border-b-2 border-violet-700">
      <h2 className="text-center text-1xl font-secondary font-semibold mb-6">
        <span className="text-violet-500">Clients</span> We’re Proud to Work With
      </h2>
      <div className="w-full flex overflow-hidden relative mt-14 mb-0">
        {/* Animation container */}
        <div className="flex animate-marquee space-x-[70px] justify-center"> 
          {logos.map((logo) => (
            <Image
              key={logo.id}
              src={logo.src}
              alt={logo.alt}
              className="object-contain"
              width={250}
              height={250} 
            />
          ))}
          {/* Duplicate the logos for seamless scroll */}
          {logos.map((logo) => (
            <Image
              key={`duplicate-${logo.id}`}
              src={logo.src}
              alt={logo.alt}
              className="object-contain"
              width={250} // Increased logo width for duplicated logos
              height={250} // Increased logo height for duplicated logos
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogoSlider;
