import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import apple_logo from "assets/images/apple-logo.png";

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
            <svg
              className="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="ml-2 text-sm font-medium">Home</span>
          </Link>
          <Link
            className={`flex items-center w-full h-12 px-3 mt-2 text-gray-200 ${currentLocation === 'profile' && 'bg-gray-700'} rounded`}
            to="profile"
          >
            <svg
              className="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="ml-2 text-sm font-medium">Profile</span>
          </Link>
          <Link
            className={`flex items-center w-full h-12 px-3 mt-2 text-gray-200 ${currentLocation === 'tests' && 'bg-gray-700'} rounded`}
            to="tests"
          >
            <svg
              className="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="ml-2 text-sm font-medium">Tests</span>
          </Link>
          <Link
            className={`flex items-center w-full h-12 px-3 mt-2 text-gray-200 ${currentLocation === 'generator' && 'bg-gray-700'} rounded`}
            to="generator"
          >
            <svg
              className="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            <span className="ml-2 text-sm font-medium">Generator</span>
          </Link>
        </div>
        <div className="flex flex-col items-center w-full mt-2 border-t border-gray-700">
          <Link
            className={`flex items-center w-full h-12 px-3 mt-2 text-gray-200 ${currentLocation === 'grading' && 'bg-gray-700'} rounded`}
            to="grading"
          >
            <svg
              className="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M 16.5 5.570312 L 15.855469 5.570312 C 15.855469 5.230469 15.722656 4.902344 15.480469 4.660156 C 15.238281 4.421875 14.914062 4.285156 14.570312 4.285156 L 14.21875 4.285156 C 13.996094 3.894531 13.671875 3.570312 13.28125 3.34375 C 12.894531 3.117188 12.449219 3 12 3 C 11.550781 3 11.109375 3.117188 10.71875 3.34375 C 10.328125 3.570312 10.007812 3.894531 9.78125 4.285156 L 9.429688 4.285156 C 9.085938 4.285156 8.761719 4.421875 8.519531 4.660156 C 8.277344 4.902344 8.144531 5.230469 8.144531 5.570312 L 7.5 5.570312 C 6.988281 5.570312 6.496094 5.773438 6.136719 6.136719 C 5.773438 6.496094 5.570312 6.988281 5.570312 7.5 L 5.570312 19.070312 C 5.570312 19.582031 5.773438 20.074219 6.136719 20.433594 C 6.496094 20.796875 6.988281 21 7.5 21 L 16.5 21 C 17.011719 21 17.503906 20.796875 17.863281 20.433594 C 18.226562 20.074219 18.429688 19.582031 18.429688 19.070312 L 18.429688 7.5 C 18.429688 6.988281 18.226562 6.496094 17.863281 6.136719 C 17.503906 5.773438 17.011719 5.570312 16.5 5.570312 Z M 9.429688 5.570312 L 10.191406 5.570312 C 10.320312 5.570312 10.453125 5.53125 10.558594 5.453125 C 10.667969 5.375 10.75 5.269531 10.792969 5.144531 C 10.882812 4.890625 11.042969 4.675781 11.261719 4.519531 C 11.476562 4.367188 11.734375 4.285156 12 4.285156 C 12.265625 4.285156 12.523438 4.367188 12.738281 4.519531 C 12.957031 4.675781 13.117188 4.890625 13.207031 5.144531 C 13.25 5.269531 13.332031 5.375 13.441406 5.453125 C 13.546875 5.53125 13.679688 5.570312 13.808594 5.570312 L 14.570312 5.570312 L 14.570312 6.855469 L 9.429688 6.855469 Z M 17.144531 19.070312 C 17.144531 19.242188 17.074219 19.40625 16.953125 19.527344 C 16.835938 19.648438 16.671875 19.714844 16.5 19.714844 L 7.5 19.714844 C 7.328125 19.714844 7.164062 19.648438 7.046875 19.527344 C 6.925781 19.40625 6.855469 19.242188 6.855469 19.070312 L 6.855469 7.5 C 6.855469 7.328125 6.925781 7.164062 7.046875 7.042969 C 7.164062 6.925781 7.328125 6.855469 7.5 6.855469 L 8.144531 6.855469 C 8.144531 7.199219 8.277344 7.523438 8.519531 7.765625 C 8.761719 8.007812 9.085938 8.140625 9.429688 8.140625 L 14.570312 8.140625 C 14.914062 8.140625 15.238281 8.007812 15.480469 7.765625 C 15.722656 7.523438 15.855469 7.199219 15.855469 6.855469 L 16.5 6.855469 C 16.671875 6.855469 16.835938 6.925781 16.953125 7.042969 C 17.074219 7.164062 17.144531 7.328125 17.144531 7.5 Z M 17.144531 19.070312 " />
              <path d="M 9.429688 10.714844 L 8.785156 10.714844 C 8.613281 10.714844 8.453125 10.78125 8.332031 10.902344 C 8.210938 11.023438 8.144531 11.1875 8.144531 11.355469 C 8.144531 11.527344 8.210938 11.691406 8.332031 11.8125 C 8.453125 11.929688 8.613281 12 8.785156 12 L 9.429688 12 C 9.597656 12 9.761719 11.929688 9.882812 11.8125 C 10.003906 11.691406 10.070312 11.527344 10.070312 11.355469 C 10.070312 11.1875 10.003906 11.023438 9.882812 10.902344 C 9.761719 10.78125 9.597656 10.714844 9.429688 10.714844 Z M 9.429688 10.714844 " />
              <path d="M 15.214844 10.714844 L 11.355469 10.714844 C 11.1875 10.714844 11.023438 10.78125 10.902344 10.902344 C 10.78125 11.023438 10.714844 11.1875 10.714844 11.355469 C 10.714844 11.527344 10.78125 11.691406 10.902344 11.8125 C 11.023438 11.929688 11.1875 12 11.355469 12 L 15.214844 12 C 15.386719 12 15.546875 11.929688 15.667969 11.8125 C 15.789062 11.691406 15.855469 11.527344 15.855469 11.355469 C 15.855469 11.1875 15.789062 11.023438 15.667969 10.902344 C 15.546875 10.78125 15.386719 10.714844 15.214844 10.714844 Z M 15.214844 10.714844 " />
              <path d="M 9.429688 13.285156 L 8.785156 13.285156 C 8.613281 13.285156 8.453125 13.351562 8.332031 13.472656 C 8.210938 13.59375 8.144531 13.757812 8.144531 13.929688 C 8.144531 14.097656 8.210938 14.261719 8.332031 14.382812 C 8.453125 14.503906 8.613281 14.570312 8.785156 14.570312 L 9.429688 14.570312 C 9.597656 14.570312 9.761719 14.503906 9.882812 14.382812 C 10.003906 14.261719 10.070312 14.097656 10.070312 13.929688 C 10.070312 13.757812 10.003906 13.59375 9.882812 13.472656 C 9.761719 13.351562 9.597656 13.285156 9.429688 13.285156 Z M 9.429688 13.285156 " />
              <path d="M 15.214844 13.285156 L 11.355469 13.285156 C 11.1875 13.285156 11.023438 13.351562 10.902344 13.472656 C 10.78125 13.59375 10.714844 13.757812 10.714844 13.929688 C 10.714844 14.097656 10.78125 14.261719 10.902344 14.382812 C 11.023438 14.503906 11.1875 14.570312 11.355469 14.570312 L 15.214844 14.570312 C 15.386719 14.570312 15.546875 14.503906 15.667969 14.382812 C 15.789062 14.261719 15.855469 14.097656 15.855469 13.929688 C 15.855469 13.757812 15.789062 13.59375 15.667969 13.472656 C 15.546875 13.351562 15.386719 13.285156 15.214844 13.285156 Z M 15.214844 13.285156 " />
              <path d="M 9.429688 15.855469 L 8.785156 15.855469 C 8.613281 15.855469 8.453125 15.925781 8.332031 16.042969 C 8.210938 16.164062 8.144531 16.328125 8.144531 16.5 C 8.144531 16.667969 8.210938 16.832031 8.332031 16.953125 C 8.453125 17.074219 8.613281 17.140625 8.785156 17.140625 L 9.429688 17.140625 C 9.597656 17.140625 9.761719 17.074219 9.882812 16.953125 C 10.003906 16.832031 10.070312 16.667969 10.070312 16.5 C 10.070312 16.328125 10.003906 16.164062 9.882812 16.042969 C 9.761719 15.925781 9.597656 15.855469 9.429688 15.855469 Z M 9.429688 15.855469 " />
              <path d="M 15.214844 15.855469 L 11.355469 15.855469 C 11.1875 15.855469 11.023438 15.925781 10.902344 16.042969 C 10.78125 16.164062 10.714844 16.328125 10.714844 16.5 C 10.714844 16.667969 10.78125 16.832031 10.902344 16.953125 C 11.023438 17.074219 11.1875 17.140625 11.355469 17.140625 L 15.214844 17.140625 C 15.386719 17.140625 15.546875 17.074219 15.667969 16.953125 C 15.789062 16.832031 15.855469 16.667969 15.855469 16.5 C 15.855469 16.328125 15.789062 16.164062 15.667969 16.042969 C 15.546875 15.925781 15.386719 15.855469 15.214844 15.855469 Z M 15.214844 15.855469 " />
            </svg>

            <span className="ml-2 text-sm font-medium">Grading</span>
          </Link>
          <Link
            className={`flex items-center w-full h-12 px-3 mt-2 text-gray-200 ${currentLocation === 'lessonPlans' && 'bg-gray-700'} rounded`}
            to="lessons"
          >
            <svg
              className="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            <span className="ml-2 text-sm font-medium">Lesson Plans</span>
          </Link>
          <Link
            className={`flex items-center w-full h-12 px-3 mt-2 text-gray-200 ${currentLocation === 'documents' && 'bg-gray-700'} rounded`}
            to="documents"
          >
            <svg
              className="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
              />
            </svg>
            <span className="ml-2 text-sm font-medium">Documents</span>
          </Link>
        </div>
      </div>
      <Link
        className="flex items-center justify-center w-full h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300"
        to="#"
      >
        <svg
          className="w-6 h-6 stroke-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="ml-2 text-sm font-medium">Logout</span>
      </Link>
    </nav>
  );
}
