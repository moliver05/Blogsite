import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TicketMasterApi } from '../services/ticketmaster.service';



@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  providers: [TicketMasterApi]
})
export class EventComponent {
  data: any = {};
  constructor(private ticketMaster: TicketMasterApi) {}
  getResults(city: string) {
    this.ticketMaster.getbyCity(city).subscribe(response => {
        this.data = response.json();
    });
  }
}
