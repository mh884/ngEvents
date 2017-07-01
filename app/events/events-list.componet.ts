import { Component,OnInit } from '@angular/core'
import{EventService} from './sheard/event.service'
import {ToastrService} from '../common/toastr.service'
@Component({
      template: `
    <div>
<h1>Upcomping Angular 2 Events </h1>
<hr/>
<div class="row">
<div class="col-md-5" *ngFor="let event of events">
<events-thumbnail (click)=handleThombnailClick(event.name) [event]="event">
</events-thumbnail>
</div>
</div>
`
})


export class EventsLitComponent implements OnInit {
       events: any[]
    ngOnInit(): void {
       this.events = this.eventService.getEvents()
    }
 
constructor(private eventService:EventService,private toastr:ToastrService){
}

handleThombnailClick(eventName){
    this.toastr.success(eventName)
}
}