import { useState, useEffect } from "react";

import Sidebar from "../../layout/sidebar/Sidebar";

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

  return (
    <>
      <section className="flex-1 max-h-screen overflow-auto flex flex-col gap-4 items-center">
        <h1 className="text-5xl">Auto Generated Name Of Test</h1>
        {testBlocks.map((testBlock, index) => {
          return (
            <TestBlock
              key={index}
              question={testBlock.question}
              answers={testBlock.answers}
              correctAnswer={testBlock.correctAnswer}
              questionNumber={index + 1}
              testBlocks={testBlocks}
              setTestBlocks={setTestBlocks}
            />
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
        <p>Test Display</p>
      </Sidebar>
    </>
  );
}

//break these components out into seperate files once logic is done
interface TestBlockProps {
  question: string;
  answers: string[];
  correctAnswer: string;
  questionNumber: number;
  testBlocks: {
    question: string;
    answers: string[];
    correctAnswer: string;
  }[];
  setTestBlocks: React.Dispatch<
    React.SetStateAction<
      {
        question: string;
        answers: string[];
        correctAnswer: string;
      }[]
    >
  >;
}

function TestBlock({
  question,
  answers,
  correctAnswer,
  questionNumber,
  testBlocks,
  setTestBlocks,
}: TestBlockProps) {
  //function for deleting a test block
  const deleteTestBlock = () => {
    setTestBlocks(
      testBlocks.filter((testBlock, index) => index !== questionNumber - 1)
    );
  };

  //function for editing a test block, needs the field and the new value
  const editTestBlock = () => {
    setTestBlocks(
      testBlocks.map((testBlock, index) => {
        if (index === questionNumber - 1) {
          return {
            ...testBlock,
            question: "Question Changed",
          };
        }
        return testBlock;
      })
    );
  };

  //transform answer item into input field for editing



  return (
    <div className="w-10/12 border-solid border-4 border-gray-600 rounded-lg p-8">
      <button
        onClick={() => deleteTestBlock()}
        className="text-gray-600 border-solid border-4 border-gray-600 p-2 rounded-lg"
      >
        Delete Test Block
      </button>
      <button
        onClick={() => editTestBlock()}
        className="text-gray-600 border-solid border-4 border-gray-600 p-2 rounded-lg"
      >
        Edit Test Block
      </button>
      <h3 className="text-4xl">Question: {questionNumber}</h3>
      <p>{question}</p>
      <ol className="list-decimal">
        {answers.map((answer, index) => {
          return <li key={index}>{answer}</li>;
        })}
      </ol>
      <p>{correctAnswer}</p>
    </div>
  );
}
