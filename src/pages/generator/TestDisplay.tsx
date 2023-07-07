import React from "react";
import Sidebar from "layout/sidebar/Sidebar";
import { usePostRequest, useGetRequest } from "hooks/fetchHooks";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { setTestBlock } from "redux/slices/testSlice";

import TestBlock from "./TestBlock";
import GeneratorForm from "components/forms/GeneratorForm";
import upArrow from "assets/upArrow.svg";
import downArrow from "assets/downArrow.svg";

export default function TestDisplay() {
  const dispatch = useAppDispatch();
  const testName = useAppSelector((state) => state.test.currentTest.TestName);
  const testText = useAppSelector(
    (state) => state.test.currentTest.TestDescription
  );
  const testBlocks = useAppSelector(
    (state) => state.test.currentTest.Questions
  );
  const { postRequest } = usePostRequest();

  //function for saving the test
  const saveTest = () => {
    const test = {
      testName: "new test",
      text: "testing",
      questions: testBlocks,
    };
    postRequest("test", JSON.stringify(test));
  };

  //function for adding a new text block to the test
  const addTestBlock = () => {
    dispatch(setTestBlock([
      ...testBlocks,
      {
        QuestionText: "Question Here",
        Answers: [{ AnswerText: "Answer Here", IsCorrect: false }],
      },
    ]));
  };

  //function to swap the position of two test blocks (not working for some reason)
  const swapTestBlocks = (index1: number, index2: number) => {
    const tempBlocks = [...testBlocks];
    const tempBlock = tempBlocks[index1];
    tempBlocks[index1] = tempBlocks[index2];
    tempBlocks[index2] = tempBlock;
    dispatch(setTestBlock(tempBlocks));
  };

  return (
    <>
      <section className="flex-1 max-h-screen overflow-auto flex flex-col gap-4 items-center pt-10 pb-10 scrollbar">
        <h1 className="text-5xl">{testName}</h1>
        <button
          onClick={() => saveTest()}
          className="text-gray-600 border-solid border-4 border-gray-600 p-2 rounded-lg self-end"
        >
          Save
        </button>
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
