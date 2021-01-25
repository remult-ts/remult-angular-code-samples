import { Component, OnInit } from '@angular/core';
import { Context } from '@remult/core';
import * as xlsx from 'xlsx';//https://sheetjs.com/
import { Products } from '../products/products';

@Component({
  selector: 'app-export-excel',
  template: `
    <button mat-raised-button (click)="doExport()">Export products to excel</button>
  `,
  styles: []
})
export class ExportExcelComponent implements OnInit {

  constructor(private context: Context) { }

  ngOnInit() {
  }
  async doExport() {

    let result = [];

    for await (const p of  this.context.for(Products).iterate()) {
      let item = {};
      for (const col of p.columns) {
        item[col.defs.caption] = col.value;
      }
      result.push(item);
    }
    let wb = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, xlsx.utils.json_to_sheet(result));
    xlsx.writeFile(wb, "products.xlsx");

  }

}
