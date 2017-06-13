$(document).ready(function(){
   if($(window).width() > 768){

    var margin = ($(window).width() - $('.navbar-nav').width()) / 2;
    $('.submenu').css("width", $('.navbar-nav').width());
    $('.navbar-nav').css(
            "margin-left", margin
          );


          $('.bottom-list').css({
            "margin-left": ($(".locations").width() - $('.navbar-nav').width()) / 4
          });
   }

  $(window).resize(function(){

    if($(window).width() > 768){
      $('.bottom-list').css({
        "margin-left": ($(".locations").width() - $('.navbar-nav').width()) / 4
      });
        $('.submenu').css("width", $('.navbar-nav').width());
        $('.navbar-nav').css({
                "margin-left": ($(window).width() - $('.navbar-nav').width()) / 2
        });
      }else{
        $('.submenu').css("width", $('.navbar-collapse').width());
      }
  });

  $(".promo-btn").hover(function(){
      $(this).siblings('img').css("border-bottom", "5px solid #d4cb37");
      }, function(){
      $('.promo img').css("border-bottom", "5px solid #f4f4f4");

  });

});
