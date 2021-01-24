import { Context, StringColumn } from "@remult/core";
import { DynamicServerSideSearchDialogComponent } from "../dynamic-server-side-search-dialog/dynamic-server-side-search-dialog.component";
import { Products } from "../products/products";

export class ProductColumn extends StringColumn {
    constructor(private context: Context) {
        super({
            caption: 'Product',
            dataControlSettings: () => ({
                getValue: () => this.displayValue, //display the name instead of the id value
                hideDataOnInput: true, // hide the id value 
                click: async () => {
                    await this.context.openDialog(DynamicServerSideSearchDialogComponent,
                        dialog => dialog.args(Products, {
                            searchColumn: p => p.name,
                            onSelect: selectedProduct =>
                                this.value = selectedProduct.id.value
                        }));
                }
            })
        });

    }
    get displayValue() {
        return this.context.for(Products).lookup(this).name.value;
    }
}