
/*
include parts like: //= part.js
*/

$(document).ready(function(){


      function clearCurrentNav(){
          $('.menu li').removeClass("current");
      }

      $(".menu li").on("click", function () {
          clearCurrentNav();
          $(this).addClass("current");

      });


      $(document).on("click",".top_menu li", function(){
        clearCurrentNav();
        var targetData = $(this).attr("target");
        $(".menu li[target=" + targetData +"]").addClass("current");

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


var app = angular.module("eco-app", ["ngRoute"]);


    app.controller('dataCtrl', function ($scope, $http) {

        $scope.siteNameF = "ENERGY";
        $scope.siteNameB = "GREEN";
        $scope.siteSlogan = "You Live More Sustainably";

         //rels 
        $http.get('./ecology/data/news.json').success(function(data) {

           var dataPosts =  $scope.posts = data,
               randomVar = Math.random() * 10,
               otherRandomVar = Math.random() * 10,
               randomIntegerDec  = Math.round(randomVar),
               randomIntegerDecOther = Math.round(otherRandomVar);

            $scope.randomInteger = 0;
            $scope.randomIntegerOther = 1;

            if( randomIntegerDec > dataPosts.length){
                $scope.randomInteger = 0;
            }
            if( randomIntegerDecOther > dataPosts.length){
                $scope.randomIntegerOther = 1;
            }
            else{
                $scope.randomInteger = randomIntegerDec;
                $scope.randomIntegerOther = randomIntegerDecOther;
            }

        });


        $http.get('./ecology/data/gallery.json').success(function(data) {
            $scope.imgItem = data;

        });

        //Right post on linked
       $scope._Index = 0;
       $scope.showIndex = function(index){
           $scope._Index  =  index ;
           $(window).scrollTop(0);
       };

    });

    app.controller('functionCtrl', function ($scope) {
        $scope.currentLocation = document.location.hash;
        $scope. statusLocationGallery = "#/gallery";

    });



//routing
    app.config(function($routeProvider) {
        $routeProvider

            .when("/", {
                templateUrl : "html-parts/main.html"
            })

            .when("/aboutUs", {
                templateUrl : "html-parts/about_us.html"

            })
            .when("/contactUs", {
                templateUrl : "html-parts/contact_us.html"

            })
            .when("/news", {
                templateUrl : "html-parts/services.html"
            })
            .when("/postPage", {
                templateUrl : "html-parts/post-page.html"
                //controller  : 'dataCtrl'
            })
            .when("/gallery", {
                templateUrl : "html-parts/image-gallery.html"
                //controller  : ' deployImage'
            })

    });