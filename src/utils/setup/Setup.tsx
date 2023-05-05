import { useWindowSize } from "../../hooks/setupHooks";

export default function Setup() {
    useWindowSize();

    return (
        <div>
            <h1>Setup</h1>
        </div>
    )
}