import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';
import { HomeComponent } from './home/home.component';
import { MediaComponent } from './media/media.component';
import { EventCalendarComponent } from './calendar/event-calendar.component';
import { ContactusComponent } from './contactus/contactus.component';

import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { CalendarModule } from 'angular-calendar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import {CalendarModule} from 'ap-angular2-fullcalendar';
//import {CalendarComponent} from 'ap-angular2-fullcalendar';
import {DataTableModule, SharedModule} from 'primeng/primeng';
//import {Moment} from 'moment/moment';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    MediaComponent,
    EventCalendarComponent,
    //CalendarComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule  ,
    RouterModule.forRoot(appRoutes),
    CalendarModule.forRoot(),
    NgbModule.forRoot(),
    DataTableModule,
    SharedModule,
    BrowserAnimationsModule
    //ScheduleModule,
    //MomentModule
    /*MenuModule,
    PanelModule,
    ChartModule,
    InputTextModule,
    ButtonModule,
    InputMaskModule,
    InputTextareaModule,
    EditorModule,
    CalendarModule,
    RadioButtonModule,
    FieldsetModule,
    DropdownModule,
    MultiSelectModule,
    ListboxModule,
    SpinnerModule,
    SliderModule,
    RatingModule,
    DataTableModule,
    ContextMenuModule,
    TabViewModule,
    DialogModule,
    StepsModule,
    ScheduleModule,
    TreeModule,
    GMapModule,
    DataGridModule,
    TooltipModule,
    ConfirmDialogModule,
    GrowlModule,
    DragDropModule,
    GalleriaModule*/
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
