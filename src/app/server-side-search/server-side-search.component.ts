import { Component, OnInit } from '@angular/core';
import { BusyService } from '@remult/angular';
import { Context, StringColumn } from '@remult/core';
import { Products } from '../products/products';

@Component({
  selector: 'app-server-side-search',
  template: `
<data-control [column]="searchString"></data-control>
<ul>
    <li *ngFor="let p of products">
      {{p.name.value}}
    </li>
</ul>
`
})
export class ServerSideSearchComponent implements OnInit {

  constructor(private context: Context, private busy: BusyService) { }
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

}
