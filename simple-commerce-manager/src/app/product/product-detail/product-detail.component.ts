import { Component, OnInit } from '@angular/core';
import { Product, ProdStatus } from "../product.model";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Categories } from "../../category/category.model";
import { ToastsManager } from "ng2-toastr";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { ActionMode, ScmSharedUtil } from "../../shared/scm-shared-util";
import { NumberRangeValidator } from "../../shared/custom-validators";
import { DataStoreService } from "../../shared/data-store.service";
import { CanComponentDeactivate } from "../../shared/can-deactivate-guard.service";


@Component({
  selector: 'scm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, CanComponentDeactivate {
  subTitle;
  actionMode: ActionMode;
  productForm: FormGroup;
  usedCats: Categories;
  private prodNo: number;
  private totalItemCnt;
  private submitted = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private database: DataStoreService,
              private fb: FormBuilder,
              private toastr: ToastsManager) {
    this.initForm();
  }

  ngOnInit() {
    this.route.queryParams.filter(q => q['action'] !== undefined)
      .do(q => this._setActionMode(q))
      .switchMap(q => this.route.data)
      .map((data: {detail: any}) => data.detail)
      .subscribe(data => {
        const prod: Product = data[0];
        this.prodNo = prod.no;
        this.productForm.patchValue(prod);
        this.usedCats = data[1];
      });

    this.database.count('product').subscribe(cnt => this.totalItemCnt = cnt);
  }

  canDeactivate() {
    if ( this.submitted || this.productForm.pristine ) return true;
    return confirm('저장하지 않고 돌아가면 수정사항이 반영되지 않습니다.');
  }

  submit() {
    const product: Product = this.productForm.value;

    if ( this.actionMode === 'create' ) {
      const productFn = (no) => {
        product.no = no;
        return product;
      };
      this.database.create('product', productFn).subscribe(this._onSuccess(), this._onError());
      return;
    }

    product.updatedTime = ScmSharedUtil.getCurrentDateTime();
    this.database.update('product', product).then(this._onSuccess(), this._onError());
  }

  cancel() {
    this.redirectToProductList();
  }

  isFirstItem() {
    return this.prodNo === 1;
  }

  isLastItem() {
    return this.prodNo === this.totalItemCnt;
  }

  goPrevItem() {
    this.router.navigate(['product-list', 'product', this.prodNo - 1]);
  }

  goNextItem() {
    this.router.navigate(['prodcut-list', 'product', this.prodNo + 1]);
  }

  initForm() {
    this.productForm = this.fb.group({
      no: [0],
      name: ['', Validators.required],
      listPrice: [0,
        Validators.compose([
          Validators.required,
          NumberRangeValidator.min(1000),
          NumberRangeValidator.max(1000000),
          Validators.pattern('[1-9]\\d*')
        ])],
      status: [ProdStatus.NOT_FOR_SALE],
      catNo: ['0', Validators.required],
      isUse: [true, Validators.required],
      qty: [0,
        Validators.compose([
          Validators.required,
          NumberRangeValidator.min(1),
          NumberRangeValidator.max(1000),
          Validators.pattern('[1-9]\\d*')
        ])
      ],
      desc: ['',
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(1000)
        ])
      ],
      createdTime: [ScmSharedUtil.getCurrentDateTime()],
      updatedTime: [''],
    });
  }

  private _setActionMode(q) {
    this.actionMode = q['action'];
    switch (this.actionMode) {
      case 'create':
        this.subTitle = '등록';
        break;
      case 'edit':
      default:
        this.subTitle = '수정';
        break;
    }
  }

  private redirectToProductList() {
    this.router.navigate(['product-list']);
  }

  private _onSuccess() {
    return () => {
      this.toastr.success(`상품 ${this.subTitle} 완료`, '[상품관리]');
      this.submitted = true;
      this.redirectToProductList();
    }
  }

  private _onError() {
    return (e) => {
      this.toastr.error(`상품 ${this.subTitle} 실패`, '[상품관리]');
      this.redirectToProductList();
    };
  }
}
