import { Component, OnInit } from '@angular/core';
import { SpinnerService } from "./spinner.service";

@Component({
  selector: 'scm-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit {
  loading: boolean;

  constructor(spinner: SpinnerService) {
    spinner.getLoading$()
      .do(l => console.log(`current spinner status: ${l}`))
      .subscribe(l => this.loading = l);
  }

  ngOnInit() {}
}
