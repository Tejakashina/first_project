import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
empData=[{
  empName:"teja",
  empSalary:60000
},
{
  empName:"gagan",
  empSalary:80000
},
{
  empName:"twinkle",
  empSalary:90000
}
]
}
