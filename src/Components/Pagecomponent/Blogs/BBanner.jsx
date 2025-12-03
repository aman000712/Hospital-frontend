'use client';
import Image from "next/image";
import Link from "next/link";
import checkup from '../../../assets/photos/checkup.jpg';

export default function BBanner() {
  return (
    <>
      <section className="relative w-full h-[250px] md:h-[380px] mt-20 flex items-center justify-center overflow-hidden">
        <Image
          src={checkup}
          alt="About Banner"
          fill
          className="object-cover"
          priority
        />
        
        <div className="absolute inset-0 bg-[#1A489F] opacity-70"></div>
        <div className="relative z-10 flex flex-col gap-5 items-center justify-center text-center">
          <h1 className="text-white text-6xl md:text-5xl font-extrabold tracking-wide">
            Blogs
          </h1>
          <p className="text-gray-300 text-lg">Latest stories and updates from our hospital</p>
        </div>
      </section>
      <div className="w-full py-4 px-6 bg-white text-sm">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-gray-600">

          <Link href="/" className="hover:text-amber-600 transition">
            Home
          </Link>

          <span className="text-gray-400">/</span>

          <span className="text-amber-600 font-medium">
            Blogs
          </span>

        </div>
      </div>
    </>
  );
}
