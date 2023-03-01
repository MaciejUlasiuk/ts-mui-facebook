import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { IPosts } from "../types/types";
import Post from "./Post";


const Posts = () => {
    const dispatch = useDispatch<AppDispatch>()
  const posts: IPosts = useSelector((state: RootState)=> state.postsSlice.posts)
  console.log(posts)
    return ( 
        <>
        {posts.data.map(post => <Post key={post.id} {...post}/>)}
        </>
     );
}
 
export default Posts;