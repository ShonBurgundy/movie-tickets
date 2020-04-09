function Ticket(movieTitle, movieTime, movieAge) {
this.movieTitle = movieTitle;
this.movieTime = movieTime;
this.movieAge = movieAge;

}

Ticket.prototype.ticketPrice = function() {
  this.price = 5;
  if (this.movieTitle === "new"){
    this.price += 1;
  } else if (this.movieTitle === "old") {
  } 
 
  if (this.movieTime === "evening") {
    this.price *= 2;
  } else if (this.movieTime === "morning") {
    //morning tickets are standard price
  } 
  
  if (this.movieAge === "adult") {
    this.price *= 2;
  } else if (this.movieAge === "child" || this.price === "senior") {
    //child ticket price is standard
  } 

  return this.price
}



// UI -----

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var movieTitle = $("input:radio[name=movie]:checked").val();
    var movieAge = $("input:radio[name=age]:checked").val();
    var movieTime = $("input:radio[name=time]:checked").val();

    console.log("input title: ", movieTitle);

    var ticket = new Ticket(movieTitle, movieTime, movieAge);
    ticket.ticketPrice();
    $("#priceOutput").html(ticket.price);
    console.log(movieTime);
  })
  
})

