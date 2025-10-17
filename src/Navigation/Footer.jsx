import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer(){
  return (
    <footer className="bg-[#017593] text-white pt-16 pb-8 px-6 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
      
        <div>
          <h2 className="text-2xl font-bold mb-4">CareWell Hospital</h2>
          <p className="text-sm text-amber-100 leading-relaxed mb-4">
            Committed to excellence in healthcare. Providing compassionate care, advanced technology,
            and trusted medical expertise for you and your loved ones.
          </p>
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="cursor-pointer hover:text-blue-300" />
            <FaTwitter className="cursor-pointer hover:text-sky-300" />
            <FaInstagram className="cursor-pointer hover:text-pink-300" />
            <FaYoutube className="cursor-pointer hover:text-red-400" />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-amber-100">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/services" className="hover:text-white transition">Find Doctor</a></li>
            <li><a href="/doctors" className="hover:text-white transition">Blog</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-amber-100">
            <li className="flex items-start space-x-3">
              <FaMapMarkerAlt className="mt-1 text-white" />
              <span>Kathmandu, Nepal</span>
            </li>
            <li className="flex items-start space-x-3">
              <FaPhoneAlt className="mt-1 text-white" />
              <span>+977 9800000000</span>
            </li>
            <li className="flex items-start space-x-3">
              <FaEnvelope className="mt-1 text-white" />
              <span>info@carewellhospital.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white pt-6 text-center text-sm text-amber-100">
        © {new Date().getFullYear()} Carewell Hospital. All rights reserved. | Designed by CareWell Team
      </div>
    </footer>
  );
};

