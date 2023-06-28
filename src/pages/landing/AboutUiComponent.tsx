type AboutUiComponentProps = {
    width: string;
    height: string;
    children: JSX.Element;
}

export default function AboutUiComponent({width, height, children}: AboutUiComponentProps) {
    return(
        <section className={`bg-gray-300 rounded-md p-10 ${width} ${height}`}>
            {children}
        </section>
    )
}