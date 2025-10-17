import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { HiArrowSmallRight } from "react-icons/hi2";
import { HiArrowSmallLeft } from "react-icons/hi2";

import img1 from '../assets/photos/img1.jpg';
import img2 from '../assets/photos/img2.jpg';
import img3 from '../assets/photos/img3.jpg';


const images = [img1, img2, img3];

export default function HomeBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Manual 
  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-screen overflow-hidden">

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute w-full h-full"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={images[index]}
            alt={`Slide ${index}`}
            className="object-cover mt-14 "
            priority
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="absolute top-1/2 mt-12 left-28 -translate-y-1/2 text-white p-11 rounded-lg w-1/2">
        <h1 className="flex flex-col text-3xl font-bold text-white tracking-tight">
          {/* <TypewriterComponent
            onInit={(typewriter) => {
              typewriter
                .typeString("Transforming Lives,")
                .pauseFor(1500)
                .deleteAll()
                .typeString("Restoring Your Health,")
                .pauseFor(1500)
                .deleteAll()
                .typeString("Caring for Every Heartbeat")
                .start();
            }}
          /> */}
          <p className="flex text-3xl font-bold text-gray-200 tracking-tight">Transforming Lives,</p> <p className="text-gray-200 text-3xl mt-2">Restoring Your Health</p>
        </h1>

        <p className="text-gray-300 tracking-tight mt-3 max-w-md leading-relaxed">
          Your Health is Our Top Priority. We are Committed to Providing You with the Best Medical Care and Services.
        </p>

        <button className="mt-7 bg-[#054556] text-white hover:text-gray-300 px-7 py-2 rounded hover:bg-[#017593] transition cursor-pointer">
          Learn More
        </button>
      </div>


      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white shadow-lg  hover:bg-gray-500 px-3 py-3 rounded-full text-xl"
      >
        <HiArrowSmallLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white shadow-lg  hover:bg-gray-500 p-3 rounded-full text-xl"
      >
        <HiArrowSmallRight />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full cursor-pointer ${i === index ? "bg-blue-500" : "bg-white"
              }`}
          >
          </div>
        ))}
      </div>
    </div>
  );
};
