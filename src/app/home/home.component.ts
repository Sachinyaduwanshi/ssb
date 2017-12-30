import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent {
    //events:IEvent[]
    currentEvents = [
      {label: 'Yoga', value: 'Dec 30 2017 7 to 8 am'},
      {label: 'Bhajan', value: 'Dec 30 2017 8 to 9 am'},
      {label: 'Kids Sanskrit Classes', value: 'Dec 30 2017 10 to 11 am'}
    ];
    constructor(
     // private eventService: EventService,
      //private route: ActivatedRoute
      ) { }  
  
    ngOnInit() {
      //this.events = this.route.snapshot.data['events']
    }
  }