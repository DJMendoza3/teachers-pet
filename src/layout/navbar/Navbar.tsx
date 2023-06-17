import { useAppSelector } from "../../redux/hooks";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
    const windowWidth = useAppSelector(state => state.window.width);
    return(
        <>
            {windowWidth < 768 ? <MobileNav /> : <><DesktopNav /><div className="w-40"/></>}
        </>
    );
}