import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialService } from './core/services/material.service';
import { initMaterialLoadFactory } from './shared/utils/init-materials-load';
import { MaterialListPageComponent } from './pages/material-list-page/material-list-page.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from '@angular/material/toolbar'
import { PageHeaderComponent } from './layout/components/page-header/page-header.component';
import { PageFooterComponent } from './layout/components/page-footer/page-footer.component';
import { PageMainComponent } from './layout/components/page-main/page-main.component';
import { DefaultPageComponent } from './layout/container/default-page/default-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialListPageComponent,
    PageHeaderComponent,
    PageFooterComponent,
    PageMainComponent,
    DefaultPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDividerModule,
    MatListModule,
    MatToolbarModule,
    StoreModule.forRoot({}, {}),
    BrowserAnimationsModule,
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initMaterialLoadFactory,
    deps: [MaterialService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
