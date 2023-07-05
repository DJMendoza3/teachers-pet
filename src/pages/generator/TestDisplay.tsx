import { useState, useEffect } from "react";
import React from "react";
import Sidebar from "layout/sidebar/Sidebar";
import { usePostRequest, useGetRequest } from "hooks/fetchHooks";
import { Test, Question, Answer } from "shared/types";

import GeneratorSettings from "./GeneratorSettings";
import TestBlock from "./TestBlock";
import GeneratorForm from "components/forms/GeneratorForm";
import upArrow from "assets/upArrow.svg";
import downArrow from "assets/downArrow.svg";

export default function TestDisplay() {
  const [testName, setTestName] = useState("Test Name");
  const [testText, setTestText] = useState("Test Text");
  const [testBlocks, setTestBlocks] = useState<Question[]>([]);
  const { postRequest } = usePostRequest();
  const { getRequest } = useGetRequest();
  const tempResponse = `{"TestName":"4th Grade Geometry Test","TestDescription":"A 4/10 difficulty test on Geometry for 4th grade students","Topic":"Geometry","Questions":[{"QuestionText":"What is the sum of the interior angles of a triangle?","Answers":[{"AnswerText":"180 degrees","IsCorrect":true},{"AnswerText":"90 degrees","IsCorrect":false},{"AnswerText":"360 degrees","IsCorrect":false},{"AnswerText":"270 degrees","IsCorrect":false}]},{"QuestionText":"What is the area of a square with a side length of 4?","Answers":[{"AnswerText":"16","IsCorrect":true},{"AnswerText":"2","IsCorrect":false},{"AnswerText":"8","IsCorrect":false},{"AnswerText":"4","IsCorrect":false}]}]}`

  useEffect(() => {
    getRequest("test/1").then((data) => {
      if(data === undefined || data === null) {
        return;
      }
      // setTestName(data.value.testName);
      // setTestText(data.value.text);
      // setTestBlocks(data.value.questions);
    });

    //temp populating test
    const test = JSON.parse(tempResponse) as Test;
    console.log(test);
    setTestName(test.TestName);
    setTestText(test.TestDescription);
    setTestBlocks(test.Questions as Question[]);
  }, []);

  //function for saving the test
  const saveTest = () => {
    const test = {
      testName: 'new test',
      text: 'testing',
      questions: testBlocks,
    };
    postRequest("test", JSON.stringify(test));
  };

  //function for adding a new text block to the test
  const addTestBlock = () => {
    setTestBlocks([
      ...testBlocks,
      {
        QuestionText: "Question Here",
        Answers: [{AnswerText: "Answer Here", IsCorrect: false}],
      },
    ]);
  };

  //function to swap the position of two test blocks
  const swapTestBlocks = (index1: number, index2: number) => {
    const temp = testBlocks[index1];
    testBlocks[index1] = testBlocks[index2];
    testBlocks[index2] = temp;
    setTestBlocks([...testBlocks]);
  };

  return (
    <>
      <section className="flex-1 max-h-screen overflow-auto flex flex-col gap-4 items-center pt-10 pb-10 scrollbar">
        <h1 className="text-5xl">{testName}</h1>
        <button onClick={() => saveTest()} className="text-gray-600 border-solid border-4 border-gray-600 p-2 rounded-lg self-end">Save</button>
        <p>{testText}</p>
        {testBlocks.map((testBlock, index) => {
          return (
            <React.Fragment key={index}>
              {index !== 0 && (
                <button
                  onClick={() => swapTestBlocks(index, index - 1)}
                  className="text-gray-600 border-solid border-4 border-gray-600 rounded-lg w-10"
                >
                 <img src={upArrow} alt="move test block up" />
                </button>
              )}
              <TestBlock
                text={testBlock.QuestionText}
                answers={testBlock.Answers}
                questionNumber={index + 1}
                testBlocks={testBlocks}
                setTestBlocks={setTestBlocks}
              />
              {index !== testBlocks.length - 1 && (
                <button
                  onClick={() => swapTestBlocks(index, index + 1)}
                  className="text-gray-600 border-solid border-4 border-gray-600 rounded-lg w-10"
                >
                  <img src={downArrow} alt="move test block down" />
                </button>
              )}
            </React.Fragment>
          );
        })}
        <button
          onClick={() => addTestBlock()}
          className="text-gray-600 border-solid border-4 border-gray-600 p-2 rounded-lg"
        >
          Add Test Block
        </button>
      </section>
      <Sidebar className="w-60 bg-gray-900 h-screen">
        <GeneratorForm />
      </Sidebar>
    </>
  );
}
