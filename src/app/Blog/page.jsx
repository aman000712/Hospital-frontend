import BBanner from "@/Components/Pagecomponent/Blogs/BBanner"
import Bloglist from "@/Components/Pagecomponent/Blogs/Bloglist";
import LatestBlog from "@/Components/Pagecomponent/Blogs/LatestBlog";

export default function blog(){
    return(
        <div> 
            
            <BBanner/>
            <Bloglist/>
            <LatestBlog/>
            
        </div>
    )
}