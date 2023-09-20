
import { Link } from 'react-router-dom';
import './userStyle.css'
const User = ({user}) => {
    const {id, name, email, phone, website} = user;


    return (
        <div className="user-style">
            <h5 className="text-lg">User Name:{name}</h5>
            <p>email address:{email}</p>
            <p>phone number: {phone}</p>
            <p className='mb-10'><small>web-address:{website}</small></p>
            <Link to={`/users/${id}`} className="bg-blue-500 text-white px-4 py-2 rounded-md ">Show Details</Link>
        </div>
    );
};

export default User;