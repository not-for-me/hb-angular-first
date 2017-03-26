import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'scm-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  thisYear: number = new Date().getFullYear();

  constructor() {}
  ngOnInit() {}
}
