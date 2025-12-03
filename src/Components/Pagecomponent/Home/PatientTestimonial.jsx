"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from '../../../assets/photos/img1.jpg';
import img2 from '../../../assets/photos/img2.jpg';
import img3 from '../../../assets/photos/img3.jpg';

const testimonials = [
  {
    id: 1,
    name: "Emily Shrestha",
    location: "Kathmandu, Nepal",
    image: img1,
    feedback:
      "I had an amazing experience at this hospital. The doctors and nurses were very caring and made me feel comfortable throughout my treatment.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sita Karki",
    location: "Pokhara, Nepal",
    image: img2,
    feedback:
      "The hospital environment was clean and friendly. My surgery went smoothly, and I’m recovering well thanks to the professional care I received.",
    rating: 4,
  },
  {
    id: 3,
    name: "Bishal Thapa",
    location: "Biratnagar, Nepal",
    image: img3,
    feedback:
      "Excellent service! The staff were always available to help, and the doctors explained everything clearly. Highly recommend this hospital.",
    rating: 5,
  },
  {
    id: 4,
    name: "Anita Gurung",
    location: "Lalitpur, Nepal",
    image: img1,
    feedback:
      "I felt very well taken care of during my stay. The medical team was knowledgeable and compassionate, making a difficult time much easier.",
    rating: 5,
  },
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, slidesToSlide: 1 },
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 2, slidesToSlide: 1 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1, slidesToSlide: 1 },
};
const CustomLeftArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-1 top-1/2 -translate-y-1/2  text-white hover:text-[#017593] p-3  z-10"
  >
    <ChevronLeft size={30} />
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-1 top-1/2 -translate-y-1/2  text-white hover:text-[#017593] p-3  z-10"
  >
    <ChevronRight size={30} />
  </button>
);

export default function PatientTestimonial() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 relative">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-semibold text-[#017593] mb-4">
          What Our Patients Say
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We take pride in providing the best healthcare experience for our patients.
          Here are some of their stories and experiences.
        </p>
      </div>

      <div className="p-6 mt-6 relative">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          arrows={true}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          showDots={true}
          pauseOnHover={true}
          keyBoardControl={true}
          containerClass="max-w-6xl mx-auto pb-12 relative"
          itemClass="px-4"
          dotListClass="bg-white rounded-full py-4 "
        >
          {testimonials.map((val) => (
            <motion.div
              key={val.id}
              whileHover={{ scale: 1.03 }}
              className="bg-[#56AFC1] shadow-lg rounded-lg p-8 mx-auto max-w-sm flex flex-col justify-between"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={val.image}
                    alt={val.name}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-sans text-white">{val.name}</h3>
                  <p className="text-sm text-gray-200">{val.location}</p>
                </div>
              </div>

              <p className="text-gray-200 mb-6  leading-relaxed">
                "{val.feedback}"
              </p>


            </motion.div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
