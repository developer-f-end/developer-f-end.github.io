$(document).ready(function(){


      function clearCurrentNav(){
          $('.menu li').removeClass("current");
      }

      $(".menu ul li").on("click", function () {
          clearCurrentNav();
          $(this).addClass("current");

      });

      $(document).on("click",".current-post", function(){

          clearCurrentNav();
          $(".menu li[target=news]").addClass("current");

      });


      function windowTop(){
        $(window).scrollTop(0);
      }

    $(document).on("click",".referral-a", windowTop);

    // *function for checking elem. top position
    function sectionPosition(elPos) {
        var sPos = elPos;
        return sPos.offset().top;
    }

    $(window).on('scroll',function(){
        var docStop = $(this).scrollTop(),
            fixMan = sectionPosition($('.header-inner'));

         if(fixMan === 0){
            $('.header-inner').removeClass("fixed");
            $('.logo').css("display","block");

        }
        else if(fixMan >= docStop  ){
            $('.header-inner').addClass("fixed");
            $('.logo').css("display","none");
        }

    });






});//end ready

