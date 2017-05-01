import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '상품 등록';
  product: any;

  constructor() {
    this.initProduct();
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
