import { useState } from "react";
import { Question, Answer } from "shared/types";

interface EditableAnswerItemProps {
  index: number;
  answer: string;
  editAnswer: (number: number, value: string) => void;
  deleteAnswer: (number: number) => void;
}

export default function EditableAnswerItem({
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
    <li className="flex gap-5">
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
      <button onClick={() => deleteAnswer(index)} className="w-6">
        <svg id="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65">
          <path d="M50.8029,10.04529H39.12884V7.30813A3.31182,3.31182,0,0,0,35.82071,4H28.17929a3.31182,3.31182,0,0,0-3.30813,3.30813v2.73716H13.1971A1.4235,1.4235,0,0,0,11.77337,11.469v5.23425A1.42351,1.42351,0,0,0,13.1971,18.127H14.874V52.93A7.07777,7.07777,0,0,0,21.944,60H42.056a7.07777,7.07777,0,0,0,7.07-7.07V18.127H50.8029a1.42351,1.42351,0,0,0,1.42373-1.42373V11.469A1.4235,1.4235,0,0,0,50.8029,10.04529ZM27.71862,7.30813a.46125.46125,0,0,1,.46067-.46067h7.64142a.46125.46125,0,0,1,.46067.46067v2.73716H27.71862ZM46.27854,52.93A4.2272,4.2272,0,0,1,42.056,57.15254H21.944A4.2272,4.2272,0,0,1,17.72146,52.93V18.127H46.27854Zm3.10063-37.65049H14.62083V12.89274H49.37917Z" />
          <path d="M22.97007,52.14864a1.42351,1.42351,0,0,0,1.42373-1.42373V24.55462a1.42373,1.42373,0,1,0-2.84745,0V50.72491A1.4235,1.4235,0,0,0,22.97007,52.14864Z" />
          <path d="M32,52.14864a1.42351,1.42351,0,0,0,1.42373-1.42373V24.55462a1.42373,1.42373,0,0,0-2.84746,0V50.72491A1.42351,1.42351,0,0,0,32,52.14864Z" />
          <path d="M41.02993,52.14864a1.4235,1.4235,0,0,0,1.42372-1.42373V24.55462a1.42373,1.42373,0,1,0-2.84745,0V50.72491A1.42351,1.42351,0,0,0,41.02993,52.14864Z" />
        </svg>
      </button>
    </li>
  );
}
