import { Component } from '@angular/core'

@Component({
  moduleId: module.id,
  selector: 'my-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent {
    //events:IEvent[]
    
    constructor(
     // private eventService: EventService,
      //private route: ActivatedRoute
      ) { }  
  
    ngOnInit() {
      //this.events = this.route.snapshot.data['events']
    }
  }