var user = angular.module('user', ['ionic', 'ngStorage', 'ngCordova']);

var host = 'http://research27.ml:1103';

user.controller('SignUpController', ['$scope', '$http', '$window', function($scope, $http, $window) {
  $scope.signup = function() {
    if ($scope.password !== $scope.confirm_password) {
      $scope.message = "password not match";
    }
    else {
      $scope.message = "";
      $http.post(host + '/signup', { 
        "username": $scope.username, 
        "email": $scope.email, 
        "password": $scope.password 
      })
      .success(function(data) {
          if (data == 'signup')
            $window.location.href = 'login.html';
          else
            $scope.message = data;
      });
    }
  };  
}]);

user.controller('LoginController', ['$scope', '$http', '$window', function($scope, $http, $window) {
  $scope.login = function() {
    $http.post(host + '/login', { 
      "email": $scope.email, 
      "password": $scope.password
    })
    .success(function(data) {
        if (data == 'main')
          $window.location.href = 'index.html';
        else
          $scope.message = 'Incorrect email or password';
    });
  };
}]);

user.controller('SocialController', function($scope, $window, $cordovaOauth) {
  $scope.facebook = function() {
    $cordovaOauth.facebook("103987536624323", ["email"]).then(function(result) {
        $window.localStorage.accessToken = result.access_token;
        $window.location.href = "index.html";
    }, function(error) {
        alert("There was a problem signing in!  See the console for logs");
        console.log(error);
    });
  };

  $scope.google = function() {
    $cordovaOauth.google("514409452618-2ensbdk1oaeaqs4aik553mb3n7prt1oi.apps.googleusercontent.com ", ["email"]).then(function(result) {
        //$window.localStorage.accessToken = result.access_token;
        $window.location.href = "index.html";
    }, function(error) {
        alert("There was a problem signing in!  See the console for logs");
        console.log(error);
    });
  };
});

/*
user.controller('PhotoController', ['$scope', 'photos', function($scope, photos) {
    photos.success(function(data) {
        $scope.detail = data;
    });
}]);

user.factory('photos', ['$http', function($http) {
  //$http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json')
    .success(function(data) {
      return data;
    })
    .error(function(data) {
      return data;
    });
}]);
*/