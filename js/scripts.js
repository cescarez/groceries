var blanks = ["item1", "item2", "item3", "item4"];

var groceriesUpper = [];

$(document).ready(function() {
  $("form#food").submit(function(event){
    event.preventDefault();
    $("form#food").hide();

    var groceriesLower = blanks.map(function(blank){
      return $("#" + blank).val();
    });

    console.log(groceriesLower);

    var groceriesTemp = groceriesLower.map(function(item){
      groceriesUpper.push(item.toUpperCase());
    });
    // groceriesUpper.push(groceriesLower.toUpperCase());
    console.log(groceriesUpper);


    // var groceriesUpper = groceriesLower.forEach(function(item){
    //   return item.toUpperCase();
    // })

    groceriesUpper.forEach(function(food){
      $("ul#list").append("<li>" + food + "</li>");
    });


    // console.log(groceries);
  });
});
