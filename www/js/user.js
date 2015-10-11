var user = angular.module('user', ['ionic']);

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
          //$scope.message = data;
          if (data == 'signup')
            $window.location.href = 'login.html';
          else
            $scope.message = data;
      });
    }
  };  
}]);

user.controller('LoginController', ['$scope', '$http', '$window', function($scope, $http, $window) {
  $http.post(host + '/host', {
    "host": $window.location.href
  })
  .success(function(data) {
    $scope.message = data;
  });

  $scope.login = function() {
    $http.post('http://research27.ml:1103/login', { 
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
  $scope.facebook = function() {
    $http.get(host + '/auth/facebook/callback')
    .success(function(data) {
      console.log(data);
      $window.location.href = 'index.html';
    })
  };
  $scope.google = function() {
    $http.get(host + '/auth/google')
    .success(function(data) {
      console.log(data);
      //$window.location.href = 'index.html';
    })
  };
}]);

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