import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from "@angular/router";
import { Observable  } from 'rxjs/Observable';
import { CheckedProductSetService } from "../checked-product-set.service";

@Component({
  selector: 'scm-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.css']
})
export class ButtonGroupComponent implements OnInit {
  noneNo$: Observable<boolean>;
  @Output() onClicked: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router, private prodSet: CheckedProductSetService) {
  }

  ngOnInit() {
    this.mapNoneKeyObservable();
  }

  private mapNoneKeyObservable() {
    this.noneNo$ = this.prodSet.hasNo$.map(hasNo => !hasNo);
  }
}
