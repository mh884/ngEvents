import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import{RouterModule} from '@angular/router'
import {EventsAppComponent} from './events-app.component'
import {AuthService} from './user/auth.service'
import{NavBarComponent} from './nav/nav-component'

import{
EventService,
EventsThumbnailComponents,
EventsLitComponent,
EventDetailsComponent,
CreateEventComponent,
EventLinsterResolver,
EventRouteActivator
} from './events/index'

import{ToastrService} from './common/toastr.service'
import {} from './events/event-details/event-details.compontent'
import {appRouter} from './routers'

import{Error404Component} from './error/404.component'

@NgModule({
imports:[BrowserModule
,RouterModule.forRoot(appRouter)],
declarations:[
EventsAppComponent,EventsLitComponent
,EventsThumbnailComponents,NavBarComponent,EventDetailsComponent,
CreateEventComponent,Error404Component],
providers:[EventService,ToastrService,EventRouteActivator,
{provide:'CanDiactivateCreateEvent' ,useValue:checkDirtystate},
EventLinsterResolver,AuthService],
bootstrap:[EventsAppComponent]

})
export class AppModule {}


function checkDirtystate(component:CreateEventComponent){
    if(component.isDirty)
return window.confirm('you have not save this event, do your really want to cancel?')

return  true;

  }