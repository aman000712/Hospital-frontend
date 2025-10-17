'use client';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-300 py-16 px-6 lg:px-20">

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#017593] mb-4">Contact Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We're here to help you with your health needs. Reach out to us for appointments, questions, or support — our team is ready to assist you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a message</h2>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#017593] text-white py-2 rounded-md hover:bg-amber-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="flex flex-col space-y-6">

          <div className="bg-white rounded-lg shadow-md p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>

            <div className="flex items-center space-x-3 text-gray-600">
              <FaMapMarkerAlt className="text-[#017593] text-xl" />
              <p>CareWell Hospital, Kathmandu, Nepal</p>
            </div>

            <div className="flex items-center space-x-3 text-gray-600">
              <FaPhoneAlt className="text-[#017593] text-xl" />
              <p>+977 9800000000</p>
            </div>

            <div className="flex items-center space-x-3 text-gray-600">
              <FaEnvelope className="text-[#017593] text-xl" />
              <p>info@carewellhospital.com</p>
            </div>

            <div className="flex items-center space-x-3 text-gray-600">
              <FaClock className="text-[#017593] text-xl" />
              <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.006836841888!2d85.32395977523462!3d27.717245376191817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190d8b2a0e61%3A0xe1c39dc57cb1b39c!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2snp!4v1711784567890!5m2!1sen!2snp"
              width="100%"
              height="280"
              allowFullScreen=""
              loading="lazy"
              className="border-0 w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
