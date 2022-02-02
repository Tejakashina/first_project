import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
// @Input() traineeName;
@Input() getInstruction
@Output() 
childEvent=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  
  
  }
  replyMethod(event:any){
   this.childEvent.emit(event.target.value)
  }

}
