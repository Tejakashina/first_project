import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {
  customerName;
  customerAge=25;
  details=false;
  color

  constructor() { }

  ngOnInit(): void {
  }
  swimmingpass(){
    if (this.customerAge>=10) {
      return 'success';
    }
    else{
      return 'failure';
    }
  };
  pubpass(){
    if (this.customerAge>=21) {
      return 'success';
    }
    else{
      return 'failure';
    }
  };
    gympass(){
      if (this.customerAge>=21) {
        return 'success';
      }
      else{
        return 'failure';
  
    }
  }
  detailssubmission(){
  this.details=true;
  }
  }
  

