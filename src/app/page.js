'use client';

import HomeBanner from "@/Components/Pagecomponent/Home/HomeBanner"


import PatientTestimonial from "@/Components/Pagecomponent/Home/PatientTestimonial";
import Achievements from "@/Components/Pagecomponent/Home/Achievements";

import Doctorsection from "@/Components/Pagecomponent/OurDoctors/Doctorsection";
import Ourservices from "@/Components/Pagecomponent/Services/Ourservices";
import Clientreviews from "@/Components/Pagecomponent/Testimonials/Clientreviews";
import Chooseus from "@/Components/Pagecomponent/About/Chooseus";
import Aboutsection from "@/Components/Pagecomponent/About/Aboutsection";
import Bloglist from "@/Components/Pagecomponent/Blogs/Bloglist";
import Eventsection from "@/Components/Pagecomponent/Events/Eventsection";
import ContactUs from "@/Components/Pagecomponent/Contactsection/ContactUs";
import Appointmentsection from "@/Components/Pagecomponent/OurDoctors/Appointmentsection";
import Newsletter from "@/Components/Pagecomponent/Services/Newsletter";



export default function HomePage() {
  return (
    <div>
      <HomeBanner/>
      <Aboutsection/>
      <PatientTestimonial/>
      <Achievements/>
      <Chooseus/>
      <Doctorsection/>
      <Clientreviews/>
      <Ourservices/>
       <Newsletter/>
      <Appointmentsection/>
      <Bloglist/>
      <Eventsection/>
      <ContactUs/>
    </div>
  );
}
