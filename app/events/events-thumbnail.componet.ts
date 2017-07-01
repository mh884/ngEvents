import { Component, Input, Output, EventEmitter } from '@angular/core'
@Component({
    selector: 'events-thumbnail',
    template: `
    <div class="well hoverwell thombnail">
<h2>{{event?.name}}</h2>
<div>Date:{{event?.date}}<div>
<div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
Time:{{event?.time}}
<span *ngSwitchCase="'9:00 am'">(Early Start)</span>
<span *ngSwitchCase="'10:00 am'">(Late Start) </span>
<span *ngSwitchDefault>(Normal Start)</span>

</div>
<div>Price : \${{ event?.price }}</div>
</div>
<div *ngIf="event?.location">
<span>Location:{{event?.location?.address}}</span>
<span class="pad-left"> {{event?.location?.city}} , {{event?.location?.country}}</span></div>
<div *ngIf="event?.onlineUrl">
online URL:{{event?.onlineUrl}}
</div>

    </div>
    `, styles: [
        `.thombnail{min-height:210px}
        .pad-left{margin-left:10px}
        .well div{color:#bbb}
        .green{color:#003300 !important;}
        .bold{font-weight:bold;}
        `
    ]
})

export class EventsThumbnailComponents {
    @Input() event: any

    getStartTimeClass(){
if( this.event && this.event.time ==='8:00 am')
return ['green','bold']
return []
    }
}

