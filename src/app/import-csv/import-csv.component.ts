import { Component } from '@angular/core';
import { Context, ServerFunction } from '@remult/core';
import * as csv from 'convert-csv-to-array';//https://www.npmjs.com/package/convert-csv-to-array
import { Products } from '../products/products';

@Component({
  selector: 'app-import-csv',
  template: `
      <input #fileInput type="file" (input)="onFileInput($event)" />
      <br>
      <a href="/assets/products.csv">Click here for a sample csv file</a>
  `,
  styles: []
})
export class ImportCsvComponent {


  async onFileInput(eventArgs: any) {
    for (const file of eventArgs.target.files) {
      let f: File = file;
      await new Promise((res) => {
        var fileReader = new FileReader();
        fileReader.onload = async (e: any) => {
          var dataArray: [] = csv.convertCSVToArray(e.target.result, { type: 'array' });
          let processed = await ImportCsvComponent.importProductsArray(dataArray);
          alert("loaded " + processed + " products");
        };
        fileReader.readAsText(f);
      });
      return;//to import the first file only
    }
  }

  @ServerFunction({ allowed: true })
  static async importProductsArray(dataArray: any, context?: Context) {
    let i = 0;
    for (const row of dataArray) {
      i++;
      //find existing product by name
      let p = await context.for(Products).findFirst(p => p.name.isEqualTo(row[0]));
      //if product doesn't exist, create it
      if (!p) {
        p = context.for(Products).create();
        p.name.value = row[0];
      }
      p.price.value = row[1];
      await p.save();
    }
    return i;
  }
}
