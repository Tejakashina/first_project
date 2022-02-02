import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  customerName;
  customerAge=25;
  details=false;

  constructor() { }

  ngOnInit(): void {
  }
swimmingpass(){
  if (this.customerAge>=10) {
    return true;
  }
  else{
    return false;
  }
}
pubpass(){
  if (this.customerAge>=21) {
    return true;
  }
  else{
    return false;
  }
}
  gympass(){
    if (this.customerAge>=21) {
      return true;
    }
    else{
      return false;

  }
}
detailssubmission(){
this.details=true;
}
}
