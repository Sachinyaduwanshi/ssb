import { Component } from '@angular/core';
//import {MenuItem} from "primeng/primeng";
//import {Menu} from "primeng/components/menu/menu";
import {ActivatedRoute, Router} from "@angular/router";

declare var jQuery :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items: Array<any> = []


  constructor() {
    
    this.items = [
      { name: 'assets/images/saibaba0.jpg' },
      { name: 'assets/images/saibaba1.jpg' },
      { name: 'assets/images/saibaba2.jpg' },
      { name: 'assets/images/saibaba3.jpg' },
      { name: 'assets/images/saibaba4.jpg' }      
    ]
  }

 
}
