'use client'
import Image from "next/image";
import gastrologo from "../../assets/photos/gastrologo.png";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const nav = [
  { name: "Home", path: "/" },
  { name: "About", path: "/About" },
  { name: "Find Doctor", path: "/FindDoctor" },
  { name: "Services", path: "/Services" },
  { name: "Blog", path: "/Blog" },
  { name: "Events", path: "/Events" },
  { name: "Contact", path: "/Contact" },
  { name: "Get Appointment", path: "/Appointment" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 70);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${scrolled ? "bg-white/95 shadow-md backdrop-blur-sm " : "bg-transparent "}`}
    >
      <div className="w-11/12 mx-auto flex items-center justify-between py-4">
        <Link href="/">
          <Image
            src={gastrologo}
            alt="Logo"
            className="h-8 w-auto cursor-pointer transition-transform hover:scale-105"
          />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {nav.map((item, idx) => (
            item.name === "Get Appointment" ? (
              <Link
                key={idx}
                href={item.path}
                onClick={() => setOpen(false)}
                className=" bg-[#017593] text-white text-sm uppercase px-4 py-2 rounded-lg shadow-md font-medium"
              >
                {item.name}
              </Link>
            ) : (
              <Link
                key={idx}
                href={item.path}
                onClick={() => setOpen(false)}
                className="text-sm font-light uppercase text-black hover:text-gray-300 transition-colors"
              >
                {item.name}
              </Link>
            )
          ))}

        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className={`md:hidden transition-colors ${scrolled ? "text-black" : "text-white"}`}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="md:hidden bg-[#017593] text-white flex flex-col items-center py-6 space-y-5"
          >
            {nav.map((item, idx) => (
              <Link
                key={idx}
                href={item.path}
                onClick={() => setOpen(false)}
                className="text-lg font-light hover:text-gray-300 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
