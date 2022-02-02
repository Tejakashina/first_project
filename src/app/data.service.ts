import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {  }
  places=[
    {
      pName:"banglore",
      distance:800,
      climate:"cool"
    },
    {
      pName:"Goa",
      distance:1000,
      climate:"chill"
    },
    {
      pName:"kodad",
      distance:400,
      climate:"uncertain"
    }
  ]
  onRequest(data){
    console.log(`hello ${data}`);
    
  }
  callingFromHtml(){
    console.log('the method is called from html');
    
  }
}
