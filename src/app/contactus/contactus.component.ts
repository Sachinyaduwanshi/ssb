import { Component } from '@angular/core'

@Component({
  moduleId: module.id,
  selector: 'my-contact',
  templateUrl: 'contactus.component.html'
})
export class ContactusComponent {
    //events:IEvent[]
    
    constructor(
     // private eventService: EventService,
      //private route: ActivatedRoute
      ) { }  
  
    ngOnInit() {
      //this.events = this.route.snapshot.data['events']
    }
  }