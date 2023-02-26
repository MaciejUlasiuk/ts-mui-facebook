import { IPosts } from "../types/types";
import Post from "./Post";


const Posts = ({posts}: IPosts) => {
    return ( 
        <>
        {posts.posts.map(post => <Post key={post.id} {...post}/>)}
        </>
     );
}
 
export default Posts;