import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'scm-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appTitle = '상품관리 시스템';

  constructor() {}
  ngOnInit() {}

  searchProduct(no: number) {
    console.log(`search: ${no}`);
  }
}
