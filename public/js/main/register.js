var app = angular.module("app.todos", []);

app.controller("registerController", ['$scope', function ($scope) {
    
    $scope.clickSignUp = function () {
       
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
    }


}])