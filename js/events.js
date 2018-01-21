function extractEvent(lat, long,start_date) {  

  $(document).ready(function() {
        
        var token = 'DGD7DBQZ3KZA2PUYPWHJ';
        var $events = $("#events");
        $.get(`https://www.eventbriteapi.com/v3/events/search/?token=${token}&location.latitude=${lat}&location.longitude=${long}&start_date.range_start=${start_date}T00:00:00&start_date.range_end=${start_date}T23:59:59`, function(res) {

            if(res.events.length) {
                var s = "Todays events are: <br/>";
                for(var i=0;i<res.events.length;i++) {
                    var event = res.events[i];
                    console.dir(event);
                    s += "<a href='" + event.url + "'>" + event.name.text + "</a> <br/>";
                }
                $events.html(s);
            } else {
                $events.html("<p>Sorry, there are no upcoming events.</p>");
            }
        });
    });
}