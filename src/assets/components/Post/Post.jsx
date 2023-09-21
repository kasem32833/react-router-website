import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const navigate = useNavigate()
    const handleSeeDetails = () => {
        navigate(`/posts/${id}`);
    }

    const {id, title, body} = post
    return (
        <div className="border border-violet-500 rounded-lg p-6">
            <h3>Post Id:{id}</h3>
            <h2 className="text-3xl">Name:{title}</h2>
            {/* <Link to={`/posts/${id}`}  >See Details</Link> */}
            <button onClick={handleSeeDetails} className='bg-blue-500 px-4 py-2 text-white rounded-lg '>See Details</button>
            
        </div>
    );
};

export default Post;