import { Component, OnInit } from '@angular/core';
import { Context, StringColumn } from '@remult/core';
import { Products } from '../products/products';
import { ServerSideSearchSelectionDialogComponent } from './server-side-search-selection-dialog.component';

@Component({
    selector: 'app-server-side-search-selection-dialog-demo',
    template: `
    selected product id: {{productId}}
    <br>
    Selected Product Name: {{getSelectedProductName()}}
    <br>
    <button mat-raised-button (click)="showSelectionDialog()">Select Product</button>
  `,
    styles: []
})
export class ServerSideSearchSelectionDialogComponentDemo {
    constructor(private context: Context) { }
    productId: string = '';
    async showSelectionDialog() {
        await this.context.openDialog(ServerSideSearchSelectionDialogComponent,
            dialog => dialog.args = {
                onSelect: selectedProduct => {
                    this.productId = selectedProduct.id.value
                }
            });
    }
    getSelectedProductName() {
        return this.context.for(Products).lookup(p => p.id.isEqualTo(this.productId)).name.value;
    }
}
