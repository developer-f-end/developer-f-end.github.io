

var app = angular.module("eco-app", ["ngRoute"]);


    app.controller('dataCtrl', function ($scope, $http) {

        $scope.siteNameF = "ENERGY";
        $scope.siteNameB = "GREEN";
        $scope.siteSlogan = "You Live More Sustainably";


        $http.get('../data/news.json').success(function(data) {

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


        $http.get('../data/gallery.json').success(function(data) {
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

