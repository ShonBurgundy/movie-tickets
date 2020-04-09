function Ticket(movieTitle, movieTime, movieAge) {
this.movieTitle = movieTitle;
this.movieTime = movieTime;
this.movieAge = movieAge;
this.moviePrice = 5;
}

// for senior & child tickets "new movie" and "night"
Ticket.prototype.ticketPrice = function() {
 /* if ((this.movieTitle === "new" && this.movieTime === "evening" && this.movieAge === "senior") || (this.movieTitle === "new" && this.movieTime === "evening" && this.movieAge === "child")) {
    this.moviePrice = 5;
  } 
  return this.moviePrice*/





if ((this.movieTitle === "new") || (this.movieTime === "")) {
  return this.moviePrice * 2;
} else if (this.movieTitle === "old") {
  return this.moviePrice + 1;
} else if (this.movieTime === "evening") {
  return this.moviePrice * 2;
} else if (this.movieTime === "morning") {
  return this.moviePrice;
} else if (this.movieAge === "senior") {
  return this.moviePrice * 2;
} else if (this.movieAge === "child") {
  return this.moviePrice
}  

}

var ticket = new Ticket ("old", "evening", "senior")
var price = ticket.ticketPrice()
console.log ("ticket", ticket);
console.log ("price", price);
