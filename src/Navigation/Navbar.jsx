'use client'
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; 

const nav = [
  { name: "Home", path: "/" },
  { name: "About", path: "/About" },
  { name: "Find Doctor", path: "/FindDoctor" },
  { name: "Blog", path: "/Blog" },
  { name: "Contact", path: "/Contact" },
];

export default function Navbar(){
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-md bg-[#017593]">
      <div className="flex justify-between items-center md:px-4 md:py-4">
       
        <h1 className="text-white text-lg font-medium ml-7">CareWell.</h1>
        <div className="hidden md:flex gap-10 mr-20 text-white text-sm font-medium ">
          {nav.map((val, i) => (
            <Link key={i} href={val.path} className="hover:text-black transition-colors ">
              {val.name}
            </Link>
          ))}
        </div>

        <button
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
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
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#017593] flex flex-col space-y-4 py-4 text-center text-white"
          >
            {nav.map((val, i) => (
              <Link
                key={i}
                href={val.path}
                onClick={() => setOpen(false)}
                className="block hover:text-blue-300 transition-colors"
              >
                {val.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
