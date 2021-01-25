import { RemultModule, NotSignedInGuard, SignedInGuard } from '@remult/angular';
import { NgModule, ErrorHandler } from '@angular/core';
import { Routes, RouterModule, Route, ActivatedRouteSnapshot } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { RegisterComponent } from './users/register/register.component';
import { UpdateInfoComponent } from './users/update-info/update-info.component';

import { UsersComponent } from './users/users.component';
import { Roles, AdminGuard } from './users/roles';
import { ShowDialogOnErrorErrorHandler } from './common/dialog';
import { FullPageLayoutComponent } from './full-page-layout/full-page-layout.component';
import { ProductsComponent } from './products/products.component';
import { ServerSideSearchComponent } from './server-side-search/server-side-search.component';
import { SearchFieldWithDataGridComponent } from './search-field-with-data-grid/search-field-with-data-grid.component';
import { ServerSideSearchSelectionDialogDemoComponent } from './server-side-search-selection-dialog/server-side-search-selection-dialog-demo.component';
import { DynamicServerSideSearchDialogComponent } from './dynamic-server-side-search-dialog/dynamic-server-side-search-dialog.component';
import { DynamicServerSideSearchDialogDemoComponent } from './dynamic-server-side-search-dialog/dynamic-server-side-search-dialog-demo.component';
import { EncapsulateProductIdColumnComponent } from './encapsulate-product-id-column/encapsulate-product-id-column.component';
import { ImportCsvComponent } from './import-csv/import-csv.component';


const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  {
    path: 'Encapsulate Product Id Column', component: EncapsulateProductIdColumnComponent, data: {
      description: `In this sample we'll demonstrate how to create a powerful ProductColumn that will encapsulate all the behaviors that a product needs`
    }
  },
  {
    path: 'Server Side Search', component: ServerSideSearchComponent, data: {
      description: 'Demo of a basic angular list, with a search field, that performs the search using server side search'
    }
  },
  {
    path: 'Search field with Data Grid', component: SearchFieldWithDataGridComponent, data: {
      description: 'Demo of a data grid with a search field above it, that performs the search using server side search'
    }
  },
  {
    path: 'Server Side Search Selection Dialog', component: ServerSideSearchSelectionDialogDemoComponent, data: {
      description: 'a Search popup that can be used to select a product with server side search'
    }
  },
  { path: 'Dynamic Server Side Search Dialog', component: DynamicServerSideSearchDialogDemoComponent ,data:{
    description:'A search popup that can be used to select any entity, utilizing a server side search'
  }},
  { path: 'Full Page Layout', component: FullPageLayoutComponent,data:{
    description:'Demo of using the full height of the page, with top, bottom and a middle scrollable part'
  } },
  { path: 'Import from csv', component: ImportCsvComponent,data:{
    description:'Demo of importing products from a csv file'
  } },
  { path: 'Products', component: ProductsComponent },
  { path: 'User Accounts', component: UsersComponent, canActivate: [AdminGuard] },

  { path: 'Register', component: RegisterComponent, canActivate: [NotSignedInGuard] },
  { path: 'Account Info', component: UpdateInfoComponent, canActivate: [SignedInGuard] },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: '**', redirectTo: '/Home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), RemultModule],
  providers: [AdminGuard, { provide: ErrorHandler, useClass: ShowDialogOnErrorErrorHandler }],
  exports: [RouterModule]
})
export class AppRoutingModule { }

