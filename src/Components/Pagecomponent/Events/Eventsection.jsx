"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, X, Search } from "lucide-react";


import healthy from '../../../assets/photos/healthy.jpg';
import stafff from '../../../assets/photos/stafff.jpg';
import foode from '../../../assets/photos/foode.jpg';
import healthh from '../../../assets/photos/healthh.jpg';



export default function Eventsection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const events = [
    {
      slug: "gastro-awareness-week",
      category: "Latest",
      title: "Gastro Awareness Week 2025",
      description: "Join us in promoting digestive health awareness with seminars and workshops.",
      date: "Nov 20, 2025",
      image: healthy,
    },
    {
      slug: "annual-health-camp",
      category: "Held",
      title: "Annual Health Camp 2025",
      description: "A successful free health camp for patients focusing on gastro screening and counseling.",
      date: "Oct 5, 2025",
      image: stafff,
    },
    {
      slug: "nutrition-seminar",
      category: "Upcoming",
      title: "Nutrition Seminar for Patients",
      description: "Learn practical dietary tips for a healthy gut from our expert nutritionists.",
      date: "Dec 10, 2025",
      image: foode,
    },
    {
      slug: "gastro-research-conference",
      category: "Other",
      title: "Gastro Research Conference 2025",
      description: "Join leading gastroenterologists to discuss the latest research and innovations.",
      date: "Nov 30, 2025",
      image: healthh,
    },
  ];

  const categories = ["All", "Latest", "Held", "Upcoming", "Other"];

  const filteredEvents = events.filter((event) => {
    const term = searchTerm.trim().toLowerCase();
    const matchesSearch =
      event.title.toLowerCase().includes(term) ||
      event.description.toLowerCase().includes(term) ||
      event.category.toLowerCase().includes(term);

    const matchesCategory =
      activeCategory === "All" || event.category.toLowerCase() === activeCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full bg-gray-50 py-16 px-6 lg:px-20">
      <div className="flex flex-col md:flex-row md:items-stretch md:justify-between mb-10 gap-6">
        <div className="flex-1 flex flex-col justify-center pb-3">
          <h1 className="text-5xl font-extrabold text-[#0B0C28] ">
            Hospital Events
          </h1>
          <p className="text-gray-400 pt-4">
            Explore Latest, Held, Upcoming and Other events at our hospital.
          </p>
        </div>

        <div className="flex-1 flex flex-col justify-center gap-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search events by title or category..."
              className="w-full border border-gray-300 rounded-xl py-3 px-10 text-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0B0C28]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-3 text-gray-500 hover:text-red-600"
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div
              key={event.slug}
              className="bg-gray-50 cursor-pointer rounded-2xl shadow hover:shadow-xl hover:scale-105 transition duration-700 overflow-hidden"
            >
              <div className="relative w-full h-60">
                <Image src={event.image} alt={event.title} fill className="object-cover" />
                <span className="absolute top-4 right-4 bg-[#0B0C28]/50 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  {event.category}
                </span>
              </div>
              <div className="p-6 flex flex-col gap-4">
                <h2 className="text-xl font-semibold text-[#0B0C28] leading-snug">{event.title}</h2>
                <p className="text-gray-600 text-sm">{event.description}</p>
                <div className="flex items-center gap-1 text-sm text-gray-500 ">
                  <Calendar className="w-4 h-4"/> {event.date}
                </div>
                <Link
                  href={`/Events/${event.slug}`}
                  className=" bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-800 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No events found matching your search.</p>
        )}
      </div>
    </div>
  );
}
