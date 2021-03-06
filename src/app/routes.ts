import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MediaComponent} from './media/media.component';
import {EventCalendarComponent} from './calendar/event-calendar.component';
import {ContactusComponent} from './contactus/contactus.component';
/*import { 
  EventsListComponent, 
  EventDetailsComponent, 
  CreateEventComponent, 
  EventListResolver,
  CreateSessionComponent,
  EventResolver } from './events/index'*/
//import { Error404Component } from './errors/404.component'

export const appRoutes : Routes = [ 
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'media', component: MediaComponent },
  { path: 'calendar', component: EventCalendarComponent },
  { path: 'contactus', component: ContactusComponent }
]