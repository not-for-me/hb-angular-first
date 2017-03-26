import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '상품 등록';
  product: any;
  errorCodes = ['min', 'max', 'required', 'pattern'];
  errors: any[] = [];
  @ViewChild('prodForm') prodForm: NgForm;

  constructor() {
    this.initProduct();
  }

  ngAfterViewInit() {
    this.prodForm.statusChanges.filter(s => s === 'INVALID')
      .switchMap(() => {
        this.errors = [];
        return Observable.from(Object.keys(this.prodForm.controls));
      })
      .subscribe((controlName) => {
        this.errorCodes
          .filter(code => this.prodForm.hasError(code, [controlName]))
          .forEach(code => {
            const errorMsg = this.prodForm.getError(code, [controlName]);
            this.errors.push({ controlName, code, errorMsg })
          });
      });

    this.prodForm.statusChanges.filter(s => s === 'VALID').subscribe(() => this.errors = []);
  }

  initProduct() {
    this.product = { name: '', listPrice: '', qty: 0, desc: '' };
  }

  onSubmit() {
    alert(`제출\n${JSON.stringify(this.product)}`);
  }

  onReset() {
    this.initProduct();
  }
}
