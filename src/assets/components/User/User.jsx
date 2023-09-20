
import './userStyle.css'
const User = ({user}) => {
    const {id, name, email, phone, website} = user;


    return (
        <div className="user-style">
            <h5 className="text-lg">User Name:{name}</h5>
            <p>email address:{email}</p>
            <p>phone number: {phone}</p>
            <p><small>web-address:{website}</small></p>
        </div>
    );
};

export default User;