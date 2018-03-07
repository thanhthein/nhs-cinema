// var app = angular.module("app.todos", []);

// app.controller("registerController", ['$scope', function ($scope) {

//     $scope.clickSignUp = function () {
//         if (document.getElementById('username').value.length > 5 && document.getElementById('password').value.length > 6 && document.getElementById('emailSignUp').value.length > 7) {
//             if (document.getElementById('password').value == document.getElementById('passwordConfirm').value) {
//                 $.post("/user/", {
//                     userName: $scope.userName,
//                     password: $scope.password,
//                     emailSignUp: $scope.emailSignUp
//                 }, function (res) {
//                     console.log(res);
//                     if (res.code == 200) {
//                         alert(res.message);
//                         window.location.href = '/'
//                     }
//                 })
//             } else {
//                 alert("Please enter all infomation !");
//             }
//         } else {
//             alert("Please enter all infomation !");
//         }

//     }
// }])