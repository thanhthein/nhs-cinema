var app = angular.module("cinema")
app.config(function ($interpolateProvider, $locationProvider) {

    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});


app.controller("loadFilmController", ['$scope', function ($scope) {

    $.get("/film/", {}, function (res) {
        $scope.listFilm = res.films;
        $scope.$apply();
    })


    $scope.minContentFilm = function (film) {
        var len = film.detail.length > 150 ? 150 : film.detail.length;
        return film.detail.substr(0, len) + '...';
    }


    $scope.urlFilm = function (film) {
        return window.location.href + "film-detail?id=" + film._id;
    }
    
    $scope.goToFilm = function (film) {
         window.location.href + "film-detail?id=" + film._id;
    }

}])
