"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { User, Calendar, X, Search } from "lucide-react";
import health from "../../../assets/photos/health.jpg";
import liver from '../../../assets/photos/liver.jpg';
import food from '../../../assets/photos/food.jpg';
import stafff from '../../../assets/photos/stafff.jpg';

export default function Bloglist() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const blogs = [
    {
      slug: "importance-of-digestive-health",
      category: "Health Tips",
      title: "Importance of Digestive Health",
      description: "Learn why maintaining digestive health is crucial and how lifestyle affects your gut.we will provide proper guidence.",
      author: "Gastro Care Team",
      date: "Oct 10, 2025",
      image: health,
    },
    {
      slug: "latest-gastro-treatments",
      category: "Medical Updates",
      title: "Latest Gastro Treatments",
      description: "Discover the newest procedures and medications available at our hospital for digestive disorders.",
      author: "Medical Research Team",
      date: "Nov 2, 2025",
      image: liver,
    },
    {
      slug: "healthy-diet-for-gut",
      category: "Nutrition",
      title: "Healthy Diet for a Better Gut",
      description: "Practical dietary tips to maintain a healthy digestive system and prevent common disorders.",
      author: "Nutrition Team",
      date: "Sep 20, 2025",
      image: food,
    },
    {
      slug: "gastro-business-services",
      category: "Business",
      title: "Expanding Gastro Services for Patients",
      description: "How our hospital manages gastro services efficiently and introduces new patient care programs.",
      author: "Hospital Management",
      date: "Oct 15, 2025",
      image: stafff,
    },
  ];

  const filteredBlogs = blogs.filter((blog) => {
    const term = searchTerm.trim().toLowerCase();
    const matchesSearch =
      blog.title.toLowerCase().includes(term) ||
      blog.description.toLowerCase().includes(term) ||
      blog.category.toLowerCase().includes(term);

    const matchesCategory =
      activeCategory === "All" || blog.category.toLowerCase() === activeCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  const categories = ["All", "Health Tips", "Medical Updates", "Nutrition", "Business"];

  return (
    <div className="w-full bg-white py-16 px-6 lg:px-20 ">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
        <div className="text-center md:text-left pb-12 md:mb-0">
          <h1 className="text-4xl font-semibold text-[#0B0C28] tracking-tight">
            Latest from Gastro Health Blog
          </h1>
          <p className="text-gray-400 pt-4">
            Insights, updates, and tips for digestive health and hospital management.
          </p>
        </div>

        <div className="w-full md:w-1/3 ">
          <div className="relative w-full mb-4">
            <input
              type="text"
              placeholder="Search blogs by title, content, or category..."
              className="w-full border border-gray-300 rounded-xl py-3 px-10 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0B0C28]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3  text-gray-400 hover:text-red-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2 justify-start md:justify-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1 rounded-full text-sm border transition ${
                  activeCategory === cat
                    ? "bg-[#0B0C28] text-white border-[#0B0C28]"
                    : "border-gray-300 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <div
              key={blog.slug}
              className="bg-gray-50 cursor-pointer rounded-2xl shadow hover:shadow-xl hover:scale-105 transition duration-700 overflow-hidden"
            >
              <div className="relative w-full h-60">
                <Image src={blog.image} alt={blog.title} fill className="object-cover" />
                <span className="absolute top-4 right-4 bg-[#0B0C28]/50 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  {blog.category}
                </span>
              </div>
              <div className="p-6 flex flex-col gap-4">
                <h2 className="text-xl font-semibold text-[#0B0C28] leading-snug">{blog.title}</h2>
                <p className="text-gray-600 text-sm">{blog.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 ">
                  <span className="flex items-center gap-1"><User className="w-4 h-4"/> {blog.author}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4"/> {blog.date}</span>
                </div>
                  <Link
                  href={`/Blog/${blog.slug}`}
                  className=" bg-blue-600 text-white text-center  py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Read More
                </Link>
            
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No blogs found matching your search.</p>
        )}
      </div>
    </div>
  );
}
