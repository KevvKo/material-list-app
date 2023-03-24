import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initMaterialLoadFactory } from './core/utils/init-materials-load';
import { MaterialListPageComponent } from './pages/material-list-page/material-list-page.component';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input'; 
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar'
import { PageHeaderComponent } from './layout/components/page-header/page-header.component';
import { PageFooterComponent } from './layout/components/page-footer/page-footer.component';
import { PageMainComponent } from './layout/components/page-main/page-main.component';
import { DefaultPageComponent } from './layout/container/default-page/default-page.component';
import { PageContentComponent } from './layout/components/page-content/page-content.component';
import { DetailOverviewPageComponent } from './pages/detail-overview-page/detail-overview-page.component';
import { DetailOverviewModalComponent } from './components/detail-overview-modal/detail-overview-modal.component';
import { MaterialListComponent } from './components/material-list/material-list.component';

import { MaterialsModule } from './store/materials/materials.module';
import { SetupService } from './core/services/setup-service/setup.service';

@NgModule({
  declarations: [
    AppComponent,
    MaterialListPageComponent,
    PageHeaderComponent,
    PageFooterComponent,
    PageMainComponent,
    DefaultPageComponent,
    PageContentComponent,
    DetailOverviewPageComponent,
    DetailOverviewModalComponent,
    MaterialListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
    MaterialsModule,
    BrowserAnimationsModule,
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
