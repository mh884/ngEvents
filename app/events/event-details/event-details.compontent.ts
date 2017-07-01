import { Component,OnInit } from '@angular/core'
import { EventService } from '../sheard/event.service'
import{ActivatedRoute} from '@angular/router'
@Component({
    templateUrl: '/app/events/event-details/event-details.compontent.html'
    , styles: [
        `
.container{padding-left:20px;padding-right:20px}
.event-image{height:100px}
`]

})

export class EventDetailsComponent implements OnInit {

      event: any
    constructor(private eventSerivce: EventService,private route:ActivatedRoute) { }

    ngOnInit(): void {
       this.event = this.eventSerivce.getEvent(
           +this.route.snapshot.params['id'])
    }
  

}