import { Component } from '@angular/core'


@Component({
  moduleId: module.id,
  selector: 'nav-bar',
  templateUrl: 'navbar.component.html'
})
export class NavBarComponent {
  searchTerm: string = "";
  
  constructor() {
  }

  searchSessions(searchTerm) {
   // this.eventService.searchSessions(searchTerm).subscribe(sessions => {
   //   this.foundSessions = sessions;
   // })
  }
}
