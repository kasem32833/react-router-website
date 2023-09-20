import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {

    const users = useLoaderData();
    console.log(users);

    return (
        <div>
            <h2 className="text-2xl">Users:{users.length}</h2>
            <p>This is our fantastic users</p>

            <div className="grid md:grid-cols-3">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;