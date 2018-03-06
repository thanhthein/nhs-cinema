var app = angular.module("app.todos", []);

app.controller("todoController", ['$scope', function ($scope) {

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

        if ($scope.filmName)
            if ($scope.filmName.length < 5 || $scope.filmName.length > 50) {
                document.getElementById('filmName').setCustomValidity('Tên bộ phim từ 5-50 ký tự');
                return;
            }
        document.getElementById('filmName').setCustomValidity('');
        if ($scope.filmContent)
            if ($scope.filmContent.length < 10) {
                document.getElementById('filmContent').setCustomValidity('Mô tả bộ phim tối thiểu 10 ký tự');
                return;
            }
        document.getElementById('filmContent').setCustomValidity('');

        // photoImage = $('#imageFilm').attr;
        // if (photoImage === null || photoImage == "http://americanconstruction.net/wp-content/uploads/2015/10/upload-empty.png") {
        //     alert('Bạn chưa chọn ảnh minh họa phim');
        //     return;
        // }

        console.log($scope.filmName);
        console.log($scope.filmGenre);
        console.log($scope.filmYear);
        console.log($scope.filmContent);
        // console.log($scope.photoImage);

        $.post("/film/", {
            film_name: $scope.filmName,
            category_name: $scope.filmGenre,
            year: $scope.filmYear,
            detail: $scope.filmContent,
            // photo: photoImage
        }, function (res) {
            console.log(res);
        })

    }

    $scope.clickUploadImage = function () {
        document.getElementById('fileInput').click();
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