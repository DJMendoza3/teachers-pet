import { useAppSelector } from "redux/hooks";

import DesktopSidebar from "./DesktopSidebar";
import MobileSidebar from "./MobileSidebar";

type SidebarProps = {
    children: React.ReactNode,
    className: string,
}

export default function Sidebar({ children, className }: SidebarProps) {
    const windowWidth = useAppSelector(state => state.window.width);
    return(
        <aside className={className}>
            {windowWidth < 768 ? <MobileSidebar>{children}</MobileSidebar> : <DesktopSidebar>{children}</DesktopSidebar>}
        </aside>
    )
}