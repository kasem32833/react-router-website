import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, phone, email} =user
    return (
        <div className="flex justify-center items-center h-[600px]">
            <div className="text-center border border-blue-500 rounded-lg p-10">
            <h2 className="text-4xl">User Name:{name}</h2>
            <p>User Phone:{phone}</p>
            <p>email address:{email}</p>
        </div>
        </div>
    );
};

export default UserDetails;