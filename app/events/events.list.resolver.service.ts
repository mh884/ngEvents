import{Injectable} from '@angular/core'
import { Resolve, ActivatedRouteSnapshot } from '@angular/router'
import {EventService} from './sheard/event.service'

@Injectable()

export class EventLinsterResolver implements Resolve<any>{
   constructor(private eventService:EventService){}
   
    resolve(){

        return this.eventService.getEvents().
        map(events=>events)
    }
    }

