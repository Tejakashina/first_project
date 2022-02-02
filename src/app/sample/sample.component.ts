import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector: 'app-sample',
    template: `<h2 [class]="successClass">goodgirl</h2>`,
    styles: []
               
})
export class sampleComponent{

public name="goodgirl";
public successClass= "text-success"
}