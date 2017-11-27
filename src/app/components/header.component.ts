import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
    selector: 'header',
    template: `<h1>{{name}}</h1>
    {{list[0]}}
    <ul>
    <li *ngFor = "let data of list" (click)="displayName(data)">{{data}}</li>
    </ul>
    
    `,
})
export class HeaderComponent { 
    
    name = 'Header Component';
    list = ["Jeeva", "Arun", "Dave","Anand"];
    displayName(data:string){
        alert(data);
    }
    

    constructor(public DataService: DataService) {
        
        console.log(this.DataService.getData())
     }
    
      


}