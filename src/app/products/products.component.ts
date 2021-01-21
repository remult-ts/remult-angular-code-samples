import { Component, OnInit } from '@angular/core';
import { Context } from '@remult/core';
import { Products } from './producs';


@Component({
  selector: 'app-products',
  template: `<data-grid [settings]="products"></data-grid>`
})
export class ProductsComponent implements OnInit {

  constructor(private context: Context) { }
  products = this.context.for(Products).gridSettings({ allowCRUD: true })
  ngOnInit() {
  }

}
