import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';



@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

 

  centered = false;
  disabled = false;
  unbounded = false;

  radius: any;
  color: any;

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  value = 'Clear me';
  
  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

}
