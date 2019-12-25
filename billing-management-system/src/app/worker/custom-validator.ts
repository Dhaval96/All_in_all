import { FormControl } from '@angular/forms';

export class Custom_Validator {


    static NUMBER_CUSTOM_VALIDATOR(control: FormControl): { [s: string]: boolean } {

        console.log(('' + control.value).length)

        if (('' + control.value).length < 10 || ('' + control.value).length > 10) {
            return { 'Invalid_length': true }
        }

        return null;
    }

    static PRICE_CUSTOM_VALIDATOR(control: FormControl): { [s: string]: boolean } {
        if (('' + control.value).length > 3 ) {
            return { 'price_invalid_length': true };
        }
        return null;
    }
}