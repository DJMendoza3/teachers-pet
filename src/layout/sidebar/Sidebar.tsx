import { useAppSelector } from "redux/hooks";

import DesktopSidebar from "./DesktopSidebar";
import MobileSidebar from "./MobileSidebar";

interface SidebarProps {
    children: React.ReactNode
}

export default function Sidebar({ children }: SidebarProps) {
    const windowWidth = useAppSelector(state => state.window.width);
    return(
        <>
            {windowWidth < 768 ? <MobileSidebar>{children}</MobileSidebar> : <DesktopSidebar>{children}</DesktopSidebar>}
        </>
    )
}