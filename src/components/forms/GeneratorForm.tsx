import { useState } from "react";

import Slider from "components/sliders/Slider";
import Dropdown from "components/dropdowns/Dropdown";

export default function GeneratorForm() {
  const [value, setValue] = useState(0);
  return (
    <form className="grid grid-cols-3">
      <div>
        <h4>Name</h4>
        <p>Name and descriptin for the test.</p>
      </div>
      <input type="text" className="" />
      <input type="text" className="" />
      <div>
        <h4>Test group</h4>
        <p>What test group do you want this to be under</p>
      </div>
      <div className="col-span-2">
        <Dropdown />
      </div>
      <div>
        <h4>Test type</h4>
        <p>What type of test do you want to create?</p>
      </div>

      <div className="col-span-2">
        <Dropdown />
      </div>
      <div>
        <h4>Subject Matter</h4>
        <p>What subject matter do you want to test?</p>
      </div>

      <div className="col-span-1">
        <Dropdown />
      </div>
      <div className="col-span-1">
        <Dropdown />
      </div>
      <div>
        <h4>Grade Level</h4>
        <p>What grade level do you want to test?</p>
      </div>

      <div className="col-span-2">
        <Dropdown />
      </div>
      <div>
        <h4>Questions Settings</h4>
        <p>How many questions and answers do you want to generate?</p>
      </div>
      <input type="number" />
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
    </form>
  );
}
