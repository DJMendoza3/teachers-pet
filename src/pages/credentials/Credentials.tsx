import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { usePostRequest, useGetRequest } from "hooks/fetchHooks";
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
            const form = document.querySelector('form');
            const formData = new FormData(form as HTMLFormElement);

            if(location.pathname.split('/')[2] === 'register') {
                postRequest('register', formData).then((data) => {
                    if(data) {
                        navigate('/portal');
                    }
                });
            } else {
                postRequest('login', formData).then((data) => {
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