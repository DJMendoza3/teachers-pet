import { useAppDispatch, useAppSelector } from "redux/hooks";
import { setTestBlock } from "redux/slices/testSlice";
import { usePostRequest } from "./fetchHooks";

//function for saving the test
const useSaveTest = () => {
  const { postRequest } = usePostRequest();
  const testBlocks = useAppSelector(
    (state) => state.test.currentTest.Questions
  );
  const test = {
    testName: "new test",
    text: "testing",
    questions: testBlocks,
  };
  postRequest("test", JSON.stringify(test));
};

//function for adding a new text block to the test
const UseAddTestBlock = () => {
  const dispatch = useAppDispatch();
  const testBlocks = useAppSelector(
    (state) => state.test.currentTest.Questions
  );
  dispatch(
    setTestBlock([
      ...testBlocks,
      {
        QuestionText: "Question Here",
        Answers: [{ AnswerText: "Answer Here", IsCorrect: false }],
      },
    ])
  );
};

//function to swap the position of two test blocks (not working for some reason)
const useSwapTestBlocks = (index1: number, index2: number) => {
  const dispatch = useAppDispatch();
  const testBlocks = useAppSelector(
    (state) => state.test.currentTest.Questions
  );
  const tempBlocks = [...testBlocks];
  const tempBlock = tempBlocks[index1];
  tempBlocks[index1] = tempBlocks[index2];
  tempBlocks[index2] = tempBlock;
  dispatch(setTestBlock(tempBlocks));
};

//function for deleting a test block
const useDeleteTestBlock = (questionNumber: number) => {
  const dispatch = useAppDispatch();
  const testBlocks = useAppSelector(
    (state) => state.test.currentTest.Questions
  );
  const deleteTestBlock = () =>
    dispatch(
      setTestBlock(
        testBlocks.filter((testBlock, index) => index !== questionNumber - 1)
      )
    );
  return deleteTestBlock;
};

//function for editing the question in the test block
const useEditQuestion = (
  questionNumber: number,
  questionValue: string,
  saveQuestion: () => void
) => {
  const dispatch = useAppDispatch();
  const testBlocks = useAppSelector(
    (state) => state.test.currentTest.Questions
  );
  const editQuestion = () => {
    dispatch(
      setTestBlock(
        testBlocks.map((testBlock, index) => {
          if (index === questionNumber - 1) {
            return {
              QuestionText: questionValue,
              Answers: testBlock.Answers,
            };
          }
          return testBlock;
        })
      )
    );
    saveQuestion();
  };

  return editQuestion;
};

//function for editing an answer in the test block, needs the answer number and the new value
const useEditAnswer = (questionNumber: number) => {
  const dispatch = useAppDispatch();
  const testBlocks = useAppSelector(
    (state) => state.test.currentTest.Questions
  );
  const editAnswer = (answerNumber: number, newValue: string) =>
    dispatch(
      setTestBlock(
        testBlocks.map((testBlock, index) => {
          if (index === questionNumber - 1) {
            return {
              QuestionText: testBlock.QuestionText,
              Answers: testBlock.Answers.map((answer, index) => {
                if (index === answerNumber) {
                  return {
                    AnswerText: newValue,
                    IsCorrect: answer.IsCorrect,
                  };
                }
                return answer;
              }),
            };
          }
          return testBlock;
        })
      )
    );
  return editAnswer;
};

//Add a new answer to the test block
const useAddAnswer = (questionNumber: number) => {
  const dispatch = useAppDispatch();
  const testBlocks = useAppSelector(
    (state) => state.test.currentTest.Questions
  );
  const addAnswer = () =>
    dispatch(
      setTestBlock(
        testBlocks.map((testBlock, index) => {
          if (index === questionNumber - 1) {
            return {
              QuestionText: testBlock.QuestionText,
              Answers: [
                ...testBlock.Answers,
                { AnswerText: "Answer here", IsCorrect: false },
              ],
            };
          }
          return testBlock;
        })
      )
    );
  return addAnswer;
};

//delete an answer from the test block
const useDeleteAnswer = (questionNumber: number) => {
  const dispatch = useAppDispatch();
  const testBlocks = useAppSelector(
    (state) => state.test.currentTest.Questions
  );
  const deleteAnswer = (answerNumber: number) =>
    dispatch(
      setTestBlock(
        testBlocks.map((testBlock, index) => {
          if (index === questionNumber - 1) {
            return {
              QuestionText: testBlock.QuestionText,
              Answers: testBlock.Answers.filter(
                (answer, index) => index !== answerNumber
              ),
            };
          }
          return testBlock;
        })
      )
    );
  return deleteAnswer;
};

//function for editing the correct answer in the test block
//calculation error that needs to be fixed
const useEditCorrectAnswer = (questionNumber: number) => {
  const dispatch = useAppDispatch();
  const testBlocks = useAppSelector(
    (state) => state.test.currentTest.Questions
  );
  const editCorrectAnswer = (answerNumber: number) =>
    dispatch(
      setTestBlock(
        testBlocks.map((testBlock, index) => {
          if (index === questionNumber - 1) {
            return {
              QuestionText: testBlock.QuestionText,
              Answers: testBlock.Answers.map((answer, index) => {
                if (index === answerNumber - 1) {
                  return {
                    AnswerText: answer.AnswerText,
                    IsCorrect: !answer.IsCorrect,
                  };
                }
                return answer;
              }),
            };
          }
          return testBlock;
        })
      )
    );
  return editCorrectAnswer;
};

export {
  useAddAnswer,
  useDeleteAnswer,
  useEditAnswer,
  useEditCorrectAnswer,
  useEditQuestion,
  useDeleteTestBlock,
  UseAddTestBlock,
  useSaveTest,
  useSwapTestBlocks,
};
