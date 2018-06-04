var listOfItems = [];
var listOfSortedItems = [];

$(function(){
  $("#sorted-list").hide();
  $("#btn-add").click(function(event){
    event.preventDefault();
    $("#unsorted-list").fadeIn();
    $("#sorted-list").fadeOut();
    var input = $("input").val();
    input = input.trim();
    if(input!="")
    {
      listOfItems.push(input);
      $("#grocery-list").append(wrapListTag(input));
    }
  });

  $("#btn-submit").click(function(event){
    event.preventDefault();
    $("#grocery-list").text("");
    $("#list").text("");
    $("#unsorted-list").hide();
    listOfItems.sort();
    listOfSortedItems = [];
    listOfItems.forEach(function(item)
    {
      item = wrapListTag(item.toUpperCase());
      listOfSortedItems.push(item);
    });
    $("#list").append(listOfSortedItems);
    $("#sorted-list").fadeIn();
    listOfItems = [];

  });

});


function wrapListTag(value)
{
  return ("<li>"+value+"</li>");
}
