import { useState, useEffect } from "react";

import Sidebar from "layout/sidebar/Sidebar";

import GeneratorSettings from "./GeneratorSettings";
import TestBlock from "./TestBlock";

//convert test blocks to classes later on

export default function TestDisplay() {
  const [testBlocks, setTestBlocks] = useState([
    {
      question: "What is the capital of the United States?",
      answers: ["Washington D.C.", "New York City", "Los Angeles", "Chicago"],
      correctAnswer: "Washington D.C.",
    },
  ]);

  //function for adding a new text block to the test
  const addTestBlock = () => {
    setTestBlocks([
      ...testBlocks,
      {
        question: "Question Here",
        answers: ["Answers"],
        correctAnswer: "Correct Answer",
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
      <section className="flex-1 max-h-screen overflow-auto flex flex-col gap-4 items-center">
        <h1 className="text-5xl">Auto Generated Name Of Test</h1>
        {testBlocks.map((testBlock, index) => {
          return (
            <>
              {index !== 0 && (
                <button
                  onClick={() => swapTestBlocks(index, index - 1)}
                  className="text-gray-600 border-solid border-4 border-gray-600 p-2 rounded-lg"
                >
                  Move Up
                </button>
              )}
              <TestBlock
                key={index}
                question={testBlock.question}
                answers={testBlock.answers}
                correctAnswer={testBlock.correctAnswer}
                questionNumber={index + 1}
                testBlocks={testBlocks}
                setTestBlocks={setTestBlocks}
              />
              {index !== testBlocks.length - 1 && (
                <button
                  onClick={() => swapTestBlocks(index, index + 1)}
                  className="text-gray-600 border-solid border-4 border-gray-600 p-2 rounded-lg"
                >
                  Move Down
                </button>
              )}
            </>
          );
        })}
        <button
          onClick={() => addTestBlock()}
          className="text-gray-600 border-solid border-4 border-gray-600 p-2 rounded-lg"
        >
          Add Test Block
        </button>
      </section>
      <Sidebar>
        <GeneratorSettings />
      </Sidebar>
    </>
  );
}

//break these components out into seperate files once logic is done

