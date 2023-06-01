import { ButtonPrimary } from "components/buttons/Buttons"

export default function Jumbotron() {
    return(
        <div className="bg-gradient-to-r from-primary via-secondary to-primary flex p-32 min-h-3/4 items-center">
            <div className="md:w-6/12">
                <h2 className="text-5xl">We Will Take Care Of The Busy Work So You Can Focus On Teaching!</h2>
                <p>The #1 application used by teachers to help lesson their work load.</p>
                <ButtonPrimary>Try it out</ButtonPrimary>
            </div>
            <div className="md:w-6/12">
                <img src="" alt="" />
            </div>
        </div>
    )
}