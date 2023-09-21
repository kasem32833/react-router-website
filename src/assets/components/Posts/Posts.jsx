import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";


const Posts = () => {

    const posts = useLoaderData()
    const {id, title, body} = posts
    return (
        <div>
            <h1>Total posts:{posts.length}</h1>
            <div className="grid grid-cols-3 gap-6">
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
           
        </div>
    );
};

export default Posts;