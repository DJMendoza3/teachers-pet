import { FormField } from "lib/ezforms-react/jsforms.fields";

export type IForm = {
    formType: string;
    style: string;
    fields: FormField[];
}