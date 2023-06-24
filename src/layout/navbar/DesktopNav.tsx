import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import apple_logo from "assets/images/apple-logo.png";
import home from "assets/home.svg";
import profile from "assets/profile.svg";
import tests from "assets/tests.svg";
import generator from "assets/generator.svg";
import grading from "assets/grading.svg";
import lessons from "assets/lessons.svg";
import documents from "assets/documents.svg";

export default function DesktopNav() {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();
  //get second part of pathname
  const currentLocation = location.pathname.split("/")[2];

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="flex flex-col items-center w-40 h-screen overflow-hidden text-gray-400 bg-gray-900 fixed">
      <Link className="flex items-center w-full px-3 mt-3" to="#">
        <img src={apple_logo} alt="" className="w-7"/>
        <span className="ml-2 text-sm font-bold">Teachers Pet</span>
      </Link>
      <div className="w-full px-2">
        <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
          <Link
            className={`flex items-center w-full h-12 px-3 mt-2 text-gray-200 ${currentLocation === 'home' && 'bg-gray-700'} rounded`}
            to="/portal"
          >
            <img src={home} alt="" className="w-6 h-6 stroke-slate-200"/>
            <span className="ml-2 text-sm font-medium">Home</span>
          </Link>
          <Link
            className={`flex items-center w-full h-12 px-3 mt-2 text-gray-200 ${currentLocation === 'profile' && 'bg-gray-700'} rounded`}
            to="profile"
          >
            <img src={profile} alt="" className="w-6 h-6 stroke-slate-200"/>
            <span className="ml-2 text-sm font-medium">Profile</span>
          </Link>
          <Link
            className={`flex items-center w-full h-12 px-3 mt-2 text-gray-200 ${currentLocation === 'tests' && 'bg-gray-700'} rounded`}
            to="tests"
          >
            <img src={tests} alt="" className="w-6 h-6 stroke-slate-200"/>
            <span className="ml-2 text-sm font-medium">Tests</span>
          </Link>
          <Link
            className={`flex items-center w-full h-12 px-3 mt-2 text-gray-200 ${currentLocation === 'generator' && 'bg-gray-700'} rounded`}
            to="generator"
          >
            <img src={generator} alt="" className="w-6 h-6 stroke-slate-200"/>
            <span className="ml-2 text-sm font-medium">Generator</span>
          </Link>
        </div>
        <div className="flex flex-col items-center w-full mt-2 border-t border-gray-700">
          <Link
            className={`flex items-center w-full h-12 px-3 mt-2 text-gray-200 ${currentLocation === 'grading' && 'bg-gray-700'} rounded`}
            to="grading"
          >
            <img src={grading} alt="" className="w-6 h-6 stroke-slate-200"/>
            <span className="ml-2 text-sm font-medium">Grading</span>
          </Link>
          <Link
            className={`flex items-center w-full h-12 px-3 mt-2 text-gray-200 ${currentLocation === 'lessonPlans' && 'bg-gray-700'} rounded`}
            to="lessons"
          >
            <img src={lessons} alt="" className="w-6 h-6 stroke-slate-200"/>
            <span className="ml-2 text-sm font-medium">Lesson Plans</span>
          </Link>
          <Link
            className={`flex items-center w-full h-12 px-3 mt-2 text-gray-200 ${currentLocation === 'documents' && 'bg-gray-700'} rounded`}
            to="documents"
          >
            <img src={documents} alt="" className="w-6 h-6 stroke-slate-200"/>
            <span className="ml-2 text-sm font-medium">Documents</span>
          </Link>
        </div>
      </div>
      <Link
        className="flex items-center justify-center w-full h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300"
        to="#"
      >
        <img src={profile} alt="" className="w-6 h-6 stroke-slate-200" />
        <span className="ml-2 text-sm font-medium">Logout</span>
      </Link>
    </nav>
  );
}
