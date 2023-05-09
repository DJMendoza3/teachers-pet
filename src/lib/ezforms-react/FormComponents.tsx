import React, { useState, useEffect, Fragment } from "react";
import {
  TextField,
  NumberField,
  MultiSelectField,
  FileField,
  SelectField,
  DateField,
  BooleanField,
  CheckboxField,
  TextAreaField,
  SliderField,
} from "lib/ezforms-react/jsforms.fields";

import Slider from "components/sliders/Slider";

import styles from "./forms.module.css";

const useValueValidation = (id: string, validators: any[]) => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const input = document.getElementById(id) as HTMLInputElement;
    if (input) {
      input.addEventListener("input", () => {
        let errorTriggered = false;
        if (input.value !== null && input.value !== undefined) {
          validators.map((validator) => {
            if (validator(input.value) !== null) {
              errorTriggered = true;
              setError(validator(input.value));
            } else if (errorTriggered === false) {
              setError(null);
            }
          });
        }
      });
    }
  }, [id, validators]);

  return error;
};

interface TextFieldProps {
  field: TextField;
  setErrors: React.Dispatch<React.SetStateAction<{}>>;
}

export function TextInput({ field, setErrors }: TextFieldProps) {
  const error = useValueValidation(field.name, field.validators);

  useEffect(() => {
    if (error) {
      setErrors((prev) => {
        return { ...prev, [field.name]: true };
      });
    } else {
      setErrors((prev) => {
        return { ...prev, [field.name]: false };
      });
    }
  }, [error, field.name, setErrors]);

  return (
    <>
      <input type={field.type} name={field.name} id={field.name} />
      <label htmlFor={field.name} id={`${field.name}-label`}>
        {field.label}
      </label>
      {error && <p>{error}</p>}
    </>
  );
}

interface NumberFieldProps {
  field: NumberField;
  setErrors: React.Dispatch<React.SetStateAction<{}>>;
}

export function NumberInput({ field, setErrors }: NumberFieldProps) {
  const error = useValueValidation(field.name, field.validators);

  useEffect(() => {
    if (error) {
      setErrors((prev) => {
        return { ...prev, [field.name]: true };
      });
    } else {
      setErrors((prev) => {
        return { ...prev, [field.name]: false };
      });
    }
  }, [error, field.name, setErrors]);
  return (
    <>
      <label htmlFor={field.name}>{field.label}</label>
      <input type={field.type} name={field.name} id={field.name} />
      {error && <p>{error}</p>}
    </>
  );
}

interface MultiSelectFieldProps {
  field: MultiSelectField;
  setErrors: React.Dispatch<React.SetStateAction<{}>>;
}

export function MultiSelectInput({ field, setErrors }: MultiSelectFieldProps) {
  const [selected, setSelected] = useState<string[]>([]);
  const options = field.options;
  const error = useValueValidation(field.name, field.validators);

  useEffect(() => {
    if (error) {
      setErrors((prev) => {
        return { ...prev, [field.name]: true };
      });
    } else {
      setErrors((prev) => {
        return { ...prev, [field.name]: false };
      });
    }
  }, [error, field.name, setErrors]);

  const toggleOption = (name: string) => {
    setSelected((prevSelected) => {
      // if it's in, remove
      const newArray = [...prevSelected];
      if (newArray.includes(name)) {
        return newArray.filter((item) => item !== name);
        // else, add
      } else {
        newArray.push(name);
        return newArray;
      }
    });
  };

  return (
    <>
      <label htmlFor={field.name}>{field.label}</label>
      <input type="hidden" id={field.name} name={field.name} value={selected} />
      <div className={styles["dropdown"]}>
        <div className={styles["dropdown__selected"]}>
          <div>
            {selected.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => toggleOption(item)}
                  className={styles["selected-item"]}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
        <ul className={styles["dropdown__options"]}>
          {options.map((option, index) => {
            const isSelected = selected.includes(option);

            if (!isSelected) {
              return (
                <li
                  key={index}
                  className={styles["dropdown__option"]}
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
      {error && <p>{error}</p>}
    </>
  );
}

interface SelectFieldProps {
  field: SelectField;
  setErrors: React.Dispatch<React.SetStateAction<{}>>;
}

//input field for single select component with dropdown and validation
export function SelectInput({ field, setErrors }: SelectFieldProps) {
  const [selected, setSelected] = useState<string | undefined>(undefined);
  const options = field.options;
  const error = useValueValidation(field.name, field.validators);

  useEffect(() => {
    if (error) {
      setErrors((prev) => {
        return { ...prev, [field.name]: true };
      });
    } else {
      setErrors((prev) => {
        return { ...prev, [field.name]: false };
      });
    }
  }, [error, field.name, setErrors]);

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
      <label htmlFor={field.name}>{field.label}</label>
      <input type="hidden" id={field.name} name={field.name} value={selected} />
      <div className={styles["dropdown"]}>
        <div className={styles["dropdown__selected"]}>
          <div>
            {selected && (
              <button
                onClick={() => toggleOption(selected)}
                className={styles["selected-item"]}
              >
                {selected}
              </button>
            )}
          </div>
        </div>
        <ul className={styles["dropdown__options"]}>
          {options.map((option, index) => {
            const isSelected = selected === option;

            if (!isSelected) {
              return (
                <li
                  key={index}
                  className={styles["dropdown__option"]}
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
      {error && <p>{error}</p>}
    </>
  );
}

interface FileFieldProps {
  field: FileField;
  setErrors: React.Dispatch<React.SetStateAction<{}>>;
}

export function FileInput({ field, setErrors }: FileFieldProps) {
  const error = useValueValidation(field.name, field.validators);

  useEffect(() => {
    if (error) {
      setErrors((prev) => {
        return { ...prev, [field.name]: true };
      });
    } else {
      setErrors((prev) => {
        return { ...prev, [field.name]: false };
      });
    }
  }, [error, field.name, setErrors]);

  return (
    <>
      <label htmlFor={field.name}>{field.label}</label>
      <input type={field.type} name={field.name} id={field.name} />
      {error && <p>{error}</p>}
    </>
  );
}

interface TextAreaFieldProps {
  field: TextAreaField;
  setErrors: React.Dispatch<React.SetStateAction<{}>>;
}

export function TextAreaInput({ field, setErrors }: TextAreaFieldProps) {
  const error = useValueValidation(field.name, field.validators);

  useEffect(() => {
    if (error) {
      setErrors((prev) => {
        return { ...prev, [field.name]: true };
      });
    } else {
      setErrors((prev) => {
        return { ...prev, [field.name]: false };
      });
    }
  }, [error, field.name, setErrors]);

  return (
    <>
      <label htmlFor={field.name}>{field.label}</label>
      <textarea name={field.name} id={field.name} />
      {error && <p>{error}</p>}
    </>
  );
}

interface CheckboxFieldProps {
  field: CheckboxField;
  setErrors: React.Dispatch<React.SetStateAction<{}>>;
}

export function CheckboxInput({ field, setErrors }: CheckboxFieldProps) {
  const error = useValueValidation(field.name, field.validators);

  useEffect(() => {
    if (error) {
      setErrors((prev) => {
        return { ...prev, [field.name]: true };
      });
    } else {
      setErrors((prev) => {
        return { ...prev, [field.name]: false };
      });
    }
  }, [error, field.name, setErrors]);

  return (
    <>
      <label htmlFor={field.name}>{field.label}</label>
      <input type={field.type} name={field.name} id={field.name} />
      {error && <p>{error}</p>}
    </>
  );
}

interface BooleanFieldProps {
  field: BooleanField;
  setErrors: React.Dispatch<React.SetStateAction<{}>>;
}

export function BooleanInput({ field, setErrors }: BooleanFieldProps) {
  const error = useValueValidation(field.name, field.validators);

  useEffect(() => {
    if (error) {
      setErrors((prev) => {
        return { ...prev, [field.name]: true };
      });
    } else {
      setErrors((prev) => {
        return { ...prev, [field.name]: false };
      });
    }
  }, [error, field.name, setErrors]);

  return (
    <>
      <label htmlFor={field.name}>{field.label}</label>
      <input type="checkbox" name={field.name} id={field.name} />
      {error && <p>{error}</p>}
    </>
  );
}

interface DateFieldProps {
  field: DateField;
  setErrors: React.Dispatch<React.SetStateAction<{}>>;
}

export function DateInput({ field, setErrors }: DateFieldProps) {
  const error = useValueValidation(field.name, field.validators);

  useEffect(() => {
    if (error) {
      setErrors((prev) => {
        return { ...prev, [field.name]: true };
      });
    } else {
      setErrors((prev) => {
        return { ...prev, [field.name]: false };
      });
    }
  }, [error, field.name, setErrors]);

  return (
    <>
      <label htmlFor={field.name}>{field.label}</label>
      <input
        type={field.type}
        name={field.name}
        id={field.name}
        value={new Date().toJSON().slice(0, 10)}
        min={field.minDate}
        max={field.maxDate}
      />
      {error && <p>{error}</p>}
    </>
  );
}

interface SliderFieldProps {
  field: SliderField;
  setErrors: React.Dispatch<React.SetStateAction<{}>>;
}

export function SliderInput({ field, setErrors }: SliderFieldProps) {
  const [value, setValue] = useState(0);
  const error = useValueValidation(field.name, field.validators);

  useEffect(() => {
    if (error) {
      setErrors((prev) => {
        return { ...prev, [field.name]: true };
      });
    } else {
      setErrors((prev) => {
        return { ...prev, [field.name]: false };
      });
    }
  }, [error, field.name, setErrors]);

  return (
    <>
    <input type="hidden" id={field.name} name={field.name} value={value} />
      <Slider min={0} max={100} steps={10} color='#fefefe' id={field.name} label={field.name} description="test description" value={value} setValue={setValue}/>
      {error && <p>{error}</p>}
    </>
  );
}
