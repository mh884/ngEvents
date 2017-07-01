
import{Routes} from '@angular/router'
import {EventsLitComponent} from './events/events-list.componet'

import {EventDetailsComponent} from './events/event-details/event-details.compontent'
export const appRouter:Routes=[
{path:'events',component:EventsLitComponent},
{path:'events/:id',component:EventDetailsComponent},
{path:'' ,redirectTo:'events', pathMatch:'full'}

]