
import DBanner from "@/Components/Pagecomponent/OurDoctors/DBanner";
import Clientreviews from "@/Components/Pagecomponent/Testimonials/Clientreviews";
import Doctorsection from "@/Components/Pagecomponent/OurDoctors/Doctorsection";
import Appointmentsection from "@/Components/Pagecomponent/OurDoctors/Appointmentsection";

export default function Doctor(){
    return(
        <div>
            <DBanner />
            <Doctorsection/>
            <Clientreviews/>
            <Appointmentsection/>

        </div>
    )
}
