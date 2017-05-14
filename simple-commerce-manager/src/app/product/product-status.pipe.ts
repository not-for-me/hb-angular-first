import { Pipe, PipeTransform } from '@angular/core';
import { ProdStatus } from "./product.model";

@Pipe({
  name: 'productStatus'
})
export class ProductStatusPipe implements PipeTransform {
  private labelMap;

  constructor() {
    this.labelMap = {};
    this.labelMap[ProdStatus.WAIT_FOR_SALE] = '판매 대기';
    this.labelMap[ProdStatus.ON_SALE] = '판매 중';
    this.labelMap[ProdStatus.NOT_FOR_SALE] = '판매 중지';
  }

  transform(value: ProdStatus, args?: any): any {
    if (value !== undefined && this.labelMap.hasOwnProperty(value)) {
      return this.labelMap[value];
    }

    return '-';
  }

}
