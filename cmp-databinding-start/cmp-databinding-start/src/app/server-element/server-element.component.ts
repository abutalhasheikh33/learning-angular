import { Component, Input, OnInit,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css'
})
export class ServerElementComponent implements OnInit,OnChanges{
 @Input() element : { type:string,name:string,content:string };
 @Input() name:string
  ngOnInit() {
      console.log("ngONinit called")
  }
  constructor(){
    console.log("constructor called")
  }
  ngOnChanges(changes:SimpleChanges){
    console.log(changes)
    console.log("ngOnChanges is called")
  }
}
