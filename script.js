$(document).ready(getQuote);
$(document).on("click", "#new-quote", getQuote);

function getQuote() {
  $.ajax({
    url: "https://api.forismatic.com/api/1.0/?",
    dataType: "jsonp",
    data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
    success: function(response) {
      $("#text").text(response.quoteText);
      if(response.quoteAuthor){
        $("#author").html("- " + response.quoteAuthor);
      } else {
        $("#author").html("- Anonoymous");
      }
      
      $("#tweet-quote").attr(
        "href",
        "twitter.com/intent/tweet" +
          response.quoteText +
          " (" +
          response.quoteAuthor +
          ")"
      );
    }
  });
}
