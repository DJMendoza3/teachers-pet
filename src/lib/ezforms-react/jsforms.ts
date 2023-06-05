import { FormField } from "./jsforms.fields";

export class JSForm {
    static fields = [] as FormField[];
    static style = "default";
    static getFields() {
        return this.fields;
    }
}