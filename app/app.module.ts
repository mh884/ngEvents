import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import{RouterModule} from '@angular/router'
import {EventsAppComponent} from './events-app.component'
 import {EventsLitComponent} from './events/events-list.componet'
import{EventsThumbnailComponents} from './events/events-thumbnail.componet'
import{NavBarComponent} from './nav/nav-component'
import{EventService} from './events/sheard/event.service'
import{ToastrService} from './common/toastr.service'
import {EventDetailsComponent} from './events/event-details/event-details.compontent'
import {appRouter} from './routers'
@NgModule({
imports:[BrowserModule
,RouterModule.forRoot(appRouter)],
declarations:[EventsAppComponent,EventsLitComponent
,EventsThumbnailComponents,NavBarComponent,EventDetailsComponent],
providers:[EventService,ToastrService],
bootstrap:[EventsAppComponent]

})
export class AppModule {}