import { useAppSelector } from "redux/hooks";

import apple_logo from "assets/images/apple-logo.png";

export default function TopbarNav() {

    const windowWidth = useAppSelector(state => state.window.width);

    return (
        <nav className="flex bg-primary w-screen h-12 items-center drop-shadow-lg static">
            <div className="flex">
                <img src={apple_logo} alt="" className="h-12"/>
                <h1>
                    Teachers Pet
                </h1>
            </div>
            {
                windowWidth > 768 ? (
                    <ul className="flex">
                        <li>Features</li>
                        <li>Product Guide</li>
                        <li>Templates</li>
                        <li>Pricing</li>
                        <li>FAQ</li>
                    </ul>
                ) : (
                    null
                )
            }
            <button>
                Sign Up
            </button>
        </nav>
    );
}