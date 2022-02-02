import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-query2',
  templateUrl: './query2.component.html',
  styleUrls: ['./query2.component.css']
})
export class Query2Component implements OnInit, AfterViewInit,AfterContentInit {
@ViewChild("teja") car:ElementRef
@ViewChildren("teja") cars:QueryList<any>
@ContentChild('sample') text:ElementRef
@ContentChildren('sample') texts:QueryList<any>
  constructor() { }
    
 ngOnInit(): void {
    console.log(this.car)
  }
    ngAfterViewInit(){
      console.log(this.car);
      
    this.car.nativeElement.style.color="red";
    this.cars.forEach((element) => {
      console.log(element.nativeElement.innerText);
       
    });
  }
    ngAfterContentInit() {
      console.log(this.text);
       this.text.nativeElement.style.color="blue";
       console.log(this.text.nativeElement.innerText);
       this.texts.forEach((element) => {
        console.log(element.nativeElement.innerText);
      
    });
    }

  }
