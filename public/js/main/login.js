var app = angular.module("cinema");

app.controller("loginController", ['$scope', function ($scope) {

    hideSearch();
    hideUploadFilm(); showRegister();
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
                    return
                }
            })
        } else {
            alert("Please enter all infomation !");
        }
    }

}])