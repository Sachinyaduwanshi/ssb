import { Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef } from '@angular/core';



@Component({
  moduleId: module.id,
  selector: 'my-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'event-calendar.component.html',
  styleUrls:['event-calendar.component.css']
})
export class EventCalendarComponent {

  public headerConfig = {
    left: 'prev,next today',
    center: 'title',
    right: 'month,agendaWeek,agendaDay'
  };

  public pevents = [{
    title: 'Sai Bhajan',
    start: '2017-12-30 08:00:00',
    end: '2017-12-30 09:00:00'
  },
  {
    title: 'Yoga',
    start: '2017-12-30 07:00:00',
    end: '2017-12-30 08:00:00'
  },
  {
    title: 'Kids Sanskrit Classes',
    start: '2017-12-30 10:00:00',
    end: '2017-12-30 11:00:00'
  }];

    
    constructor() { }
    
}