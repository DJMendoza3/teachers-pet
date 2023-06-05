import { useState } from "react";
import React from "react";
import EditableAnswerItem from "./EditableAnswerItem";

type TestBlockProps = {
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
};

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

  //function for editing the correct answer in the test block
  const editCorrectAnswer = (value: string) => {
    setTestBlocks(
      testBlocks.map((testBlock, index) => {
        if (index === questionNumber - 1) {
          return {
            ...testBlock,
            correctAnswer: value,
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
        className="text-gray-600 border-solid w-10 float-right"
      >
        <svg id="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65">
          <path d="M50.8029,10.04529H39.12884V7.30813A3.31182,3.31182,0,0,0,35.82071,4H28.17929a3.31182,3.31182,0,0,0-3.30813,3.30813v2.73716H13.1971A1.4235,1.4235,0,0,0,11.77337,11.469v5.23425A1.42351,1.42351,0,0,0,13.1971,18.127H14.874V52.93A7.07777,7.07777,0,0,0,21.944,60H42.056a7.07777,7.07777,0,0,0,7.07-7.07V18.127H50.8029a1.42351,1.42351,0,0,0,1.42373-1.42373V11.469A1.4235,1.4235,0,0,0,50.8029,10.04529ZM27.71862,7.30813a.46125.46125,0,0,1,.46067-.46067h7.64142a.46125.46125,0,0,1,.46067.46067v2.73716H27.71862ZM46.27854,52.93A4.2272,4.2272,0,0,1,42.056,57.15254H21.944A4.2272,4.2272,0,0,1,17.72146,52.93V18.127H46.27854Zm3.10063-37.65049H14.62083V12.89274H49.37917Z" />
          <path d="M22.97007,52.14864a1.42351,1.42351,0,0,0,1.42373-1.42373V24.55462a1.42373,1.42373,0,1,0-2.84745,0V50.72491A1.4235,1.4235,0,0,0,22.97007,52.14864Z" />
          <path d="M32,52.14864a1.42351,1.42351,0,0,0,1.42373-1.42373V24.55462a1.42373,1.42373,0,0,0-2.84746,0V50.72491A1.42351,1.42351,0,0,0,32,52.14864Z" />
          <path d="M41.02993,52.14864a1.4235,1.4235,0,0,0,1.42372-1.42373V24.55462a1.42373,1.42373,0,1,0-2.84745,0V50.72491A1.42351,1.42351,0,0,0,41.02993,52.14864Z" />
        </svg>
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
      <p>Correct Answer:</p>
      <select
        className="border-solid border-4 border-gray-600 p-2 rounded-lg"
        onChange={(e) => editCorrectAnswer(e.target.value)}
      >
        {answers.map((answer, index) => {
          return (
            <option key={index} value={index}>
              {answer}
            </option>
          );
        })}
      </select>
    </div>
  );
}
