"use client";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";

import healthy from '../../../assets/photos/healthy.jpg';
import stafff from '../../../assets/photos/stafff.jpg';
import foode from '../../../assets/photos/foode.jpg';
import healthh from '../../../assets/photos/healthh.jpg';

const eventData = {
  "gastro-awareness-week": {
    title: "Gastro Awareness Week 2025",
    category: "Latest",
    date: "Nov 20, 2025",
    image: healthy,
    content: `
      Join us in promoting digestive health awareness.
      The week-long event features seminars, workshops, and free screening for patients.
    `,
  },
  "annual-health-camp": {
    title: "Annual Health Camp 2025",
    category: "Held",
    date: "Oct 5, 2025",
    image: stafff,
    content: `
      Our annual health camp focused on gastro screening and patient counseling.
    `,
  },
  "nutrition-seminar": {
    title: "Nutrition Seminar for Patients",
    category: "Other",
    date: "Dec 10, 2025",
    image: foode,
    content: `
      Learn practical dietary tips for a healthy gut from our expert nutritionists.
    `,
  },
  "gastro-research-conference": {
    title: "Gastro Research Conference 2025",
    category: "Latest",
    date: "Nov 30, 2025",
    image: healthh,
    content: `
      Join leading gastroenterologists to discuss the latest research and innovations.
      The conference includes presentations, panel discussions, and networking opportunities.
    `,
  },
};

export default function EventPage({ params }) {
  const { slug } = params;
  const event = eventData[slug];

  if (!event) {
    return (
      <div className="text-center py-20 text-gray-600">
        Event not found.
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center pt-28 pb-12 px-6 lg:px-20">
      <div className="w-full max-w-7xl bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="relative w-full h-96 bg-gray-200">
          <Image src={event.image} alt={event.title} fill className="object-cover" />
          <span className="absolute top-4 right-4 bg-[#0B0C28]/70 text-white px-3 py-1 rounded-full text-sm">
            {event.category}
          </span>
        </div>

        <div className="p-8 flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-[#0B0C28]">{event.title}</h1>

          <div className="text-gray-500 text-sm flex items-center gap-2">
            <Calendar className="w-4 h-4" /> {event.date}
          </div>

          <hr className="border-gray-300 my-4" />

          <p className="text-gray-700  text-lg">
            {event.content}
          </p>

          <div className="mt-5">
            <Link
            href="/Events"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            ← Back to Events
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
