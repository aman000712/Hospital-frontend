import Newsletter from "@/Components/Pagecomponent/Services/Newsletter";
import Ourservices from "@/Components/Pagecomponent/Services/Ourservices";
import SBanner from "@/Components/Pagecomponent/Services/SBanner";


export default function Page() {
    return (
        <div>
           <SBanner/>
           <Ourservices/>
           <Newsletter/>
        </div>
    );
}