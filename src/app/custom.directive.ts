import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private ele : ElementRef) {
    // this.ele.nativeElement.style.color="red";
  
    
   }
//  @HostListener("mouseenter") mouseEnter(){
//    this.ele.nativeElement.style.color="yellow";
//    this.ele.nativeElement.style.backgroundColor="red";
//  }
//  @HostListener("mouseleave") mouseLeave(){
//    this.ele.nativeElement.style.color="red";
//    this.ele.nativeElement.style.backgroundColor="yellow"
//  }
 @HostListener("keyup") keyUp(){
  this.ele.nativeElement.style.color="purple";
}
@HostListener("keydown") keyDown(){
  this.ele.nativeElement.style.color="orange";
 
}
@HostListener("keypress") keyPress(){
  this.ele.nativeElement.style.color="red";
  
}
}
