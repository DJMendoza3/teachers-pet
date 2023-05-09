interface MobileSidebarProps {
    children: React.ReactNode
}

export default function MobileSidebar({ children }: MobileSidebarProps) {
    return(
        <aside className="fixed bottom-0 w-full">
            <h1>MobileSidebar</h1>
        </aside>
    )
}