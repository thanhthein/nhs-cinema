var app = angular.module("cinema");

app.controller("loginController", ['$scope', function ($scope) {

    hideSearch();
    hideUploadFilm(); 
    showRegister();
    hideLogin();
    // Login 
    $scope.clickLogin = function () {
        if (document.getElementById('password').value.length > 6 && document.getElementById('email').value.length > 7) {
            $.post("/login/", {
                email: $scope.emailUser,
                password: $scope.passwordUser
            }, function (res) {
                console.log(res);
                if (res.code == 200) {
                    alert(res.message);
                    window.location.href = '/'
                    document.cookie = "userid=" + res._id;
                }
            })
        } else {
            alert("Please enter all infomation !");
        }
    }

}])