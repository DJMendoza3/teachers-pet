import { useEffect, useState } from "react";
import { GeneratorForm, LoginForm, RegisterForm } from "./forms";
import {
  TextInput,
  MultiSelectInput,
  FileInput,
  NumberInput,
  SelectInput,
  SliderInput,
  SubmitInput,
} from "./FormComponents";

import styles from "./forms.module.css";
//A generic form component that takes in a list of fields and creates the inputs and labels via map probebly
//use a generic fetch component that modulates depending on the inputs

//interface for props
interface FormProps {
  form: GeneratorForm | LoginForm | RegisterForm;
  submit: () => void;
}

export default function Form({ form, submit }: FormProps) {
  const [errors, setErrors] = useState({});
  const [submittable, setSubmittable] = useState(true);

  //build error object
  useEffect(() => {
    form.fields.forEach((field) => {
      setErrors((prev) => {
        return { ...prev, [field.name]: false };
      });
    });
  }, [form]);

  //update submittable(if applicable) on change
  useEffect(() => {
    if (Object.values(errors).includes(true)) {
      setSubmittable(false);
    } else {
      setSubmittable(true);
    }
  }, [errors]);

  useEffect(() => {
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
      input.addEventListener("input", (event) => toggleLabel(event));
    });
  }, []);

  function toggleLabel(event: Event): void {
    const target = event.target as HTMLInputElement;
    const label = document.getElementById(`${target.name}-label`);
    if (label && target.type === "text") {
      if (target.value.length > 0) {
        label.className = styles["active"];
      } else {
        label.className = styles[""];
      }
    }
  }

  return (
    <form id="input-form">
      {form.fields.map((field, index: number) => (
        <div className={styles["form-control"]} key={index}>
          {field.type === "text" ? (
            <TextInput field={field} setErrors={setErrors} />
          ) : field.type === "number" ? (
            <NumberInput field={field} setErrors={setErrors} />
          ) : field.type === "file" ? (
            <FileInput field={field} setErrors={setErrors} />
          ) : field.type === "multiselect" ? (
            <MultiSelectInput field={field} setErrors={setErrors} />
          ) : field.type === "select" ? (
            <SelectInput field={field} setErrors={setErrors} />
          ) : field.type === "slider" ? (
            <SliderInput field={field} setErrors={setErrors} />
          ) : field.type === "submit" ? (
            <SubmitInput field={field} setErrors={setErrors} errors={errors} />
          ) : (
            <></>
          )}
        </div>
      ))}
    </form>
  );
}
