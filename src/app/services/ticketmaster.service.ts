import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class TicketMasterApi {
    constructor(private http: Http) { }


getCityEvent(keyword: string, city: string) {
    // tslint:disable-next-line:max-line-length
    return this.http.get(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${keyword}&city=${city}&&apikey=${process.env.tm_api}`);
    }
}
