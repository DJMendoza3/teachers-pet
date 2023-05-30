import Form from "lib/ezforms-react/Form"
import { TestCreatorForm } from "components/forms/forms"

export default function TestCreator() {
    return (
        <section className="w-10/12 h-screen m-auto flex flex-col justify-center">
            <Form form={TestCreatorForm} />
        </section>
    )
}