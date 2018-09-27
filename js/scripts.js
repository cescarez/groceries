var blanks = ["item1", "item2", "item3", "item4"];
var groceries = [];

$(document).ready(function() {
  $("form#food").submit(function(event){
    event.preventDefault();
    $("form#food").hide();

    blanks.forEach(function(blank){
      groceries.push($("#" + blank).val());
    });
    console.log(groceries);
  });
});
