import { Event } from './event';
import $ from 'jquery';

$(document).ready(function () {
    $('#searchForm').submit(function(event) {
        event.preventDefault();
        let searchCity = $('#city').val();
        let allEvents = new Event();
        let promise = allEvents.getEventByCity(searchCity);
    
        promise.then(function (response) {
            let body = JSON.parse(response);
            console.log(body);
            
            $('#displayEvent').text(`Events in ${searchCity}:`);
            for (let i = 0; i < body._embedded.events.length; i++) {
                $('#displayEvent').append(`<br>${body._embedded.events[i].name}`);
                $('#displayEvent').append(`--- Date: ${body._embedded.events[i].dates.start.localDate}`);
            }
        }, function (error) {
            $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    
        });
    });
});