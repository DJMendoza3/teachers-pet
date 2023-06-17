type Test = {
    text: string;
    questions: Question[];
};

type Question = {
    text: string;
    answers: Answer[];
};

type Answer = {
    text: string;
    isCorrect: boolean;
};

export type { Test, Question, Answer };