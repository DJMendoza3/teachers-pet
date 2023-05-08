import { JSForm } from "./jsforms";
import {
  TextField,
  TextAreaField,
  NumberField,
  FileField,
  SelectField,
  MultiSelectField,
  CheckboxField,
  BooleanField,
  DateField,
  SliderField,
} from "lib/ezforms-react/jsforms.fields";
import { maxLengthValidator, requiredValidator } from "./jsforms.validators";

class GeneratorForm extends JSForm {
    static formType = "generator";
    static fields = [
        new SelectField("subject", "Subject", ["Math", "Science", "English", "History"], [requiredValidator], "subject"),
        new TextField("topic", "Topic","sub topic here", [maxLengthValidator(50)], "topic"),
        new SelectField("grade", "Grade", ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], [requiredValidator], "grade"),
        new NumberField("numQuestions", "Number of Questions", [requiredValidator], "numQuestions"),
        new NumberField("numChoices", "Number of Choices", [requiredValidator], "numChoices"),
        new SliderField("difficulty", "Difficulty", 1, 5, 1, [requiredValidator], "difficulty"),
    ];
}
export { GeneratorForm };