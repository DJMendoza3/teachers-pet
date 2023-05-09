import {useState} from "react";
import {Link} from "react-router-dom";

import company_logo from "assets/company_logo.png";
import hamburger from "assets/hamburger.png";
import home_icon from "assets/home_icon.png";
import profile_icon from "assets/profile_icon.png";
import main_icon from "assets/main_icon.png";

export default function DesktopNav() {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    }

    return(
        <nav className={`bg-gray-600 ${navOpen ? 'w-60' : 'w-14'} h-screen flex flex-col transition-width duration-200 ease-in-out overflow-hidden`}>
            <div className="flex flex-row">
                <button onClick={() => toggleNav()} className="w-5 h-5"><img src={hamburger} alt="" /></button>
            </div>
            
            <Link to={""} className="flex"> <img src={home_icon} alt="" className="w-14"/> Home</Link>
            <Link to={"profile"} className="flex"> <img src={profile_icon} alt="" className="w-14"/> Profile</Link>
            <Link to={"tests"} className="flex"> <img src={main_icon} alt="" className="w-14"/> Tests</Link>
            <Link to={"generator"} className="flex"> <img src={main_icon} alt="" className="w-14"/> Generator</Link>
            <Link to={""} className="flex"> <img src={main_icon} alt="" className="w-14"/> Grading</Link>
            <Link to={""} className="flex"> <img src={main_icon} alt="" className="w-14"/> Lesson Plans</Link>
        </nav>
    )
}