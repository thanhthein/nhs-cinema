var app = angular.module("cinema", ['ngRoute'])
app.controller("todoController", ['$scope', function ($scope) {
    var hd = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Nguyen Thanh Thien 658JJH'
    });


    if (getCookie("username")) {
        document.getElementById('tabLogin').style = 'display: none';
        document.getElementById('tabloginShow').style = "display: block";
        document.getElementById('tabloginShow2').style = "display: block";
        document.getElementById('nameusercurrent').innerText = getCookie("username");
        hideLogin();
        console.log("Already login !");
    } else {
        console.log("Did not login !");
        hideUploadFilm();
    }


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

}]);

function hideSearch() {
    $('#formSearch').attr('style', 'display:none');
}

function hideLogin() {
    $('#tabLogin').attr('style', 'display:none');
}

function hideUploadFilm() {
    $('#tabUpload').attr('style', 'display:none');
}

function showRegister() {
    $('#tabRegister').attr('style', 'display: block');
}

function goLogin() {
    window.location.href = '/login';
}

function goLogin() {
    window.location.href = '/profile';
}

function goUpload() {
    window.location.href = '/upfilm';
}


function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function removeCookie() {
    document.cookie = "username= ; email= ,isAdmin=" + false;
}

function logOut() {
    removeCookie();
    window.location.href = '/';
}
