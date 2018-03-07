var app = angular.module("app.todos", []);

app.controller("todoController", ['$scope', function ($scope) {
    var hd = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Nguyen Thanh Thien 658JJH'
    });


    if (getCookie("username")) {
        document.getElementById('tablogin').style = 'display: none';
        var show = document.getElementById('tablogin');
        show.style = "display: block";
        show.innerText = getCookie("username");
        console.log("Already login !");
    } else {
        console.log("Did not login !");
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


    // Login 
    $scope.clickLogin = function () {
        if (document.getElementById('password').value.length > 6 && document.getElementById('email').value.length > 7) {
            $.post("/login/", {
                password: $scope.password,
                email: $scope.email
            }, function (res) {
                console.log(res);
                if (res.code == 200) {
                    alert(res.message);
                    window.location.href = '/'
                    document.cookie = "username=" + $scope.password + "; email=" + $scope.email + ",isAdmin=" + false;
                }
            })
        } else {
            alert("Please enter all infomation !");
        }
    }


    // Register controller
    $scope.clickSignUp = function () {
        if (document.getElementById('username').value.length > 5 && document.getElementById('password').value.length > 6 && document.getElementById('emailSignUp').value.length > 7) {
            if (document.getElementById('password').value == document.getElementById('passwordConfirm').value) {
                $.post("/user/", {
                    userName: $scope.userName,
                    password: $scope.password,
                    emailSignUp: $scope.emailSignUp
                }, function (res) {
                    console.log(res);
                    if (res.code == 200) {
                        alert(res.message);
                        window.location.href = '/'
                    }
                })
            } else {
                alert("Please enter all infomation !");
            }
        } else {
            alert("Please enter all infomation !");
        }

    }


    //Up film 
    $scope.listGenreFilms = [
        'Tiểu sử lịch sử',
        'Lãng mạn tình cảm',
        'Khoa học viễn tưởng',
        'Huyền bí huyền ảo',
        'Phiêu lưu mạo hiểm',
        'Pháp luật hình sự',
        'Chiến tranh cổ trang',
        'Chiến tranh trung đại',
        'Chiến tranh hiện đại',
        'Kiếm hiệp, cổ trang',
        'Thuyết minh',
        'Hoạt hình',
        'Ma, kinh dị',
        'Kịch tính',
        'Hành động',
        'Sát nhân',
        'Thể thao',
        'Võ thuật',
        'Tâm lý',
        'Tội ác',
    ];

    $scope.listMonth = [];
    for (var i = 1; i <= 12; i++) $scope.listMonth.push('Tháng ' + i);
    $scope.listYear = [];
    for (var i = 1900; i <= 2050; i++) $scope.listYear.push('Năm ' + i);

    $scope.filmMonth = 'Tháng ' + (new Date().getMonth() + 1);
    $scope.filmYear = 'Năm ' + new Date().getFullYear();


    $scope.appName = "Any things !!";

    $scope.clickUploadFilm = function () {

        if ($scope.filmName.length < 5 || $scope.filmName.length > 50) {
            document.getElementById('filmName').setCustomValidity('Tên bộ phim từ 5-50 ký tự');
            return;
        }

        document.getElementById('filmName').setCustomValidity('');
        if ($scope.filmContent.length < 10) {
            document.getElementById('filmContent').setCustomValidity('Mô tả bộ phim tối thiểu 10 ký tự');
            return;
        }
        document.getElementById('filmContent').setCustomValidity('');

        var photoImage = $('#imageFilm').attr;
        if (photoImage === null || photoImage == "http://americanconstruction.net/wp-content/uploads/2015/10/upload-empty.png") {
            alert('Bạn chưa chọn ảnh minh họa phim');
            return;
        }
        console.log($scope.photoImage);

        $.post("/film/", {
            filmName: $scope.filmName,
            categoryName: $scope.filmGenre,
            year: $scope.filmYear,
            detail: $scope.filmContent,
            // photo: photoImage
        }, function (res) {
            console.log(res);
            if (res.code == 200) {
                alert(res.message);
                window.location.href = '/'
            }
        })

    }

    $scope.clickUploadImage = function () {
        document.getElementById('fileInput').click();
    }

    $scope.minContentFilm = function (film) {
        var len = film.content.length > 150 ? 150 : film.content.length;
        return film.content.substr(0, len) + '...';
    }

}])

function readURL(input) {
    console.log(input);
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            console.log(e);
            $('#imageFilm').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

function hideSearch() {
    $('#formSearch').attr('style', 'display:none');
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
    document.cookie = "";
}

function logOut() {
    removeCookie();
    window.location.href = '/';
}
