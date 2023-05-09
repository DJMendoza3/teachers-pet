import { useState } from "react";
import React from "react";
import EditableAnswerItem from "./EditableAnswerItem";

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

export default function TestBlock({
  question,
  answers,
  correctAnswer,
  questionNumber,
  testBlocks,
  setTestBlocks,
}: TestBlockProps) {
  const [questionEditable, setQuestionEditable] = useState(false);
  const [questionValue, setQuestionValue] = useState(question);
  //function for deleting a test block
  const deleteTestBlock = () => {
    setTestBlocks(
      testBlocks.filter((testBlock, index) => index !== questionNumber - 1)
    );
  };

  //function for editing the question in the test block
  const editQuestion = (value: string) => {
    setTestBlocks(
      testBlocks.map((testBlock, index) => {
        if (index === questionNumber - 1) {
          return {
            ...testBlock,
            question: value,
          };
        }
        return testBlock;
      })
    );
  };

  //function for editing an answer in the test block, needs the answer number and the new value
  const editAnswer = (number: number, value: string) => {
    console.log(number, value);
    setTestBlocks(
      testBlocks.map((testBlock, index) => {
        if (index === questionNumber - 1) {
          return {
            ...testBlock,
            answers: testBlock.answers.map((answer, index) => {
              if (index === number) {
                return value;
              }
              return answer;
            }),
          };
        }
        return testBlock;
      })
    );
  };

  //function for turning the questoin into an input field
  const toggleQuestionEditable = () => {
    setQuestionEditable(!questionEditable);
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuestionValue(e.target.value);
  }

  //Add a new answer to the test block
  const addAnswer = () => {
    setTestBlocks(
      testBlocks.map((testBlock, index) => {
        if (index === questionNumber - 1) {
          return {
            ...testBlock,
            answers: [...testBlock.answers, "New Answer"],
          };
        }
        return testBlock;
      })
    );
  };

  //delete an answer from the test block
  const deleteAnswer = (number: number) => {
    setTestBlocks(
      testBlocks.map((testBlock, index) => {
        if (index === questionNumber - 1) {
          return {
            ...testBlock,
            answers: testBlock.answers.filter(
              (answer, index) => index !== number
            ),
          };
        }
        return testBlock;
      })
    );
  };

  return (
    <div className="w-10/12 border-solid border-4 border-gray-600 rounded-lg p-8">
      <button
        onClick={() => deleteTestBlock()}
        className="text-gray-600 border-solid border-4 border-gray-600 p-2 rounded-lg"
      >
        Delete Test Block
      </button>
      <h3 className="text-4xl">Question: {questionNumber}</h3>
      {questionEditable ? (
        <>
          <input type="text" defaultValue={question} onChange={handleChange} />
          <button
            onClick={() => {
              toggleQuestionEditable();
              editQuestion(questionValue);
            }}
          >
            Save
          </button>
        </>
      ) : (
        <p onClick={() => toggleQuestionEditable()}>{question}</p>
      )}
      <ol className="list-decimal">
        {answers.map((answer, index) => {
          return (
            <React.Fragment key={index}>
              <EditableAnswerItem
                index={index}
                answer={answer}
                editAnswer={editAnswer}
                deleteAnswer={deleteAnswer}
              />
            </React.Fragment>
          );
        })}
      </ol>
      <button
        onClick={() => addAnswer()}
        className="text-gray-600 border-solid border-4 border-gray-600 p-2 rounded-lg"
      >
        Add Answer
      </button>
      <p>{correctAnswer}</p>
    </div>
  );
}
