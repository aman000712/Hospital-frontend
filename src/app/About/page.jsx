import Achievements from "../../Components/Pagecomponent/Home/Achievements";
import ABanner from "../../Components/Pagecomponent/About/ABanner";
import Aboutsection from "../../Components/Pagecomponent/About/Aboutsection";

import OurVision from "@/Components/Pagecomponent/About/Ourvision";
import Chooseus from "@/Components/Pagecomponent/About/Chooseus";
export default function About() {
  return(
    <div>
      <ABanner/>
      <Aboutsection/>
      <Achievements/>
      
      <OurVision/>
      <Chooseus/>

    </div>
  )
}