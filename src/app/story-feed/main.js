$(document).ready(function () {
    $('#cityForm').submit(function(event) {
        event.preventDefault();
        let searchCity = $('#city').val();
        let allEvents = new Ticket();
        let promise = allEvents.getEventByCity(searchCity);
    
        promise.then(function (response) {
            let body = JSON.parse(response);
            console.log(body);
            
            $('.eventList').text(`Events in ${searchCity}:`);
            for (let i = 0; i < body._embedded.events.length; i++) {
                $('.eventList').append(`<br>${body._embedded.events[i].name}`);
                $('.eventList').append(`--- Date: ${body._embedded.events[i].dates.start.localDate}`);
            }
        }, function (error) {
            $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    
        });
    });
});