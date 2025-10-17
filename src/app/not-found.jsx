'use client';

import { motion } from "framer-motion";
import Link from "next/link";

export default function notFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-50 to-white text-center px-6">
      {/* Animated 404 Number */}
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-9xl font-extrabold text-blue-700 drop-shadow-lg"
      >
        404
      </motion.h1>

      {/* Animated "Not Found" text */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="text-2xl font-semibold text-gray-700 mt-4"
      >
        Oops! Page Not Found 😢
      </motion.p>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="text-gray-500 mt-2 mb-8 max-w-md"
      >
        The page you're looking for doesn't exist or has been moved.
      </motion.p>

      {/* Animated Home Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <Link
          href="/"
          className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 transition"
        >
          ⬅ Go Back Home
        </Link>
      </motion.div>
    </div>
  );
}
