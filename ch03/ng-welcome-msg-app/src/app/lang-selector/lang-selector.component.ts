import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.css']
})
export class LangSelectorComponent implements OnInit {
  langCode: string;

  constructor() {
    this.langCode = 'ko';
  }

  ngOnInit() {
  }

  setLangCode(code: string) {
    this.langCode = code;
  }

}
