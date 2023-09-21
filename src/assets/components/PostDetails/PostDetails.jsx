import {  useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {

    const navigate = useNavigate()

    const handleGoBack = ()=>{
        navigate(-1)
    }

    const postDetails = useLoaderData();
    console.log(postDetails)
    const {id, title, body} = postDetails
    return (
        <div className="border border-violet-500  rounded-lg p-6 my-32" >
            <h1>This is a post details</h1>
            <h2 className="text-3xl">Post Id {id}</h2>
            <h3 className="text-2xl">Post body{title}</h3>
            <p className="mb-10">{body}</p>
            <button onClick={handleGoBack}  className='bg-blue-500 px-4 py-2 text-white rounded-lg '>Go Back</button>
        </div>
    );
};

export default PostDetails;