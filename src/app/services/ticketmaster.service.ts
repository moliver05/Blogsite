import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { apikey } from './../api_keys';
import 'rxjs/add/operator/map';

@Injectable()
export class TicketMasterApi {
    constructor(private http: Http) { }


getbyCity(city: string) {
    // tslint:disable-next-line:max-line-length
    return this.http.get(`https://app.ticketmaster.com/discovery/v2/events.json?&city=${city}&apikey=${apikey}`);
    }
}
