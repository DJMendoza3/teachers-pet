type ButtonProps = {
    children: string;
    className?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
}

export function ButtonSecondary({className, children, onClick, onMouseEnter}: ButtonProps) {
    return (
        <button onClick={onClick} onMouseEnter={onMouseEnter} className={` ${className}`}>{children}</button>
    )
}

export function ButtonPrimary({children, onClick, className=''}: ButtonProps) {
    return (
        <button onClick={onClick} className={`bg-primary text-white rounded-md p-2 drop-shadow-cartoon ${className}`}>{children}</button>
    )
}