import { useState, useEffect } from "react";
import React from "react";
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
            <React.Fragment key={index}>
              {index !== 0 && (
                <button
                  onClick={() => swapTestBlocks(index, index - 1)}
                  className="text-gray-600 border-solid border-4 border-gray-600 rounded-lg w-10"
                >
                  <svg
                    fill="#000000"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -140 562.392 562.391"
                  >
                    <g>
                      <g>
                        <path
                          d="M123.89,262.141h314.604c19.027,0,17.467-31.347,15.496-47.039c-0.605-4.841-3.636-11.971-6.438-15.967L303.965,16.533
			c-12.577-22.044-32.968-22.044-45.551,0L114.845,199.111c-2.803,3.996-5.832,11.126-6.438,15.967
			C106.43,230.776,104.863,262.141,123.89,262.141z"
                        />
                      </g>
                    </g>
                  </svg>
                </button>
              )}
              <TestBlock
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
                  className="text-gray-600 border-solid border-4 border-gray-600 rounded-lg w-10"
                >
                  <svg
                    fill="#000000"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 140 562.392 562.391"
                  >
                    <g>
                      <g>
                        <path
                          d="M114.845,363.274l143.569,182.584c12.577,22.044,32.968,22.044,45.551,0l143.587-182.609
			c2.804-3.996,5.826-11.119,6.438-15.967c1.971-15.691,3.531-47.038-15.496-47.038H123.89c-19.027,0-17.46,31.365-15.483,47.062
			C109.019,352.147,112.042,359.277,114.845,363.274z"
                        />
                      </g>
                    </g>
                  </svg>
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
      <Sidebar className="w-60 bg-gray-900">
        <GeneratorSettings />
      </Sidebar>
    </>
  );
}
