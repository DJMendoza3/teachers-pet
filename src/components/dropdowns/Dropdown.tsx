import React, { useState } from "react";

export default function Dropdown() {
    const [selected, setSelected] = useState<string | undefined>(undefined);
    const [options, setOptions] = useState<string[]>(["option1", "option2", "option3"]);

  
    const toggleOption = (name: string) => {
      setSelected((prevSelected) => {
        // if it's in, remove
        if (prevSelected === name) {
          return undefined;
          // else, add
        } else {
          return name;
        }
      });
    };
  
    return (
      <>
        <label htmlFor={"name"}>{"label"}</label>
        <input type="hidden" id={"name"} name={"name"} value={selected} />
        <div className="realtive group">
          <div className="border-solid border-2 border-gray-900 p-2 h-min flex justify-between align-middle">
            <div>
              {selected && (
                <button
                  onClick={() => toggleOption(selected)}
                  className="border-solid border-2 border-gray-900 p-1 rounded-md"
                >
                  {selected}
                </button>
              )}
            </div>
          </div>
          <ul className="absolute hidden list-none border-solid border-2 bg-secondary border-gray-900 h-1/4 overflow-scroll group-hover:block">
            {options.map((option, index) => {
              const isSelected = selected === option;
  
              if (!isSelected) {
                return (
                  <li
                    key={index}
                    className="flex align-middle p-3 cursor-pointer hover:bg-grey-200"
                    onClick={() => toggleOption(option)}
                  >
                    <span>{option}</span>
                  </li>
                );
              } else {
                return <React.Fragment key={index}></React.Fragment>;
              }
            })}
          </ul>
        </div>
      </>
    );
  }