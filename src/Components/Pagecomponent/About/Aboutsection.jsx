'use client';
import Image from "next/image";
import doctorni from '../../../assets/photos/doctorni.jpg';
import galleryone from '../../../assets/photos/galleryone.jpg';
import Link from "next/link";

const Aboutsection = () => {
  return (
    <section className="w-full bg-[#F8FBFF] py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        <div className="relative w-full h-[450px]">

          <div className="relative w-full flex items-center justify-center">
            <div className="relative w-[450px] h-[430px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={galleryone}
                alt="Main doctor image"
                fill
                className="object-cover "
              />
            </div>
            <div className="absolute right-[-40px] bottom-[-50px] w-[230px] h-[300px] rounded-xl overflow-hidden shadow-2xl border-[6px] border-white bg-white">
              <Image
                src={doctorni}
                alt="Doctor portrait"
                fill
                className="object-cover"
              />
            </div>

          </div>


        </div>

        <div className="space-y-6 px-8">
          <h2 className=" md:text-5xl font-bold text-black leading-tighter ">
            Committed To Gastro Excellence
          </h2>

          <p className="text-gray-400 text-md leading-relaxed ">
            At <span className="font-semibold text-[#1A4D8F]">Gastro</span>, our mission is to provide exceptional
            digestive health care with compassion and trust. We are committed to
            supporting every patient with advanced medical expertise and personalized treatment.
          </p>

          <p className="text-gray-400 text-md leading-relaxed">
            With modern facilities, a highly experienced team of gastro specialists,
            and patient-centered care, we ensure comfort, clarity, and confidence
            throughout your treatment journey.
          </p>

          <Link href="/Appointment" >
          <button             
          type="button"
              className="bg-[#1A4D8F] hover:bg-[#163E73] text-white px-7 py-2 rounded-lg font-medium transition-all duration-300 shadow-md"
            >
              Book An Appointment
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Aboutsection;
