var app = angular.module("cinema");

app.controller("profileController", ['$scope', function ($scope) {

    hideSearch();
    hideUploadFilm();
    // Login 
    $.get('/user/', {}, function (res) {
        if (res.status == 200) {
            document.getElementById('email').value = res.email,
                document.getElementById('username').value = res.userName
            console.log("Already get");
        } else {
            console.log("Can not get");

        }
    })

    $scope.clickSaveProfile = function () {


    }

    $scope.clickUploadImage = function () {

    }

    $scope.clickUploadImage = function () {
        document.getElementById('fileInputAvatar').click();
    }

}])

function readURLImg(input) {
    console.log(input);
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            console.log(e);
            $('#imageAvatar').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}