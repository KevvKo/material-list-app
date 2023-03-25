import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms"

export const noAvailabilityValidator = (amount: number): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {

        const value = control.value;

        if (!value) {
            return null;
        }

        return amount >= 0 ? {noAvailability: true } : null
    }
}