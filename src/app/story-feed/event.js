export class Ticket {
    constructor() {
        this.urlbase = "https://app.ticketmaster.com/discovery/v2/";
    }

    getCityEvent(city) {
        return new Promise(function(resolve, reject) {
          let request = new XMLHttpRequest();
          let url = `https://app.ticketmaster.com/discovery/v2/events.json?city=${city}&apikey=${process.env.ticket_api.ts}`;
          request.onload = function() {
            if (this.status === 200) {
              resolve(request.response);
            } else {
              reject(Error(request.statusText));
            }
          };
          request.open("GET", url, true);
          request.send();
        });
      } 