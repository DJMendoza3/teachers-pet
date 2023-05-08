interface DesktopSidebarProps {
    children: React.ReactNode
}

export default function DesktopSidebar({ children }: DesktopSidebarProps) {
    return(
        <aside className="w-60 bg-gray-600">
            {children}
        </aside>
    )
}