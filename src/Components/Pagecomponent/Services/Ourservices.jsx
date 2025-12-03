import React from "react";
import Image from 'next/image';
import img1 from '../../../assets/photos/img1.jpg';
import liver from '../../../assets/photos/liver.jpg';
import img3 from '../../../assets/photos/img3.jpg';
import med from '../../../assets/photos/med.png';
import vaccine from '../../../assets/photos/vaccine.jpg';
import surgery from '../../../assets/photos/surgery.jpg';

export default function Ourservices() {
  const servicesData = [
    {
      image: img1,  
      title: "Gastroenterology",
      description: "Specialized treatment for gastrointestinal disorders, including IBS, Crohn's disease."
    },
    {
      image: liver,
      title: "Liver Diseases",
      description: "Diagnosis and treatment of liver conditions like hepatitis, fatty liver, cirrhosis."
    },
    {
      image: img3,
      title: "Endoscopy Services",
      description: "Advanced endoscopic procedures for early detection of gastrointestinal issues."
    },
    {
      image: surgery,
      title: "Colorectal Surgery",
      description: "Surgical treatments for colorectal issues, including cancer and inflammatory bowel diseases."
    },
    {
      image: med,
      title: "Pharmacy Services",
      description: "Prescription medication and over-the-counter solutions for digestive and liver health."
    },
    {
      image: vaccine,
      title: "Vaccinations",
      description: "Vaccines for Hepatitis, Influenza, and other types of infections related to gastrointestinal health."
    }
  ];
  return (
    <div className="container mx-auto px-4 py-20 bg-gray-50 lg:max-w-full">
      <div className="text-start mb-12 w-11/12 mx-auto flex flex-col gap-2">
        <h2 className="text-5xl text-center font-bold text-gray-800 ">Our Services</h2>
        <p className="mb-6 w-8/12 mx-auto text-gray-400 text-center">We offer a comprehensive range of medical services to address diverse healthcare needs with excellence and compassion.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              className="bg-white p-6 rounded-lg shadow-lg transform transition-all "
              key={index}
            >
              <div className="group relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-52 object-cover rounded-t-lg mb-4 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-black/80 mb-2 hover:text-amber-700 cursor-pointer">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-md">{service.description}</p>
              <a
                href="/services"
                className="text-blue-500 font-sans hover:text-blue-800 transition-colors text-md"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
