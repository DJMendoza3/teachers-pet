import { ButtonPrimary } from "components/buttons/Buttons"

import grades_icon from "assets/images/grades_icon.png"
import tests_icon from "assets/images/tests_icon.png"
import lessons_icon from "assets/images/lessons_icon.png"
import calendar_icon from "assets/images/calendar_icon.png"

export default function Jumbotron() {
    return(
        <div className=" bg-gray-200 flex p-32 min-h-jumbotron items-center">
            <img src={grades_icon} alt="" className="absolute w-40 top-40 drop-shadow-cartoon"/>
            <img src={tests_icon} alt="" className="absolute w-36 bottom-40 right-40 drop-shadow-cartoon"/>
            <img src={lessons_icon} alt="" className="absolute w-36 bottom-40 left-80 drop-shadow-cartoon"/>
            <img src={calendar_icon} alt="" className="absolute w-60 top-32 right-80 drop-shadow-cartoon"/>

            <div className="text-center max-w-5xl m-auto [&>*]:mb-5 font-baskerville">
                <button className="p-2 border-2 border-solid border-gray-800 rounded-full">
                    Early Adopters Get <span className="text-blue-400">50% Off For Life! {'>>'}</span>
                </button>
                <h2 className="text-5xl ">We Will Take Care Of The Busy Work So You Can Focus On Teaching!</h2>
                <p>The #1 application used by teachers to help reduce their work load.</p>
                <ButtonPrimary>Try it out</ButtonPrimary>
            </div>
        </div>
    )
}