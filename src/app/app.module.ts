import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initMaterialLoadFactory } from './core/initializer/init-materials-load';
import { MaterialListPageComponent } from './pages/material-list-page/material-list-page.component';
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';  
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar'
import { PageHeaderComponent } from './layout/components/page-header/page-header.component';
import { PageFooterComponent } from './layout/components/page-footer/page-footer.component';
import { PageMainComponent } from './layout/components/page-main/page-main.component';
import { DefaultPageComponent } from './layout/container/default-page/default-page.component';
import { PageContentComponent } from './layout/components/page-content/page-content.component';
import { MaterialListComponent } from './components/feature-materials/material-list/material-list.component';

import { RootStoreModule } from './store/root-store.module';
import { SetupService } from './core/services/setup-service/setup.service';
import { MaterialListInputComponent } from './components/feature-materials/material-list-input/material-list-input.component';
import { MaterialsDetailsDialogComponent } from './components/feature-materials/materials-details-dialog/materials-details-dialog.component';
import { MaterialDetailEntryComponent } from './components/feature-materials/materials-details-dialog/material-details-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialListPageComponent,
    PageHeaderComponent,
    PageFooterComponent,
    PageMainComponent,
    DefaultPageComponent,
    PageContentComponent,
    MaterialListComponent,
    MaterialListInputComponent,
    MaterialsDetailsDialogComponent,
    MaterialDetailEntryComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatToolbarModule,
    ReactiveFormsModule,
    RootStoreModule,
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initMaterialLoadFactory,
    deps: [SetupService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
