import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className=" bg-gray-100 drop-shadow-lg">
           <div className="container mx-auto flex justify-between py-6">
                <div className="text-4xl font-bold">K<span className="text-red-500">N</span>Digitals</div>
                    <div>
                        <ul className="flex gap-5">
                            <Link to='/'>Home</Link>
                            <Link to='/aboutus'>About Us</Link>
                            <Link to='/services'>Services</Link>
                            <Link to='/prices'>Prices</Link>
                            <Link to='/users'>Users</Link>
                            <Link to='/posts'>Posts</Link>
                            
                        </ul>
                    </div>
            </div>
        </div>
    );
};

export default Header;