interface ContainerProps {
    setup?: React.ReactNode
    children: React.ReactNode
}

export default function Container({ setup, children }: ContainerProps) {
    return (
        <div>
            {setup}
            {children}
        </div>
    )
}