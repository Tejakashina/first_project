import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component'; import { IntroComponent } from './intro/intro.component';
import { sampleComponent } from './sample/sample.component';
import { FordirectiveComponent } from './fordirective/fordirective.component';
 import { TejaComponent } from './teja/teja.component';
 import { DirectivesComponent } from './directives/directives.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { HeaderComponent } from './header/header.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { Query1Component } from './query1/query1.component';
import { Query2Component } from './query2/query2.component';
import { PlacesComponent } from './places/places.component';
import { CustomDirective } from './custom.directive';
import { PracticeComponent } from './practice/practice.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { ExampleComponent } from './example/example.component';
import { Example2Component } from './example2/example2.component';
import { TejComponent } from './tej/tej.component';



const routes:Routes=[
  {path:'parent',component:ParentComponent},
  {path:'ng-style',component:NgstyleComponent}
]
@NgModule({
  declarations: [
     AppComponent,
     IntroComponent,
  sampleComponent,
    FordirectiveComponent,
  TejaComponent,
    DirectivesComponent,
    NgstyleComponent,
    ChildComponent,
    ParentComponent,
    FirstComponent,
    SecondComponent,
    HeaderComponent,
    Query1Component,
    Query2Component,
    PlacesComponent,
    CustomDirective,
    PracticeComponent,
    Parent1Component,
    Child1Component,
    ExampleComponent,
    Example2Component,
    TejComponent,

    
  
  ],
  imports: [
    BrowserModule,
  FormsModule,
  RouterModule.forRoot(routes),
  ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
