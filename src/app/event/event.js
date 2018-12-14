export class Event {
    constructor() {
        this.urlbase = "https://app.ticketmaster.com/discovery/v2/";
    }
    getAllEvents() {
      return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        let url = `https://app.ticketmaster.com/discovery/v2/events.json?city=${city}&apikey=uwC2fceKfAhcBxGIzBUXk1kZvK9QPFrJ`;
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
    
    getCityEvent(city) {
        return new Promise(function(resolve, reject) {
          let request = new XMLHttpRequest();
          let url = `https://app.ticketmaster.com/discovery/v2/events.json?city=${city}&apikey=uwC2fceKfAhcBxGIzBUXk1kZvK9QPFrJ`;
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
    };
    
    let allEvents = new Event();
    let promise = allEvents.getAllEvents();

    promise.then(function (response) {
        let body = JSON.parse(response);
        console.log(body);
        
        $('#displayEvent').text(`Events:`);            
        for (let i = 0; i < body._embedded.events.length; i++) {
            $('#displayEvent').append(`<br>${body._embedded.events[i].name}`);
        }
    }, function (error) {
        $('.showErrors').text(`There was an error processing your request: ${error.message}`);

    });
