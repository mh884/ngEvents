import { Component,OnInit } from '@angular/core'
import{EventService} from './sheard/event.service'
import {ToastrService} from '../common/toastr.service'
import {ActivatedRoute} from '@angular/router'
import {IEvent} from './sheard/index'
@Component({
      template: `
    <div>
<h1>Upcomping Angular 2 Events </h1>
<hr/>
<div class="row">
<div class="col-md-5" *ngFor="let event of events">
<events-thumbnail  [event]="event">
</events-thumbnail>
</div>
</div>
`
})


export class EventsLitComponent implements OnInit {
       events: IEvent[]
    ngOnInit(): void {
     this.events=this.route.snapshot.data['events']
    }
 
constructor(private eventService:EventService,
private toastr:ToastrService,private route:ActivatedRoute){
}

handleThombnailClick(eventName){
    this.toastr.success(eventName)
}
}