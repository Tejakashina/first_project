import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.css']
})
export class Example2Component implements OnInit {
signInForm:FormGroup ;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signInForm=this.fb.group({
      email:[''],
      password:['',[Validators.required]]
    })

  }
onFormSubmit(){
  console.log(this.signInForm.value);
  
}
}
