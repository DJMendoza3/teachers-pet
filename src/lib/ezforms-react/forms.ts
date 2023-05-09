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
import {
  maxLengthValidator,
  requiredValidator,
  passwordValidator,
  usernameValidator,
  passwordConfirmValidator,
} from "./jsforms.validators";

class LoginForm extends JSForm {
  static formType = "login";
  static fields = [
    new TextField(
      "username",
      "Username",
      "username",
      [requiredValidator, usernameValidator],
      "username"
    ),
    new TextField(
      "password",
      "Password",
      "password",
      [requiredValidator, passwordValidator],
      "password"
    ),
  ];
}

class RegisterForm extends JSForm {
  static formType = "register";
  static fields = [
    new TextField(
      "username",
      "Username",
      "username",
      [requiredValidator],
      "username"
    ),
    new TextField(
      "password",
      "Password",
      "password",
      [requiredValidator, passwordValidator],
      "password"
    ),
    new TextField(
      "confirmPassword",
      "Confirm Password",
      "confirm password",
      [requiredValidator, passwordValidator, passwordConfirmValidator],
      "confirmPassword"
    ),
    new TextField("name", "Name", "name", [requiredValidator], "name"),
    new FileField("profile", "Profile Image", [requiredValidator], "profile"),
  ];
}
class GeneratorForm extends JSForm {
  static formType = "generator";
  static fields = [
    new SelectField(
      "subject",
      "Subject",
      ["Math", "Science", "English", "History"],
      [requiredValidator],
      "subject"
    ),
    new TextField(
      "topic",
      "Topic",
      "sub topic here",
      [maxLengthValidator(50)],
      "topic"
    ),
    new SelectField(
      "grade",
      "Grade",
      ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      [requiredValidator],
      "grade"
    ),
    new NumberField(
      "numQuestions",
      "Number of Questions",
      [requiredValidator],
      "numQuestions"
    ),
    new NumberField(
      "numChoices",
      "Number of Choices",
      [requiredValidator],
      "numChoices"
    ),
    new SliderField(
      "difficulty",
      "Difficulty",
      1,
      5,
      1,
      [requiredValidator],
      "difficulty"
    ),
  ];
}
export { GeneratorForm, LoginForm, RegisterForm };
