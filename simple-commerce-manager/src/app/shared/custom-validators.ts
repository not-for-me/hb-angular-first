import { AbstractControl } from '@angular/forms';


export class NumberRangeValidator {
  static min(min: number) {
    return (control: AbstractControl): {[key: string]: any} => {
      return control.value >= min ? null : {'min': `${min} 이상의 값을 입력하세요`};
    };
  }

  static max(max: number) {
    return (control: AbstractControl): {[key: string]: any} => {
      return control.value <= max ? null : {'max': `${max} 이하의 값을 입력하세요`};
    }
  }
}

