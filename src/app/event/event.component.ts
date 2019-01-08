import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TicketMasterApi } from '../services/ticketmaster.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  providers: [TicketMasterApi]
})
export class EventComponent {
  data: any[] = null;
  constructor(private ticketMaster: TicketMasterApi) { }
  getCityEvent(keyword: string, city: string) {
    this.ticketMaster.getCityEvent(keyword, city).subscribe(response => {
        this.data = response.json();
    });
  }
}
