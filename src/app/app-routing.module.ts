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


const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Encapsulate Product Id Column', component: EncapsulateProductIdColumnComponent },
  { path: 'Server Side Search', component: ServerSideSearchComponent },
  { path: 'Search field with Data Grid', component: SearchFieldWithDataGridComponent },
  { path: 'Server Side Search Selection Dialog', component: ServerSideSearchSelectionDialogDemoComponent },
  { path: 'Dynamic Server Side Search Dialog', component: DynamicServerSideSearchDialogDemoComponent },
  { path: 'Full Page Layout', component: FullPageLayoutComponent },
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

