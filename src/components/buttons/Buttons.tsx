type ButtonProps = {
    children: string;
    onClick?: () => void;
}

export function ButtonSecondary({children, onClick}: ButtonProps) {
    return (
        <button onClick={onClick} className="bg-secondary text-white rounded-md p-2">{children}</button>
    )
}

export function ButtonPrimary({children, onClick}: ButtonProps) {
    return (
        <button onClick={onClick} className="bg-primary text-white rounded-md p-2">{children}</button>
    )
}