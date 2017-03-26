import { Component, ViewChild } from '@angular/core';
import { NgModel, NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NumberRangeValidator } from "./custom-validators";

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '상품 등록';
  prodForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.prodForm = this.fb.group(
      {
        name: ['', Validators.required],
        listPrice: [0,
          Validators.compose([
            Validators.required,
            NumberRangeValidator.min(1000),
            NumberRangeValidator.max(1000000),
            Validators.pattern('[1-9]\\d*')
          ])
        ],
        qty: [0,
          Validators.compose([
            Validators.required,
            NumberRangeValidator.min(1),
            NumberRangeValidator.max(100),
            Validators.pattern('[1-9]\\d*')
          ])
        ],
        desc: ['',
          Validators.compose([
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(100)
          ])
        ],
      });
  }

  buildManagerFormGroup() {
    return this.fb.group(
      {
        name: ['', Validators.required],
        phoneNum: ['',
          Validators.compose([
            Validators.required,
            Validators.pattern('010-[0-9]{4}-[0-9]{4}')
          ])
        ]
      });
  }

  onSubmit() {
    alert(`제출\n${JSON.stringify(this.prodForm.value)}`);
  }
}
