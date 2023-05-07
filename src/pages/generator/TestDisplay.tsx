import { useState, useEffect } from "react";

import Sidebar from "../../layout/sidebar/Sidebar";

import GeneratorSettings from "./GeneratorSettings";

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
            <EditableAnswerItem
              index={index}
              answer={answer}
              editAnswer={editAnswer}
              deleteAnswer={deleteAnswer}
            />
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
interface EditableAnswerItemProps {
  index: number;
  answer: string;
  editAnswer: (number: number, value: string) => void;
  deleteAnswer: (number: number) => void;
}

function EditableAnswerItem({
  index,
  answer,
  editAnswer,
  deleteAnswer,
}: EditableAnswerItemProps) {
  const [editable, setEditable] = useState(false);
  const [value, setValue] = useState(answer);

  function toggleEditable() {
    setEditable(!editable);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <li key={index}>
      {editable ? (
        <>
          <input type="text" defaultValue={answer} onChange={handleChange} />
          <button
            onClick={() => {
              toggleEditable();
              editAnswer(index, value);
            }}
          >
            Save
          </button>
        </>
      ) : (
        <p onClick={() => toggleEditable()}>{answer}</p>
      )}
      <button onClick={() => deleteAnswer(index)}>Delete</button>
    </li>
  );
}
