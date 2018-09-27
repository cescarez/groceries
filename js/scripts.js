var blanks = ["item1", "item2", "item3", "item4"];

$(document).ready(function() {
  $("form#food").submit(function(event){
    event.preventDefault();
    $("form#food").hide();

    var groceries = blanks.map(function(blank){
      return $("#" + blank).val();
    });

    groceries.forEach(function(food){
      $("ul#list").append("<li>" + food + "</li>");
    });


    // console.log(groceries);
  });
});
