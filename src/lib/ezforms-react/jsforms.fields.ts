class FormField {
  public name: string;
  public label: string;
  public id: string;
  validators: any[] = [];

  constructor(name: string, label: string, validators: any[] = [], id: string) {
    this.name = name;
    this.label = label;
    this.validators = validators;
    this.id = id;
  }
}

class TextField extends FormField {
  public type = "text";
  public placeholder: string;

  constructor(
    name: string,
    label: string,
    placeholder: string,
    validators: any[] = [],
    id: string
  ) {
    super(name, label, validators, id);
    this.placeholder = placeholder;
  }
}

class NumberField extends FormField {
  public type = "number";

  constructor(name: string, label: string, validators: any[] = [], id: string) {
    super(name, label, validators, id);
  }
}

class DateField extends FormField {
  public type = "date";
  public placeholder: string;
  public minDate?: Date;
  public maxDate?: Date;

  constructor(
    name: string,
    label: string,
    placeholder: string,
    validators: any[] = [],
    id: string,
    minDate?: Date,
    maxDate?: Date
  ) {
    super(name, label, validators, id);
    this.placeholder = placeholder;
    this.minDate = minDate;
    this.maxDate = maxDate;
  }
}

class BooleanField extends FormField {
  public type = "boolean";
  public placeholder: string;

  constructor(
    name: string,
    label: string,
    placeholder: string,
    validators: any[] = [],
    id: string
  ) {
    super(name, label, validators, id);
    this.placeholder = placeholder;
  }
}

class SelectField extends FormField {
  public type = "select";
  public options: string[];

  constructor(
    name: string,
    label: string,
    options: string[],
    validators: any[] = [],
    id: string
  ) {
    super(name, label, validators, id);
    this.options = options;
  }
}

class MultiSelectField extends FormField {
  public type = "multiselect";
  public options: string[];

  constructor(
    name: string,
    label: string,
    options: string[],
    validators: any[] = [],
    id: string
  ) {
    super(name, label, validators, id);
    this.options = options;
  }
}

class CheckboxField extends FormField {
  public options: string[];

  constructor(
    name: string,
    label: string,
    options: string[],
    validators: any[] = [],
    id: string
  ) {
    super(name, label, validators, id);
    this.options = options;
  }
}

class TextAreaField extends FormField {
  public placeholder: string;

  constructor(
    name: string,
    label: string,
    placeholder: string,
    validators: any[] = [],
    id: string
  ) {
    super(name, label, validators, id);
    this.placeholder = placeholder;
  }
}

class FileField extends FormField {
  public type = "file";

  constructor(name: string, label: string, validators: any[] = [], id: string) {
    super(name, label, validators, id);
  }
}

class SliderField extends FormField {
  public type = "slider";
  public min: number;
  public max: number;
  public step: number;

  constructor(
    name: string,
    label: string,
    min: number,
    max: number,
    step: number,
    validators: any[] = [],
    id: string
  ) {
    super(name, label, validators, id);
    this.min = min;
    this.max = max;
    this.step = step;
  }
}

export {
  FormField,
  TextField,
  NumberField,
  DateField,
  BooleanField,
  SelectField,
  MultiSelectField,
  CheckboxField,
  TextAreaField,
  FileField,
  SliderField,
};
