import Image from "next/image";
import healthh from '../../../assets/photos/healthh.jpg';
export default function OurVision() {
    return (
        <div className="bg-blue-50 py-16 md:h-[600px]">
            <div className="flex max-w-6xl mx-auto px-16 space-x-10 gap-4">
                <div className="flex-1 flex flex-col gap-4 items-start px-6 p-6 pt-4 h-fit w-fit">
                    <h2 className="text-3xl uppercase font-bold text-blue-500 ">Committing to Excellence</h2>
                    <h3 className="text-lg text-gray-800  font-bold ">Top-tier gastroenterology care that goes beyond the ordinary !</h3>
                    <Image
                    src={healthh}
                    alt="Our Vision"
                    className="w-[500px] h-[320px] rounded-lg object-cover"
                />
                </div>
                
                <div className="flex-1 flex flex-col pt-4">
                    <div className=" p-6 flex flex-col gap-4 bg-white rounded-lg mb-6 shadow-lg hover:shadow-[0_6px_20px_-5px_rgba(59,130,246,0.7)] transition-shadow duration-300 hover:scale-105 cursor-pointer">
                     
                        <h4 className="text-lg font-semibold text-black/70">Our Vision</h4>
                        <p className="text-gray-600 text-sm">
                            Our vision at <span className="font-bold text-amber-600">Gastro</span> is to be a leader in providing
                            world-class gastroenterology care, where personalized treatments and innovative technologies combine
                            to achieve the best possible patient outcomes. To us, excellence is not just a goal; it's a commitment
                            to every patient we serve.
                        </p>
                        {/* <hr className="border-t border-gray-400 my-4 " /> */}
                    </div>

                    <div className="p-6 flex flex-col gap-4 bg-white rounded-lg shadow-lg hover:shadow-[0_6px_20px_-5px_rgba(59,130,246,0.7)] transition-shadow duration-300 hover:scale-105 cursor-pointer">
                        <h4 className="text-lg font-semibold text-black/70">Our Mission</h4>
                        <p className="text-gray-600 text-sm">
                            At <span className="font-bold text-amber-600">Gastro</span>, our mission is to provide exceptional,
                            patient-centered gastroenterology care through advanced treatments, comprehensive services, and
                            compassionate support. The goal is to enhance the health and well-being of our patients by delivering
                            personalized care that addresses their unique needs, while fostering a supportive environment that
                            promotes healing and wellness.
                        </p>
                        {/* <hr className="border-t border-gray-400 my-4" /> */}
                    </div>
                </div>

            </div>
        </div>
    );
}
