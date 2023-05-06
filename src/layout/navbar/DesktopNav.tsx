import {Link} from "react-router-dom";

export default function DesktopNav() {
    return(
        <nav className="bg-gray-600 w-40 h-screen flex flex-col">
            <Link to={""}>Home</Link>
            <Link to={"profile"}>Profile</Link>
            <Link to={"tests"}>Tests</Link>
            <Link to={"generator"}>Generator</Link>
            <Link to={""}>Grading</Link>
            <Link to={""}>Lesson Plans</Link>
        </nav>
    )
}