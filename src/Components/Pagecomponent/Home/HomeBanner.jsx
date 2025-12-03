import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaHospitalAlt } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import { FaMedkit } from "react-icons/fa";

import img1 from '../../../assets/photos/img1.jpg';
import img2 from '../../../assets/photos/img2.jpg';
import img3 from '../../../assets/photos/img3.jpg';


import Link from 'next/link';

const images = [img1, img2, img3]; 

export default function HomeBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div >

      <div className="relative w-full min-h-[140vh] overflow-hidden pb-40">

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={images[index]}
              alt={`Slide ${index}`}
              fill
              className="object-cover h-screen w-full"
              priority
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="absolute top-1/2 -translate-y-1/2 left-20 text-left text-white max-w-lg pb-16">
          <h1 className=" font-bold leading-tight ">
            <span className="text-4xl">Transforming Lives,</span><br />
            <span className="text-3xl">Restoring Your Health</span>
          </h1>

          <p className="text-gray-200 mt-4 w-3/4">
            Your Health is Our Top Priority. We are Committed to Providing You with the Best Medical Care and Services.
          </p>

          <div className="flex gap-3 mt-6">
            <button className=" bg-amber-600 text-white hover:text-amber-200 px-4 py-2 p-3 rounded-md  transition transform  cursor-pointer">
              Contact Us
            </button>
            <Link href="/Appointment">
            <button className=" text-amber-50 bg-[#278ba6] border border-blue-50 hover:text-blue-300 px-4 py-2 rounded-md transform transition duration-300 cursor-pointer">
              Book An Appointment
            </button>
            </Link>
          </div>
        </div>


        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {images.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full cursor-pointer ${i === index ? "bg-blue-500" : "bg-white"
                }`}
            />
          ))}
        </div>

      </div>


      <div className="relative h-full w-full grid grid-cols-1 md:grid-cols-3 mt-0 md:-mt-16 pb-0 ">

        <div className="bg-[#195b96] h-full flex flex-col  justify-between text-white p-6"> 
          <div className="  p-4 rounded-md flex flex-col px-10 gap-2">
            <FaHospitalAlt className="text-4xl" />
            <p className="text-xl font-semibold">Hospitality</p>
            <p className="text-sm text-gray-200">Clinical excellence must be the priority for any health care service provider.</p>
            <div>
              <button className="mt-3 border border-white px-3 py-1 rounded hover:bg-white hover:text-[#195b96] transition">
              Apply for bed
            </button>
            </div>
          </div>
        </div>

        <div className="bg-[#82C4FE] h-full flex flex-col justify-between text-white p-6">
          <div className="  p-4 rounded-md flex flex-col px-10 gap-2">
            <MdAddIcCall className="text-4xl" />
          <p className="text-xl font-semibold">Emergency Care</p>
          <p className="text-sm text-gray-200">We are available 24/7 for emergency response and care.</p>
          <div>
            <button className="mt-3 border border-white px-3 py-1 rounded hover:bg-white hover:text-[#5DB3FF] transition">
            +977 9766553321
          </button>
          </div>
          </div>
        </div>

        <div className="bg-[#195b96] h-full flex flex-col justify-between text-white p-6">
          <div className="p-4 rounded-md flex flex-col gap-2 px-10">
            <FaMedkit className="text-4xl" />
          <p className="text-xl font-semibold">Services</p>
          <p className="text-sm text-gray-200">We provide a wide range of medical services tailored to your needs.</p>
          <div>
            <button className="mt-3 border border-white px-3 py-1 rounded hover:bg-white hover:text-[#82C4FE] transition">
            Make An Appointment
          </button>
          </div>
          </div>
        </div>

      </div>

    </div>
  );
}
