import { Component, OnInit, Input } from '@angular/core';
import { Category } from "../../category.model";

@Component({
  selector: 'scm-category-item',
  templateUrl: 'category-item.component.html',
  styleUrls: ['category-item.component.css']
})
export class CategoryItemComponent implements OnInit {
  @Input() category: Category;

  constructor() { }

  ngOnInit() {
  }

}
