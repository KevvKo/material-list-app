import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialListPageComponent } from './pages/material-list-page/material-list-page.component';

const routes: Routes = [
  { path: '', component: MaterialListPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
