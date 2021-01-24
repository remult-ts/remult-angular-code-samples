import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BusyService } from '@remult/angular';
import { Context, StringColumn } from '@remult/core';
import { Products } from '../products/products';

@Component({
  selector: 'app-server-side-search-selection-dialog',
  template: `
<h1 mat-dialog-title>Select Product</h1>

<div mat-dialog-content>
    <form (submit)="selectFirst()">
        <mat-form-field>
            <input matInput [(ngModel)]="searchString.value" [ngModelOptions]="{standalone: true}"> 
        </mat-form-field>
    </form>
    <mat-nav-list role="list" *ngIf="products">
        <ng-container *ngFor="let o of products">
            <mat-list-item role="listitem" style="height:36px"
                 (click)="select(o)">
                {{o.name.value}}
            </mat-list-item>
            <mat-divider ></mat-divider>
        </ng-container>
    </mat-nav-list>
</div>
<div mat-dialog-actions>

    <button mat-icon-button mat-dialog-close>
        <mat-icon>clear</mat-icon>
    </button>
</div>  `,
  styles: []
})
export class ServerSideSearchSelectionDialogComponent implements OnInit {

  constructor(private context: Context, private busy: BusyService, private dialogRef: MatDialogRef<any>) { }
  products: Products[] = [];
  ngOnInit() {
    this.loadProducts();
  }
  async loadProducts() {
    this.products = await this.context.for(Products).find({
      where: p =>
        // if there is a search value, search by it
        this.searchString.value ? p.name.isContains(this.searchString)
          : undefined
    });
  }

  searchString = new StringColumn({
    caption: 'search product name',
    valueChange: async () => {
      // the call to `this.busy.donotWait` causes the load products method to run without the "Busy" circle in the ui
      await this.busy.donotWait(async () => await this.loadProducts());
    }
  })

  args: {
    onSelect: (p: Products) => void;
  }
  select(p: Products) {
    this.args.onSelect(p);
    this.dialogRef.close();
  }
  selectFirst() {
    if (this.products.length > 0)
      this.select(this.products[0]);
  }

}
