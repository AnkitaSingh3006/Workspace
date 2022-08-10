import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialComponentComponent } from './material-component.component';

const routes: Routes = [{ path: '', component: MaterialComponentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialComponentRoutingModule { }
