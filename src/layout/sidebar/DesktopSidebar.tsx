interface DesktopSidebarProps {
    children: React.ReactNode
}

export default function DesktopSidebar({ children }: DesktopSidebarProps) {
    return(
        <aside className="w-60">
            <h1>DesktopSidebar</h1>
        </aside>
    )
}