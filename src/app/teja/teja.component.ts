import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teja',
  templateUrl: './teja.component.html',
  styleUrls: ['./teja.component.css']
})
export class TejaComponent implements OnInit {
  fname:string='Teja sri'
    id =420;
    companyName: string='TechnoElevate';
    
  //   ans;
    link;
     Product="tandoori";
  content= "wait for magic";
  // customerName;
  // customerAge;
  
  constructor() { 
    setTimeout(()=>{
      this.fname='pooja'
    },4000)
    
  }

  ngOnInit(): void {
    // this.ans=prompt("do you like dog or parrot?");
    // if(this.ans=="dog"){
    //   this.link='https://media.istockphoto.com/photos/friends-red-cat-and-corgi-dog-walking-in-a-summer-meadow-under-the-picture-id1324099927?b=1&k=20&m=1324099927&s=170667a&w=0&h=_jRsZpMNYr--izDfsMtCB7MV97R-yMphyDTjcav85xc=';
    //   }
    // else{
    //   this.link='https://cdn.pixabay.com/photo/2021/11/18/16/12/bird-6806741__340.jpg';
    // }
  //   this.ans=prompt('which site to be open');
  //   this.link=`https://${this.ans}.com`
  //  
  }
  //  magic(){
  //  this.link="https://cdn.pixabay.com/photo/2020/12/09/16/08/joker-5817831__340.png";
  //    this.content="fool"
  //  }
  // magic(event){
  //  this.ans=event.target.value;
  // }
  // Newmagic(){
  //  this.content=`${this.ans} is the active girl in the class`; 
  // }
  
  
}
