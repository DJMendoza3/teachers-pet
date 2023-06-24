import {useState} from 'react';

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
        <section className='min-h-3/4 bg-slate-300'>
            <h3 className='text-center max-w-lg text-3xl m-auto'>Generate everything from testing materials to planning and classroom materials</h3>
            <div className="flex max-w-6xl m-auto justify-between">
                <ButtonSecondary onClick={() => SelectFeature(features.tests)}>Tests</ButtonSecondary>
                <ButtonSecondary onClick={() => SelectFeature(features.lessonPlans)}>Lesson Plans</ButtonSecondary>
                <ButtonSecondary onClick={() => SelectFeature(features.assignments)}>Assignments</ButtonSecondary>
                <ButtonSecondary onClick={() => SelectFeature(features.grades)}>Grades</ButtonSecondary>
            </div>
            <div className="flex max-w-6xl m-auto">
                <div>
                    <h4>{selectedFeature.name}</h4>
                    <p>{selectedFeature.description}</p>
                </div>
                <img src="" alt="" />
            </div>
        </section>
    )
}