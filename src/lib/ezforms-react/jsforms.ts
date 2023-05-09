import { FormField } from "./jsforms.fields";

export class JSForm {
    static fields = [] as FormField[];

    static getFields() {
        return this.fields;
    }
}