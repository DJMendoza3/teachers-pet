import { useEffect, useState } from "react";
import { usePostRequest } from "hooks/fetchHooks";

import Slider from "components/sliders/Slider";
import Dropdown from "components/dropdowns/Dropdown";

export default function GeneratorForm() {
  const [value, setValue] = useState(0);
  const { postRequest } = usePostRequest();

  useEffect(() => {
    const form = document.getElementById("generator-form") as HTMLFormElement;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const test = {
        testName: "Math test",
        testDescription: "This is a test",
        testGroup: "string",
        subject: "Math",
        topic: "Geometry",
        grade: 4,
        difficulty: 4,
        numberOfQuestions: 3,
        numberOfAnswers: 4,
      };

      fetch("http://127.0.0.1:5295/api/generate/test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(test),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    });
  }, []);

  return (
    <form
      id="generator-form"
      className="grid grid-cols-2 [&>h4]:text-lg [&>h4]:font-bold"
    >
      <h4>Test Name</h4>
      <input type="text" className="" />
      <h4>Test Description</h4>
      <input type="text" className="" />
      <div>
        <h4>Test group</h4>
        <p>What test group do you want this to be under</p>
      </div>
      <Dropdown label="Test Group" options={["temp test group"]} />
      <div>
        <h4>Test type</h4>
        <p>What type of test do you want to create?</p>
      </div>

      <Dropdown
        label="Test Type"
        options={["Multiple Choice", "Short Answer"]}
      />
      <h4>Subject</h4>
      <Dropdown label="Subject" options={["Math", "Science", "History"]} />
      <h4>Focus Area</h4>
      <input type="text" />
      <h4>Grade Level</h4>
      <input type="number" min={0} max={12} />
      <h4>Questions Amount</h4>
      <input type="number" />
      <h4>Answer Amount</h4>
      <input type="number" />
      <div>
        <h4>Difficulty</h4>
        <p>What difficulty do you want to test?</p>
      </div>
      <div>
        <Slider
          min={0}
          max={10}
          steps={10}
          color="#456789"
          id="test"
          description="test"
          label="test-label"
          value={value}
          setValue={setValue}
        />
      </div>
      <input type="submit" />
    </form>
  );
}
