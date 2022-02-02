import { AfterContentChecked, AfterContentInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements
 OnInit, 
OnDestroy,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked{
  empName;
child=false;
toggle(){
  this.child=!this.child;
}
  constructor() {
    console.log('parent constructor called');
    
   }

  ngOnInit(): void {
    console.log('parent OnInit called');
    
  }
  ngOnDestroy(){
   console.log('parent OnDestroy called');
      
  }
  ngOnChanges() {
      console.log('parent OnChanges called');
      
  }
  ngDoCheck() {
    console.log('parent DoCheck called');
        
  }
  ngAfterContentInit() {
    console.log('parent ContentInit called');
      
  }
  ngAfterContentChecked() {
      console.log(('parent content checked called'));
      
  }


}
