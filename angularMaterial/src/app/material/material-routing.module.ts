import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MaterialComponent } from './material.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: MaterialComponent, children:[
    {path: '', component:LoginComponent},
    {path: 'user', component:UserComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }
