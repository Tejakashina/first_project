import { AfterContentChecked, AfterContentInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements 
OnInit, 
OnDestroy,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked  {

  constructor() { 
    console.log('child constructor called');
    
  }

  ngOnInit(): void {
    console.log('child ngOnInit is called');
    
  }
  ngOnDestroy(){
    console.log('child OnDestroy called');
       
   }
   ngOnChanges() {
       console.log('child OnChanges called');
       
   }
   ngDoCheck() {
     console.log('child DoCheck called');
         
   }
   ngAfterContentInit() {
     console.log('child ContentInit called');
       
   }
   ngAfterContentChecked() {
       console.log('child content checked called');
       
   }
 

}
