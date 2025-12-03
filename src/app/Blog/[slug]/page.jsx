"use client";
import Image from "next/image";
import Link from "next/link";

import health from '../../../assets/photos/health.jpg';
import liver from '../../../assets/photos/liver.jpg';
import food from '../../../assets/photos/food.jpg';
import stafff from '../../../assets/photos/stafff.jpg';

const blogData = {
  "importance-of-digestive-health": {
    title: "Importance of Digestive Health",
    category: "Health Tips",
    date: "Oct 10, 2025",
    author: "Gastro Care Team",
    image: health,
    content: `Maintaining digestive health is crucial for overall well-being. 
Regular exercise, a balanced diet, and proper hydration can prevent common gastrointestinal issues like acid reflux, constipation, and bloating. 
Visit your gastro specialist for regular checkups.`,
  },
  "latest-gastro-treatments": {
    title: "Latest Gastro Treatments",
    category: "Medical Updates",
    date: "Nov 2, 2025",
    author: "Medical Research Team",
    image: liver,
    content: `Our hospital offers cutting-edge treatments for digestive disorders, including endoscopy, minimally invasive surgery, and personalized medication plans. 
We focus on both cure and preventive care to improve patients' quality of life.`,
  },
  "healthy-diet-for-gut": {
    title: "Healthy Diet for a Better Gut",
    category: "Nutrition",
    date: "Sep 20, 2025",
    author: "Nutrition Team",
    image: food,
    content: `A gut-friendly diet includes high-fiber foods, fermented products, and plenty of fruits and vegetables. 
Avoid excessive processed foods and sugary drinks. 
Consult our nutritionists for personalized meal plans.`,
  },
  "gastro-business-services": {
    title: "Expanding Gastro Services for Patients",
    category: "Business",
    date: "Oct 15, 2025",
    author: "Hospital Management",
    image: stafff,
    content: `Our hospital is expanding gastro services to include advanced diagnostics, specialized clinics, and telemedicine options. 
We are committed to providing efficient, patient-centric care while maintaining sustainable business growth.`,
  },
};

export default function SingleBlogPage({ params }) {
  const { slug } = params;
  const blog = blogData[slug];

  if (!blog) {
    return <div className="text-center text-xl py-20 text-gray-600">Blog not found.</div>;
  }

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center pt-28 pb-12 px-6 lg:px-2">
      <div className="w-11/12 bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="relative w-full h-96">
          <Image src={blog.image} alt={blog.title} fill className="object-cover" />
          <span className="absolute top-4 right-4 bg-[#0B0C28]/70 text-white text-sm font-semibold px-3 py-1 rounded-full">
            {blog.category}
          </span>
        </div>

        <div className="p-8 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-[#0B0C28]">{blog.title}</h1>
          <div className="text-gray-500 text-sm flex justify-between">
            <span>👩‍⚕️ {blog.author}</span>
            <span>📅 {blog.date}</span>
          </div>
          <hr className="my-4 border-gray-200" />
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{blog.content}</p>
          <div className="mt-8">
            <Link
              href="/Blog"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
