// $(document).ready( function () {
//     $("h1").css("color", "green")
// }); // wait for the entire loading of the page to use js


// $("h1").addClass("big-title");
// // removeClass
// hasClass
// ("premiereclass deuxièmeclass")

// $("button").text("lolololo")
// $("button").html("<strong>momomomo</strong>")

// console.log($("img").attr("src"));
// $("a").attr("href", "https://www.yahoo.fr")

// $("h1").click(function(){
//     $("h1").css("color", "purple")
// });

// $(document).keypress(function(event){
//     $("h1").text(event.key);
// });

$("h1").on("mouseover", function(){
    $("h1").css("color", "red");
});

$("button").on("click", function(){
    $("button").text("pushe me")
    $("h1").animate({opacity: 0.5});  // jquery cf doc for animation effect
});