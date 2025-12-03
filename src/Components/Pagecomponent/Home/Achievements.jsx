'use client';
import Image from "next/image";
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";
import bg from '../../../assets/photos/bg.jpg';

export default function Achievements() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div ref={ref} className="relative text-white  text-center h-[300px] overflow-hidden">
      <Image
        src={bg}
        alt="Hospital Checkup"
        fill
        className="object-cover object-top z-0" 
        priority
      />
      <div className="absolute inset-0 bg-[#1A489F] opacity-60 z-10 "></div>


      <div className="relative z-10 top-1/2 transform -translate-y-1/2 py-10">
        <div className="flex mx-auto w-10/12  justify-between items-center px-9 gap-8">
          <div className="text-center">
            {inView && <CountUp start={0} duration={5} end={100} className="font-bold text-5xl text-white" />}
            <p className="mt-2 text-lg text-[#193587] font-semibold">
              Experienced Doctors
            </p>
          </div>
          <div className="text-center">
            {inView && <CountUp start={0} duration={5} end={29000} className="font-bold text-5xl text-white" />}
            <p className="mt-2 text-lg text-[#193587] font-semibold">
              Happy Patients
            </p>
          </div>
          <div className="text-center">
            {inView && <CountUp start={0} duration={5} end={500} className="font-bold text-5xl text-white" />}
            <p className="mt-2 text-lg text-[#193587] font-semibold">
              Medical Beds
            </p>
          </div>
          <div className="text-center">
            {inView && <CountUp start={0} duration={5} end={100} className="font-bold text-5xl text-white" />}
            <p className="mt-2 text-lg text-[#193587] font-semibold">
              Winning Awards
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
