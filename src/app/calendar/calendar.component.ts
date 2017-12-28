import { Component } from '@angular/core'

@Component({
  moduleId: module.id,
  selector: 'my-calendar',
  templateUrl: 'calendar.component.html'
})
export class CalendarComponent {
    //events:IEvent[]
    
    constructor(
     // private eventService: EventService,
      //private route: ActivatedRoute
      ) { }  
  
    ngOnInit() {
      //this.events = this.route.snapshot.data['events']
    }
  }