import {useState} from "react";

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
    <li>
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
