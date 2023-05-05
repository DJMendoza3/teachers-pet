import {Link} from "react-router-dom";

export default function DesktopNav() {
    return(
        <nav className="bg-gray-600 w-40 h-screen flex flex-col">
            <Link to={""}>Home</Link>
            <Link to={""}>Profile</Link>
            <Link to={""}>Tests</Link>
            <Link to={""}>Generator</Link>
            <Link to={""}>Grading</Link>
            <Link to={""}>Lesson Plans</Link>
        </nav>
    )
}