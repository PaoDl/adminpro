import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators{

  static MatchValidator(source: string, target: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const sourceCtrl = control.get(source);
      const targetCtrl = control.get(target);
      // si existe el source ctrl y el target ctrl  y si el valor del source es diferente al valor del target
      return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value
        // si son diferentes regresa true
        ? { mismatch: true }
        //si son iguales regresa null
        : null;
    };
  }
}