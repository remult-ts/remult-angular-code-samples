import { Component, OnInit } from '@angular/core';
import { Context } from '@remult/core';
import { Products } from '../products/products';
import { DynamicServerSideSearchDialogComponent } from './dynamic-server-side-search-dialog.component';

@Component({
  selector: 'app-dynamic-server-side-search-dialog-demo',
  template: `
 selected product id: {{productId}}
    <br>
    Selected Product Name: {{getSelectedProductName()}}
    <br>
    <button mat-raised-button (click)="showSelectionDialog()">Select Product</button>  `,
  styles: []
})
export class DynamicServerSideSearchDialogDemoComponent {

  constructor(private context: Context) { }
  productId: string = '';
  async showSelectionDialog() {
    await this.context.openDialog(DynamicServerSideSearchDialogComponent,
      dialog => dialog.args(Products, {
        searchColumn: p => p.name,
        onSelect: selectedProduct =>
          this.productId = selectedProduct.id.value
      }));
  }
  getSelectedProductName() {
    return this.context.for(Products).lookup(p => p.id.isEqualTo(this.productId)).name.value;
  }

}
