'use client'
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

import doctor1 from "../../assets/photos/doctor1.png";
import doctor3 from "../../assets/photos/doctor3.png";
import staff1 from "../../assets/photos/staff1.jpg";
import staff3 from "../../assets/photos/staff3.jpg";


const data = [
    { id: 1, name: "Dr. Ramesh Shahi", specialty: "Cardiologist", experience: "10 years", image: doctor1 },
    { id: 2, name: "Dr. Harry Thapa", specialty: "Dermatologist", experience: "8 years", image: doctor3 },
    { id: 3, name: "Dr. Emily Pun", specialty: "Pediatrician", experience: "5 years", image: staff1 },
    { id: 4, name: "Dr. Sarah Ali", specialty: "Orthopedic Surgeon", experience: "7 years", image: staff3 },
];

const FindDoctor = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="flex flex-col mx-auto w-1/2 top-1/2 translate-y-1/2 items-center justify-center p-6 rounded-lg ">
                <h1 className="text-3xl tracking-tight font-bold w-2/3 mx-auto text-center py-2 ">
                    Well Experienced Doctors
                </h1>
                <p className="text-gray-600 tracking-tight text-center ">
                    Our team of highly qualified doctors are here to provide you with the best medical care.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-11 gap-6 mt-24 mb-20">
                {data.map((doctor) => (
                    <div
                        key={doctor.id}
                        className=" shadow-lg flex flex-col items-center p-6 hover:shadow-2xl transition-shadow duration-300"
                    >
                        <div className="w-full h-64 overflow-hidden ">
                            <Image
                                src={doctor.image}
                                alt={doctor.name}
                                width={500}
                                height={500}
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </div>

                        <div className="text-center mt-4">
                            <h2 className="text-xl font-bold text-gray-800 uppercase hover:text-blue-500">{doctor.name}</h2>
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

export default FindDoctor;
