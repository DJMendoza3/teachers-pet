import { ButtonPrimary } from "components/buttons/Buttons"

export default function Jumbotron() {
    return(
        <div className="bg-gradient-radial from-secondary to-primary flex p-32 min-h-3/4 items-center">
            <div className="text-center max-w-6xl m-auto [&>*]:mb-5">
                <button className="p-2 border-2 border-solid border-gray-800 rounded-full">
                    Early Adopters Get <span className="text-blue-400">50% Off For Life! {'>>'}</span>
                </button>
                <h2 className="text-5xl">We Will Take Care Of The Busy Work So You Can Focus On Teaching!</h2>
                <p>The #1 application used by teachers to help reduce their work load.</p>
                <ButtonPrimary>Try it out</ButtonPrimary>
            </div>
        </div>
    )
}