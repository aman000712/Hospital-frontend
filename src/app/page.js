'use client';
import HomeBanner from "@/Home/HomeBanner";
import About from "@/app/About/page"
import FindDoctor from "@/app/FindDoctor/page"
import Blog from "./Blog/page";
import Contact from "./Contact/page";
import PatientTestimonial from "@/Home/PatientTestimonial";
import DoctorTestimonial from "@/Home/DoctorTestimonial";
import Achievements from "@/Home/Achievements";


export default function HomePage() {
  return (
    <div>
      <HomeBanner/>
      <About/>
      <PatientTestimonial/>
      <Achievements/>
      <DoctorTestimonial/>
      <FindDoctor/>
      <Blog/>
      <Contact/>
    </div>
  );
}
