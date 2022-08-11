import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

import {MatSnackBar} from '@angular/material/snack-bar';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });
  campaignTwo = new FormGroup({
    start: new FormControl(new Date(year, month, 15)),
    end: new FormControl(new Date(year, month, 19)),
  });

  centered = false;
  disabled = false;
  unbounded = false;

  radius: any;
  color: any;

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

}
