import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AbhiService {

  constructor() { }
  places=[{
    climate:"humid",
    place:"hyd",
  },
  {
    climate:"normal",
    place:"kodad"
  }
  
  ]
}