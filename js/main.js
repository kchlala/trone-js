var bars = document.getElementsByClassName("bars")[0];
var ham = document.querySelector(".ham");
var listing = document.querySelector('.listing');
var body =document.querySelector("body") ;

function toggleNav() {
    listing.classList.toggle('nav-active'); 
    body.classList.toggle('hidebody') ;
       
}
ham.addEventListener("click", function(){

  if(bars.classList.contains("active")){
    bars.classList.remove("active");
  }
  else{
    bars.classList.add("active");
  }
  toggleNav() ;

});


$(function() {
  $('.listing li').click(function() {
    $(this).children('.drop-ul').slideToggle();

    $(this).find( ".down" ).toggleClass( 'actived');
    $(this).find( "#main-a" ).toggleClass( 'actived');

    return false;
  });
});


$(function() {
  $('.drop-ul li').click(function() {
    $(this).children('.drop-ul-2').slideToggle();
    $(this).find('.right').toggleClass('actived');
    $(this).find('#drop-a').toggleClass('actived'); 
    return false;
  });

});


$(document).ready(function(){

  $('#searchbar-icon').click(function(){
    $(".searchbox").show(1000);
    $(".listing").hide(600);
    $(".search").hide(600);
    $(".quat").hide(600);
  });

  $('.cross').click(function(){
    $(".searchbox").hide(600);
    $(".listing").show(1000);
    $(".search").show(1000);
    $(".quat").show(1000);
  });
  
});
