"use client";
import { FaFacebookF,  FaTwitter, FaInstagram, FaYoutube, FaPhoneAlt,FaEnvelope,FaMapMarkerAlt,} from "react-icons/fa";
import Image from "next/image";
import gastrologo from "../../assets/photos/gastrologo.png";

export default function Footer() {
  return (
    <footer className="bg-[#0A3D62] text-white px-6 lg:px-20 pt-16 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col h-full">
          <Image
            src={gastrologo}
            alt="Gastro Hospital Logo"
            className="w-40 h-auto object-contain mb-4 "
          />

          <p className="text-sm text-teal-100 leading-relaxed">
            Delivering advanced gastro healthcare with expert doctors,
            modern technology, and compassionate patient-focused services.
            Your digestive health, our priority.
          </p>

          <div className="flex space-x-4 mt-6">
            <FaFacebookF className="cursor-pointer hover:text-blue-300 text-xl transition" />
            <FaTwitter className="cursor-pointer hover:text-sky-300 text-xl transition" />
            <FaInstagram className="cursor-pointer hover:text-pink-300 text-xl transition" />
            <FaYoutube className="cursor-pointer hover:text-red-400 text-xl transition" />
          </div>
        </div>
        <div className="flex flex-col h-full  items-center ">
          <h3 className="text-xl font-semibold mb-5 border-b-2 w-fit pb-1 border-teal-300">
            Quick Links
          </h3>

          <ul className="space-y-3 text-teal-100 text-sm ">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/About" className="hover:text-white transition">About Us</a></li>
            <li><a href="/Services" className="hover:text-white transition">Our Services</a></li>
            <li><a href="/FindDoctor" className="hover:text-white transition">Find Doctor</a></li>
            <li><a href="/Blog" className="hover:text-white transition">Blog</a></li>
            <li><a href="/Events" className="hover:text-white transition">Events</a></li>
            <li><a href="/Contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>
        <div className="flex flex-col h-full">
          <h3 className="text-xl font-semibold mb-5 border-b-2 w-fit pb-1 border-teal-300">
            Contact Us
          </h3>

          <ul className="space-y-4 text-teal-100 text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-white text-lg mt-1" />
              <span>Butwal, Nepal</span>
            </li>
            <li className="flex items-start gap-3">
              <FaPhoneAlt className="text-white text-lg mt-1" />
              <span>+977 9876543210</span>
            </li>
            <li className="flex items-start gap-3">
              <FaEnvelope className="text-white text-lg mt-1" />
              <span>info@gastrohospital.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 border-t border-white/30 pt-6 text-center text-sm text-teal-100">
        © {new Date().getFullYear()} Gastro Hospital. All rights reserved.
        <br />
        Designed & Developed by{" "}
        <span className="font-semibold text-white">Durga Thapa</span>
      </div>
    </footer>
  );
}
