import { useState } from "react";
import React from "react";
import EditableAnswerItem from "./EditableAnswerItem";
import { Test, Question, Answer } from "shared/types";
import trash from "assets/trash.svg";
import { useDispatch } from "react-redux";
import { setTestBlock } from "redux/slices/testSlice";
import {
  useDeleteTestBlock,
  useEditQuestion,
  useEditAnswer,
  useAddAnswer,
  useDeleteAnswer,
  useEditCorrectAnswer,
} from "hooks/testDisplayHooks";

type TestBlockProps = {
  text: string;
  answers: Answer[];
  questionNumber: number;
  testBlocks: Question[];
};

export default function TestBlock({
  text,
  answers,
  questionNumber,
  testBlocks,
}: TestBlockProps) {
  const [questionEditable, setQuestionEditable] = useState(false);
  const [questionValue, setQuestionValue] = useState(text);
  const dispatch = useDispatch();

  //function for turning the questoin into an input field
  const toggleQuestionEditable = () => {
    setQuestionEditable(!questionEditable);
  };

  //function for deleting a test block
  const deleteTestBlock = useDeleteTestBlock(questionNumber);

  //function for editing the question in the test block
  const editQuestion = useEditQuestion(
    questionNumber,
    questionValue,
    toggleQuestionEditable
  );

  //function for editing an answer in the test block, needs the answer number and the new value
  const editAnswer = useEditAnswer(questionNumber);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuestionValue(e.target.value);
  }

  //Add a new answer to the test block
  const addAnswer = useAddAnswer(questionNumber);

  //delete an answer from the test block
  const deleteAnswer = useDeleteAnswer(questionNumber);

  //function for editing the correct answer in the test block
  const editCorrectAnswer = useEditCorrectAnswer(questionNumber);

  return (
    <div className="w-10/12 border-solid border-4 border-gray-600 rounded-lg p-8">
      <button
        onClick={() => deleteTestBlock()}
        className="text-gray-600 border-solid w-10 float-right"
      >
        <img src={trash} alt="delete" />
      </button>
      <h3 className="text-4xl">Question: {questionNumber}</h3>
      {questionEditable ? (
        <>
          <input type="text" defaultValue={text} onChange={handleChange} />
          <button
            onClick={() => {
              toggleQuestionEditable();
              editQuestion();
            }}
          >
            Save
          </button>
        </>
      ) : (
        <p onClick={() => toggleQuestionEditable()}>Question: {text}</p>
      )}
      <ol className="list-[upper-alpha]">
        {answers.map((answer, index) => {
          return (
            <li key={index}>
              <EditableAnswerItem
                index={index}
                answer={answer.AnswerText}
                editAnswer={editAnswer}
                deleteAnswer={deleteAnswer}
              />
            </li>
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
      <p>
        {answers.map((answer, index) => {
          if (answer.IsCorrect) {
            return answer.AnswerText;
          }
        })}
      </p>
      <select
        className="border-solid border-4 border-gray-600 p-2 rounded-lg"
        onChange={(e) => editCorrectAnswer(parseInt(e.target.value))}
      >
        {answers.map((answer, index) => {
          return (
            <option key={index} value={index}>
              {answer.AnswerText}
            </option>
          );
        })}
      </select>
    </div>
  );
}
