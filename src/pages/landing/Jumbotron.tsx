import { ButtonPrimary } from "components/buttons/Buttons"

export default function Jumbotron() {
    return(
        <div className="bg-gradient-to-r from-primary via-secondary to-primary w-screen flex">
            <div className="md:w-6/12">
                <h2 className="text-5xl">We Will Take Care Of The Busy Work So You Can Focus On Teaching!</h2>
                <p>Teachers Pet is a web application that allows teachers to create and manage their lesson plans, assignments, tests, and grades all in one place.</p>
                <ButtonPrimary>Try it out</ButtonPrimary>
            </div>
            <div className="md:w-6/12">
                <img src="" alt="" />
            </div>
        </div>
    )
}