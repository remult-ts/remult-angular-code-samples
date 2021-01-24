import { Component } from '@angular/core';
import { Context } from '@remult/core';
import { ProductColumn } from './productColumn';

@Component({
  selector: 'app-encapsulate-product-id-column',
  template: `
    <data-control [column]="product" ></data-control>
  `
})
export class EncapsulateProductIdColumnComponent {
  product = new ProductColumn(this.context);
  constructor(private context: Context) { }
}
