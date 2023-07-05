type Test = {
    TestName: string;
    TestDescription: string;
    Topic: string;
    Questions: Question[];
};

type Question = {
    QuestionText: string;
    Answers: Answer[];
};

type Answer = {
    AnswerText: string;
    IsCorrect: boolean;
};

export type { Test, Question, Answer };