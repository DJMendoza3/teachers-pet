interface DesktopSidebarProps {
    children: React.ReactNode
}

export default function DesktopSidebar({ children }: DesktopSidebarProps) {
    return(
        <aside className="w-60">
            {children}
        </aside>
    )
}