import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import apple_logo from "src/assets/images/apple-logo.png";

export default function Credentials() {
    return(
        <section className="bg-login-bg bg-cover h-screen w-full flex justify-center items-center">
            <div className="md:w-1/3 bg-white p-10 rounded-md ">
                <img src={apple_logo} alt="" className="m-auto"/>
                <Outlet />
                <Link to=''>Forgot your password?</Link>
                <Link to='register'>Create an account!</Link>
            </div>
        </section>
    );
}