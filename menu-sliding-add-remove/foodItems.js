// var foodItems = ["Wine", "Cheese", "Pizza", "Cupcakes", "Bananas", "Apples", "Oranges", "Granola", "Cereal"];
// $(".add").on("click", function() {  var insertPoint = $(this).parent().find("li:nth-child(3)");    
// $("<li />", {    'text': foodItems[randomInt(0,foodItems.length-1)],    'class': "new-item"  }).insertAfter(insertPoint);});
// $(".remove").on("click", function() {   
// 	$(this).parent().find("li:nth-child(4)").removeClass('new-item').addClass('old-item');   
// 	$('.old-item').bind( 'animationend webkitAnimationEnd', function(event) {onAnimationEnd(event); });   
// });
// function onAnimationEnd(e) {  
// 	if ($('.old-item')) {    $('.old-item').remove();  }
// }
// function randomInt(min, max) {    return Math.floor(Math.random() * (max+1-min)) +min;}

var foodItems = ["Wine", "Cheese", "Pizza", "Cupcakes", "Bananas", "Apples", "Oranges", "Granola", "Cereal"];

$(".add").on("click", function() {
  var insertPoint = $(this).parent().find("li:nth-child(3)");
  
  $("<li />", {
    'text': foodItems[randomInt(0,foodItems.length-1)],
    'class': "new-item"
  }).insertAfter(insertPoint);
});

$(".remove").on("click", function() {
   $(this).parent().find("li:nth-child(4)").removeClass('new-item').addClass('old-item');
 
  $('.old-item').bind( 'animationend webkitAnimationEnd', function(event) {onAnimationEnd(event); });
   
});

function onAnimationEnd(e) {
  if ($('.old-item')) {
    $('.old-item').remove();
  }
}


function randomInt(min, max) {
  	return Math.floor(Math.random() * (max+1-min)) +min;
}