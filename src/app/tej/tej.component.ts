import { Component, OnInit } from '@angular/core';
import { AbhiService } from '../abhi.service';

@Component({
  selector: 'app-tej',
  templateUrl: './tej.component.html',
  styleUrls: ['./tej.component.css']
})
export class TejComponent implements OnInit {

  constructor(private p:AbhiService) { }
  c;

  ngOnInit(): void {
    this.c=this.p.places
  }
  

}
