import { IdEntity, StringColumn, EntityClass, NumberColumn } from '@remult/core';

@EntityClass
export class Products extends IdEntity {
    name = new StringColumn();
    price = new NumberColumn({ decimalDigits: 2 });
    constructor() {
        super({
            name: "Products",
            allowApiCRUD: true,
            allowApiRead: true
        });
    }
}