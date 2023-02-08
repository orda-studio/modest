// hamburger-menu
$(document).ready(function() {
  $(".menuToggle").click(function() {
    $(this).toggleClass("active");
    $('.menu').slideToggle(300, function(){
      if($(this).css('display') === "none"){
        $(this).removeAttr('style');
      }
    });
  });
});

// flexslider
$(window).load(function(){
	$('.flexslider').flexslider({
		slideshow: false,
		directionNav: false,
	});
});

// preloader
window.onload = function() {
  document.querySelector('.preloader').classList.add("preloader-remove");
};