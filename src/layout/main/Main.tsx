interface MainProps {
    children: React.ReactNode
}

export default function Main({ children }: MainProps) {
    return(
        <div>
            <h1>Main</h1>
            {children}
        </div>
    )
}