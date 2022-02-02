import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
componentData;
placeName;
  constructor(public data:DataService) { }

  ngOnInit(): void {
    this.componentData=this.data.places;
  }
sendToService(){
  this.data.onRequest(this.placeName);
}
}
