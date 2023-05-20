import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { usePostRequest } from "hooks/fetchHooks";
import { useNavigate } from "react-router-dom";

import apple_logo from "src/assets/images/apple-logo.png";

export default function Credentials() {
    const location = useLocation();
    const navigate = useNavigate();
    const {error, loading, postRequest} = usePostRequest();

    //login and register requests
    useEffect(() => {
        document.addEventListener('submit', (event) => {
            event.preventDefault();

            if(location.pathname.split('/')[2] === 'register') {
                const username = (document.getElementById('username') as HTMLInputElement).value;
                const name = (document.getElementById('name') as HTMLInputElement).value;
                const password = (document.getElementById('password') as HTMLInputElement).value;

                const payload = JSON.stringify({
                    username: username,
                    name: name,
                    password: password
                });
                postRequest('register', payload, () => {
                    navigate('/portal');
                });
            } else {
                const username = (document.getElementById('username') as HTMLInputElement).value;
                const password = (document.getElementById('password') as HTMLInputElement).value;

                const payload = JSON.stringify({
                    username: username,
                    password: password
                });
                postRequest('login', payload).then((data) => {
                    if(data) {
                        navigate('/portal');
                    }
                });
            }
        });
    }, [location]);

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