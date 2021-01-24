import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RemultModule } from '@remult/angular';
import { UsersComponent } from './users/users.component';
import { UpdateInfoComponent } from './users/update-info/update-info.component';
import { RegisterComponent } from './users/register/register.component';
import { HomeComponent } from './home/home.component';
import { YesNoQuestionComponent } from './common/yes-no-question/yes-no-question.component';
import { SignInComponent } from './common/sign-in/sign-in.component';
import { InputAreaComponent } from './common/input-area/input-area.component';
import { DialogService } from './common/dialog';
import { AdminGuard } from './users/roles';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullPageLayoutComponent } from './full-page-layout/full-page-layout.component';
import { ProductsComponent } from './products/products.component';
import { ServerSideSearchComponent } from './server-side-search/server-side-search.component';
import { SearchFieldWithDataGridComponent } from './search-field-with-data-grid/search-field-with-data-grid.component';
import { ServerSideSearchSelectionDialogComponent } from './server-side-search-selection-dialog/server-side-search-selection-dialog.component';
import { ServerSideSearchSelectionDialogDemoComponent as ServerSideSearchSelectionDialogDemoComponent } from './server-side-search-selection-dialog/server-side-search-selection-dialog-demo.component';
import { DynamicServerSideSearchDialogComponent } from './dynamic-server-side-search-dialog/dynamic-server-side-search-dialog.component';
import { DynamicServerSideSearchDialogDemoComponent } from './dynamic-server-side-search-dialog/dynamic-server-side-search-dialog-demo.component';
import { EncapsulateProductIdColumnComponent } from './encapsulate-product-id-column/encapsulate-product-id-column.component';
import { ImportCsvComponent } from './import-csv/import-csv.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UpdateInfoComponent,
    RegisterComponent,
    HomeComponent,
    YesNoQuestionComponent,
    SignInComponent,
    InputAreaComponent,
    FullPageLayoutComponent,
    ProductsComponent,
    ServerSideSearchComponent,
    SearchFieldWithDataGridComponent,
    ServerSideSearchSelectionDialogComponent,
    ServerSideSearchSelectionDialogDemoComponent,
    DynamicServerSideSearchDialogComponent,
    DynamicServerSideSearchDialogDemoComponent,
    EncapsulateProductIdColumnComponent,
    ImportCsvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatCardModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    RemultModule,
    BrowserAnimationsModule
  ],
  providers: [DialogService, AdminGuard],
  bootstrap: [AppComponent],
  entryComponents: [YesNoQuestionComponent, SignInComponent, InputAreaComponent,
    ServerSideSearchSelectionDialogComponent,
    DynamicServerSideSearchDialogComponent]
})
export class AppModule { }
