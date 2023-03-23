import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultPageComponent } from './layout/container/default-page/default-page.component';
import { MaterialListPageComponent } from './pages/material-list-page/material-list-page.component';

const routes: Routes = [
  { 
    path: '', 
    component: DefaultPageComponent,
    children: [
      {
        path: '',
        component: MaterialListPageComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
