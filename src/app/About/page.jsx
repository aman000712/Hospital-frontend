'use client';
import Image from "next/image";
import service from '../../assets/photos/service.png';

const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 pt-28 pb-28 py-16 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        <Image
          src={service}
          alt="Medical professionals"
          className="object-contain rounded-2xl shadow-lg w-[90%] h-auto bg-blue-300"
          priority
        /> </div>


      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-600">
          About <span className="text-gray-800">CareWell</span>
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
          At <span className="font-semibold text-blue-600">CareWell hospital</span>, we are more than just a healthcare provider —
          we are your partners in wellness. Our mission is to empower lives through accessible,
          compassionate, and world-class medical care.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
          With a dedicated team of skilled doctors, modern facilities, and a commitment to excellence,
          we ensure that every patient receives the care they deserve.
          Your health, comfort, and trust are at the heart of everything we do.
        </p>

        <a href="#" className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300">
          Learn More
        </a>
      </div>
    </section>

  );
};

export default About;
