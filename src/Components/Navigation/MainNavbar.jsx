import Navbar from "./Navbar";
import SubnavBar from "./Subnavbar";

export default function MainNavbar(){
    return(
        <div className="relative z-50 left-0 right-0 top-0">
            <Navbar/>
            <SubnavBar/>
        </div>
    )
}