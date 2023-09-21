import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div className=" flex flex-col  h-screen  ">
            <Header></Header>
            <div className="flex-grow border-blue-500 border ">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;