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
        <div>
            <h3>Check Out Our Features?</h3>
            <div className="flex max-w-6xl m-auto justify-between">
                <ButtonSecondary onClick={() => SelectFeature(features.tests)}>Tests</ButtonSecondary>
                <ButtonSecondary onClick={() => SelectFeature(features.lessonPlans)}>Lesson Plans</ButtonSecondary>
                <ButtonSecondary onClick={() => SelectFeature(features.assignments)}>Assignments</ButtonSecondary>
                <ButtonSecondary onClick={() => SelectFeature(features.grades)}>Grades</ButtonSecondary>
            </div>
            <div className="flex">
                <div>
                    <h4>{selectedFeature.name}</h4>
                    <p>{selectedFeature.description}</p>
                </div>
                <img src="" alt="" />
            </div>
        </div>
    )
}