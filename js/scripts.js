function Ticket(movieTitle, movieTime, movieAge) {
this.movieTitle = movieTitle;
this.movieTime = movieTime;
this.movieAge = movieAge;
this.moviePrice = 5;
}

Ticket.prototype.ticketPrice = function() {
  var price = this.moviePrice;

  if ((this.movieTitle === "new") || (this.movieTime === "")) {
    price *= 2;
  } else if (this.movieTitle === "old") {
    price += 1;
  } 
  
  if (this.movieTime === "evening") {
    price *= 2;
  } else if (this.movieTime === "morning") {
    //morning tickets are standard price
  } 
  
  if (this.movieAge === "adult") {
    price *= 2;
  } else if (this.movieAge === "child" || this.moviePrice === "senior") {
    //child ticket price is standard
  } 

  return price
}



// UI ------
var ticket = new Ticket();

$(document).ready(function(){
  $("form#movie-form").click(function(event){
    event.preventDefault();
    var movieTitle = $("#movieTitle").val();
    var movieAge = $("#movieAge").val();
    var movieTime = $("#movieTime").val();
    $("#movieTitle").val;
    $("#movieAge").val;
    $("#movieTime").val;

    var newTicket = new Ticket(movieTitle, movieAge, movieTime);
    newTicket.ticketPrice();
    $("#result").text("movie: " + this.movieTitle + "price:" + this.moviePrice);
  })
})

