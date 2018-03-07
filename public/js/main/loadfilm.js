var app = angular.module("app.todos", []);

app.controller("loadFilmController", ['$scope', function ($scope) {

    $.get("/film/", {}, function (res) {
        $scope.listFilm = res.films;
        $scope.$apply();
    })


    $scope.minContentFilm = function (film) {
        console.log(" film " + film);
        var len = film.detail.length > 150 ? 150 : film.detail.length;
        return film.detail.substr(0, len) + '...';
    }


    $scope.urlFilm = function (film) {
        return window.location.href + "film/detail/" + film.film_id;
    }
}])