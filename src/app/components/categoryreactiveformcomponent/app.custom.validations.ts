import { AbstractControl } from '@angular/forms';

export class CustomValidator {
   // the method for validation must have either the 'AbstractControl' or
   // premptive type as input parameter e.g. string/number/boolean, etc
   // if the value is valid, the method will return 'null' else
   // it will return the JSON object as {valid:false}/{invalid:true}/
   // {error:true}
   // this is the reason the return type of method is 'any'
   static checkEven(ctrl: AbstractControl): any {
     // read value entered in HTML Element on which this validation is applied
     let value = parseInt(ctrl.value);

     if(value % 2 === 0) {
       return null;
     } else {
       return {notEven : true}
     }
   }
}
