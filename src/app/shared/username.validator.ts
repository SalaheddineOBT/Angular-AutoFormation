import { AbstractControl, ValidatorFn } from "@angular/forms";

// export function forbiddenNameValidator(control:AbstractControl):{ [key:string]:any } | null {
//     const forbidden=/admin/.test(control.value);
//     return forbidden ? {'forbiddenNme' : { value : control.value }} : null;
// }

export function forbiddenNameValidator(forbidenName:RegExp) : ValidatorFn{

    return (control:AbstractControl):{ [key:string]:any } | null => {
        const forbidden=forbidenName.test(control.value);
        return forbidden ? {'forbiddenNme' : { value : control.value }} : null;
    };

}