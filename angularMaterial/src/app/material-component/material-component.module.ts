import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialComponentRoutingModule } from './material-component-routing.module';
import { MaterialComponentComponent } from './material-component.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import { MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import { DatepickerComponent } from './datepicker/datepicker.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRippleModule} from '@angular/material/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    MaterialComponentComponent,
    DatepickerComponent
  ],
  imports: [
    CommonModule,
    MaterialComponentRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatIconModule,
    MatBottomSheetModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatRippleModule,
    MatSnackBarModule
  ]
})
export class MaterialComponentModule { }