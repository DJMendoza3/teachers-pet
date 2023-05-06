import Sidebar from "../../layout/sidebar/Sidebar";

export default function TestDisplay() {
    return(
        <>
            <section className="flex-1 max-h-screen overflow-auto">
                <h1>Test Display</h1>
            </section>
            <Sidebar>
                <p>Test Display</p>
            </Sidebar>
        </>
    );
}

//break these components out into seperate files once logic is done