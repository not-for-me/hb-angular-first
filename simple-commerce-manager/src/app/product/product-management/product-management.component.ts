import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { ProductBulkUpdaterService } from "./product-bulk-updater.service";
import { ProductListComponent } from "./product-list/product-list.component";
import { ToastsManager } from "ng2-toastr";
import { PROD_LIST_PAGE_SIZE } from "../product.tokens";
import { NoCounterService } from "../../shared/no-counter.service";

@Component({
  selector: 'scm-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {
  totalItemCnt: number = 0;
  pageNo: number = 1;
  pageSize: number;
  clickedHandler: {sell: () => void, stop: () => void};
  @ViewChild(ProductListComponent) productListComponent: ProductListComponent;

  constructor(private counter: NoCounterService,
              private productBulkUpdater: ProductBulkUpdaterService,
              private toastr: ToastsManager,
              @Inject(PROD_LIST_PAGE_SIZE) pageSize: number) {
    this.pageSize = pageSize;
  }

  ngOnInit() {
    this.counter.get('product').subscribe(cnt => this.totalItemCnt = cnt);
    this.setBtnClickHandler();
  }

  pageNoChanged(pageNo) {
    this.pageNo = pageNo;
    this.productListComponent.pageNoChanged(this.pageNo);
  }

  pageSizeChanged(pageSize) {
    this.pageSize = +pageSize;
    this.productListComponent.pageSizeChanged(this.pageSize);
  }

  clickedBtn(btnEvent: string) {
    this.clickedHandler[btnEvent]();
  }

  private setBtnClickHandler() {
    const clickedSell = () => {
      this.productBulkUpdater.updateProductsToSell()
        .subscribe(
          (successIds) => {
            this.productListComponent.getPagedList();
            this.toastr.success(`상품 판매 변경 성공<br>ID: ${successIds.join(', ')}`, '[상품관리]',{enableHTML: true});
          },
          (e: Error) => {
            this.toastr.error(`상품 판매 변경 실패<br>ID: ${e.message}`, '[상품관리]', {enableHTML: true})
          }
        );
    };
    const clickedStop = () => {
      this.productBulkUpdater.updateProductsToStop()
        .subscribe(
          (successIds) => {
            this.productListComponent.getPagedList();
            this.toastr.success(`상품 판매중지 변경 성공<br>ID: ${successIds.join(', ')}`, '[상품관리]', {enableHTML: true});
          },
          (e: Error) => {
            this.toastr.error(`상품 판매중지 변경 실패<br>ID:${e.message}`, '[상품관리]',{enableHTML: true})
          }
        );
    };

    this.clickedHandler = {
      sell: clickedSell,
      stop: clickedStop
    };
  }
}
