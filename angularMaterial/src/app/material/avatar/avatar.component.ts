import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit, OnChanges {

  
  @Input() image:string = '';

  constructor() { console.log("avatar loaded")}

  ngOnInit(): void {
  }

  myImageData : any ;
  ngOnChanges(changes: SimpleChanges): void {
    for (let propName in changes){
      if (propName == 'image'){
        this.myImageData = changes [propName].currentValue
      }
    }
    console.log(this.myImageData)
  }

}
