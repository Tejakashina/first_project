import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 empDetails = [
   {
     empName : 'Teja',
     empId : 143,
     designation : 'doctor'
   },
   {
empName:'pooja',
empId : 100,
designation : 'Astronaut'
   },
   {
     empName:'gagan',
     empId : 300,
     designation :'superstar'
   }
 ]
}
