import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  applyFilter($event : any){
    this.users.filter = $event.target.value;
  }

  users!: MatTableDataSource <any>;

  constructor(private usersData: AuthService) {
    console.log('user loaded')
    this.usersData.users().subscribe((data: any) => {
      console.warn("data", data)
      this.users = new MatTableDataSource (data.data);

    })
  }

  displayedColumns: string[] = ['id', 'email', 'first_name', 'last_name', 'avatar'];

  image: any;

  clicked(data: any) {
    this.image = data;
  }


  ngOnInit(): void {
  }
  

}
