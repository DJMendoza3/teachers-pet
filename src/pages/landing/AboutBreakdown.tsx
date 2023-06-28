import {useState, useEffect} from 'react';

import AboutUiComponent from './AboutUiComponent';
import { ButtonSecondary } from 'components/buttons/Buttons';

export default function AboutBreakdown() {
    const features = {tests: {name: 'Tests', description: 'testing', img: ''}, lessonPlans: {name: 'Lesson Plans', description: 'testing', img: ''}, assignments: {name: 'Assignments', description: 'testing', img: ''}, grades: {name: 'Grades', description: 'testing', img: ''}};

    const [selectedFeature, setSelectedFeature] = useState(features.tests);

    type Feature = {
        name: string;
        img: string;
        description: string;
    }

    function SelectFeature(feature: Feature) {
        setSelectedFeature(feature);
    }

    return (
        <section id='about-brakedown' className='min-h-3/4 bg-slate-300 flex p-36'>
            <div className=" max-w-md m-auto font-baskerville text-4xl [&>button]:mb-10">
                <ButtonSecondary className="w-full" onMouseEnter={() => SelectFeature(features.tests)}>Tests</ButtonSecondary>
                <ButtonSecondary className="w-full" onMouseEnter={() => SelectFeature(features.lessonPlans)}>Lesson Plans</ButtonSecondary>
                <ButtonSecondary className="w-full" onMouseEnter={() => SelectFeature(features.assignments)}>Assignments</ButtonSecondary>
                <ButtonSecondary className="w-full" onMouseEnter={() => SelectFeature(features.grades)}>Grades</ButtonSecondary>
            </div>
            <div className="w-full min-h-1/2 rounded-md p-10 m-auto bg-blue-200 flex">
                <div>
                    <h5>{selectedFeature.name}</h5>
                </div>
                <AboutUiComponent width="w-10" height="h-10"> {selectedFeature.name} </AboutUiComponent>
            </div>
        </section>
    )
}