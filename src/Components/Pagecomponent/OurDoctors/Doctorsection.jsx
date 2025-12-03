import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

import doctor1 from "../../../assets/photos/doctor1.png";
import doctor3 from "../../../assets/photos/doctor3.png";
import staff1 from "../../../assets/photos/staff1.jpg";


const data = [
    { id: 1, name: "Dr. Ramesh Shahi", specialty: "Cardiologist", experience: "10 years Experience", image: doctor1 },
    { id: 2, name: "Dr. Harry Thapa", specialty: "Dermatologist", experience: "8 years Experience", image: doctor3 },
    { id: 3, name: "Dr. Emily Pun", specialty: "Pediatrician", experience: "5 years Experience", image: staff1 },
    // { id: 4, name: "Dr. Sarah Ali", specialty: "Orthopedic Surgeon", experience: "7 years", image: staff3 },
];

export default function Doctorsection() {
    return (
        <div className="min-h-screen bg-blue-50 py-2 ">
            <div className="flex flex-col mx-auto w-1/2 top-0 translate-y-1/3 items-center justify-center p-4 rounded-lg ">
                <h1 className="text-5xl text-[#17449E] tracking-tight font-bold mx-auto  text-center ">
                    Our Doctors
                </h1>
                <p className="mt-4 text-gray-400 text-center">
                    Meet our team of experienced and compassionate doctors dedicated to your health and well-being.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-16 gap-6 mt-12 p-4 mb-14">
                {data.map((doctor) => (
                    <div
                        key={doctor.id}
                        className="shadow-lg bg-amber-50 flex flex-col items-center p-6 rounded-xl hover:shadow-2xl transition-shadow duration-300"
                    >
                        <div className="w-full h-full relative overflow-hidden group">
                            <Image
                                src={doctor.image}
                                alt={doctor.name}
                                width={500}
                                height={500}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                        </div>

                        <div className="text-center mt-4">
                            <h2 className="text-xl font-bold text-[#17449E] uppercase hover:text-amber-600 cursor-pointer">{doctor.name}</h2>
                            <p className="text-gray-600 hover:text-black cursor-pointer">{doctor.specialty}</p>
                            <p className="text-gray-600 text-sm">{doctor.experience}</p>
                        </div>
                        <div className="flex justify-center space-x-4 mt-4 text-gray-600 ">
                            <FaFacebookF className="hover:text-blue-600 cursor-pointer  " />
                            <FaTwitter className="hover:text-sky-500 cursor-pointer" />
                            <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
                            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


