import Form from "lib/ezforms-react/Form";
import { LoginForm } from "lib/ezforms-react/forms";

export default function Login() {
    return(
        <section>
            <Form formStyle={LoginForm}/>
        </section>
    );
}