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
/*
  FETCH SENDS THE FOLLOWING:
  {
  "id": 0,
  "testName": "string",
  "text": "string",
  "questions": [
    {
      "text": " What is the main function of a cell?",
      "answers": [
        {
          "text": "Atom",
          "isCorrect": false
        },
        {
          "text": "Molecule",
          "isCorrect": false
        },
        {
          "text": "Cell",
          "isCorrect": true
        },
        {
          "text": "Virus",
          "isCorrect": false
        }
      ]
    },
    {
      "text": What is the reproduction function of a cell?",
      "answers": [
        {
          "text": "Reproduce",
          "isCorrect": true
        },
        {
          "text": "Store energy",
          "isCorrect": false
        },
        {
          "text": "Move",
          "isCorrect": false
        },
        {
          "text": "Communicate",
          "isCorrect": false
        }
      ]
    }
  ]
}

*/ 
export default function TestDisplay() {
  const [testName, setTestName] = useState("Test Name");
  const [testText, setTestText] = useState("Test Text");
  const [testBlocks, setTestBlocks] = useState<Question[]>([]);
  const { postRequest } = usePostRequest();
  const { getRequest } = useGetRequest();

  const questions = [
    {
      "text": " What is the main function of a cell?",
      "answers": [
        {
          "text": "Atom",
          "isCorrect": false
        },
        {
          "text": "Molecule",
          "isCorrect": false
        },
        {
          "text": "Cell",
          "isCorrect": true
        },
        {
          "text": "Virus",
          "isCorrect": false
        }
      ]
    },
    {
      "text": "what is the reproduction function of a cell?",
      "answers": [
        {
          "text": "Reproduce",
          "isCorrect": true
        },
        {
          "text": "Store energy",
          "isCorrect": false
        },
        {
          "text": "Move",
          "isCorrect": false
        },
        {
          "text": "Communicate",
          "isCorrect": false
        }
      ]
    }
  ] as Question[];

  useEffect(() => {
    getRequest("test/1").then((data) => {
      if(data === undefined || data === null) {
        return;
      }
      setTestName(data.value.testName);
      setTestText(data.value.text);
      setTestBlocks(data.value.questions);
    });

    //temp population for testing
    setTestBlocks(questions);
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
        text: "Question Here",
        answers: [{text: "Answer Here", isCorrect: false}],
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
                text={testBlock.text}
                answers={testBlock.answers}
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
