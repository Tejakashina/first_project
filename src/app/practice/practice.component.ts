import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  name:string="tejasri" ;
  img;
  text="TextColor";
  required=true;
  Group={
    "TextColor":this.required,
    "TextStyle":this.required,
    "TextSize":this.required,
  };
  event;
  myStyles={
    color:"orange",
    fontStyle:"italic",
    fontSize:"50px",
  }
  constructor() { }

  ngOnInit(): void {
    this.img="https://cdn.pixabay.com/photo/2021/12/08/11/01/christmas-6855367__340.jpg";
 
  }
//  myColor="pink";
//  yes(){
//   //  console.log("hi world");
//   // this.event= "welcome hyderabad"; 
   
//  }
  magic(event){
//  console.log(event);



   
 }
}
