import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'material', loadChildren: () => import('./material/material.module').then(m => m.MaterialModule) },
  { path: 'material-Component', loadChildren: () => import('./material-component/material-component.module').then(m => m.MaterialComponentModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
