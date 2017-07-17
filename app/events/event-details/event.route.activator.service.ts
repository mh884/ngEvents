import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router'
import { Injectable } from '@angular/core'
import { EventService } from '../sheard/event.service'
@Injectable()

export class EventRouteActivator implements CanActivate {
    constructor(private eventSerivce: EventService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot) {
        const eventExsits = !!this.eventSerivce.getEvent(+route.params['id'])

        if (!eventExsits)
            this.router.navigate(['/404'])
        return eventExsits;


    }
}