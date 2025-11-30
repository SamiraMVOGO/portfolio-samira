"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const certifications = [
  {
    src: "/images/Certifications/Screenshot From 2025-11-28 14-52-43.png",
    alt: "Certification 1",
  },
  {
    src: "/images/Certifications/Screenshot From 2025-11-28 14-52-55.png",
    alt: "Certification 2",
  },
  {
    src: "/images/Certifications/Screenshot From 2025-11-28 14-53-02.png",
    alt: "Certification 3",
  },
  {
    src: "/images/Certifications/Screenshot From 2025-11-28 14-53-07.png",
    alt: "Certification 4",
  },
  {
    src: "/images/Certifications/Screenshot From 2025-11-28 14-53-14.png",
    alt: "Certification 5",
  },
  {
    src: "/images/Certifications/Screenshot From 2025-11-28 14-53-20.png",
    alt: "Certification 6",
  },
  {
    src: "/images/Certifications/Screenshot From 2025-11-28 14-59-33.png",
    alt: "Certification 28",
  },

  {
    src: "/images/Certifications/Screenshot From 2025-11-30 10-37-23.png",
    alt: "Certification 28",
  },
    {
    src: "/images/Certifications/Screenshot From 2025-11-28 14-58-47.png",
    alt: "Certification 25",
  },
   {
    src: "/images/Certifications/Screenshot From 2025-11-30 10-37-46.png",
    alt: "Certification 28",
  },
  {
    src: "/images/Certifications/Screenshot From 2025-11-28 14-54-00.png",
    alt: "Certification 7",
  },
  {
    src: "/images/Certifications/Screenshot From 2025-11-28 14-55-35.png",
    alt: "Certification 8",
  },
  {
    src: "/images/Certifications/Screenshot From 2025-11-28 14-55-45.png",
    alt: "Certification 9",
  },
  {
    src: "/images/Certifications/Screenshot From 2025-11-28 14-55-52.png",
    alt: "Certification 10",
  },
  {
    src: "/images/Certifications/Screenshot From 2025-11-28 22-12-39.png",
    alt: "Certification 11",
  },
  {
    src: "/images/Certifications/Screenshot From 2025-11-28 22-20-55.png",
    alt: "Certification 11",
  },
 
  {
    src: "/images/Certifications/Screenshot From 2025-11-28 14-56-10.png",
    alt: "Certification 13",
  },
  {
    src: "/images/Certifications/Screenshot From 2025-11-28 21-33-33.png",
    alt: "Certification 14",
  },
  {
    src: "/images/Certifications/Screenshot From 2025-11-28 14-56-21.png",
    alt: "Certification 14",
  },
  {
    src: "/images/Certifications/Screenshot From 2025-11-28 14-56-27.png",
    alt: "Certification 15",
  },
  {
    src: "/images/Certifications/Screenshot From 2025-11-28 14-56-32.png",
    alt: "Certification 16",
  },
  {
    src: "/images/Certifications/Screenshot From 2025-11-28 14-56-39.png",
    alt: "Certification 17",
  },
  {
    src: "/images/Certifications/Screenshot From 2025-11-28 14-56-45.png",
    alt: "Certification 18",
  },
  {
    src: "/images/Certifications/Screenshot From 2025-11-28 14-56-51.png",
    alt: "Certification 19",
  },
  {
    src: "/images/Certifications/Screenshot From 2025-11-28 14-56-57.png",
    alt: "Certification 20",
  },
  {
    src: "/images/Certifications/Screenshot From 2025-11-28 14-57-02.png",
    alt: "Certification 21",
  },
  {
    src: "/images/Certifications/Screenshot From 2025-11-28 14-57-08.png",
    alt: "Certification 22",
  },
  {
    src: "/images/Certifications/Screenshot From 2025-11-28 22-10-12.png",
    alt: "Certification 23",
  },
  {
    src: "/images/Certifications/Screenshot From 2025-11-28 14-58-13.png",
    alt: "Certification 24",
  },
  
  {
    src: "/images/Certifications/Screenshot From 2025-11-28 14-59-10.png",
    alt: "Certification 26",
  },
  {
    src: "/images/Certifications/Screenshot From 2025-11-28 14-59-17.png",
    alt: "Certification 27",
  },
  

  {
    src: "/images/Certifications/Screenshot From 2025-11-28 21-43-41.png",
    alt: "Certification 28",
  },
  
   {
    src: "/images/Certifications/Screenshot From 2025-11-28 22-31-13.png",
    alt: "Certification 28",
  },
   
 
];

const CarouselCertification = () => {
  const { t } = useTranslation();

  return (
    <section className=" mt-[10%] mb-[10%]" id="certifications">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        {t("certifications.title")}
      </h2>
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        transitionTime={500}
        showStatus={false}
        centerMode={true}
        centerSlidePercentage={60}
        renderItem={(item, options) => {
          const isCenter = options.isSelected;
          return (
            <div
              className="relative"
              style={{
                transform: isCenter ? "scale(1)" : "scale(0.8)",
                transition: "transform 0.5s ease-in-out",
                opacity: isCenter ? 1 : 0.6,
              }}
            >
              {item}
            </div>
          );
        }}
      >
        {certifications.map((cert, index) => (
          <div key={index}>
            <Image
              src={cert.src}
              alt={cert.alt}
              width={400}
              height={300}
              className="shadow-lg"
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default CarouselCertification;
