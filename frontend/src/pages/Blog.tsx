import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { FullBlog } from "../components/FullBlog";
import { Spinner } from "../components/Spinner";


export const Blog = () => {
    const {id} = useParams()
    const {loading, blog, error} = useBlog({
        id: id || ""
    });

    if (error) {
        return <div>{error}</div>;
    }
    
    if(loading) {
        return <div>
            <Spinner/>
        </div>
    }
    return <div>
        <FullBlog blog={blog}/>
    </div>

}
