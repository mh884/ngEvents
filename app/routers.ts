
import{Routes} from '@angular/router'
import {EventsLitComponent} from './events/events-list.componet'
import{CreateEventComponent} from './events/create.event.componet'
import {EventDetailsComponent} from './events/event-details/event-details.compontent'
import{Error404Component} from './error/404.component'
import {EventRouteActivator} from './events/event-details/event.route.activator.service'
import {EventLinsterResolver} from './events/events.list.resolver.service'

export const appRouter:Routes=[
{path:'events',component:EventsLitComponent,
resolve:{events:EventLinsterResolver}},
{path:'events/new' ,component:CreateEventComponent,canDeactivate:["CanDiactivateCreateEvent"]},
{path:'events/:id',component:EventDetailsComponent,
canActivate:[EventRouteActivator]},
{path:'404',component:Error404Component},
{path:'' ,redirectTo:'events', pathMatch:'full'},
{path:'user' , loadChildren:'app/user/user.Module#UserModule'}

]