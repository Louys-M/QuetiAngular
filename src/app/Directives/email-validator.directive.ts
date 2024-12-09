import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from
'@angular/forms';

@Directive({
  selector: '[appEmailValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: EmailValidatorDirective,
  multi: true }],
  standalone: true
})
export class EmailValidatorDirective implements Validator{
  validate(control: AbstractControl): ValidationErrors | null {
    //format d'email attendu sous forme d'expression régulière (REGEX)
    const pwRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isValid = pwRegexp.test(control.value);
    // Si le champ est vide ou si l'email est valide, on retourne null (pasd'erreur)
    if (!control.value || isValid) {
      return null;
    }
    // Si l'email est invalide, on retourne une erreur
    return { invalidPassword: true };
  }

}
