import { Component, OnInit } from '@angular/core';
import { BusyService } from '@remult/angular';
import { Context, StringColumn } from '@remult/core';
import { Products } from '../products/products';

@Component({
  selector: 'app-search-field-with-data-grid',
  template: `
   <data-control [column]="searchString"></data-control>
   <data-grid [settings]="products" ></data-grid>
  `,
  styles: []
})
export class SearchFieldWithDataGridComponent  {

  constructor(private context: Context, private busy: BusyService) { }
  products =  this.context.for(Products).gridSettings({
    where: p => 
    // if there is a search value, search by it
      this.searchString.value ? p.name.isContains(this.searchString)
        : undefined
  });
  

  searchString = new StringColumn({
    caption: 'search product name',
    valueChange: async () => {
      // the call to `this.busy.donotWait` causes the load products method to run without the "Busy" circle in the ui
      await this.busy.donotWait(async () => await this.products.reloadData());
    }
  })

}
