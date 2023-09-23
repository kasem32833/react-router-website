import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, phone, email} =user
    // go back button use navigate hook

    const navigate = useNavigate()
    const goBackHandler = () => {
       
        navigate(-1)
    }
    return (
        <div className="flex justify-center items-center h-[600px]">
            <div className="text-center border border-blue-500 rounded-lg p-10">
            <h2 className="text-4xl">User Name:{name}</h2>
            <p>User Phone:{phone}</p>
            <p>email address:{email}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={goBackHandler}>Go Back</button>
        </div>
        </div>
    );
};

export default UserDetails;