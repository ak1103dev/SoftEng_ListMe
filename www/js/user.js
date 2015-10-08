var user = angular.module('user', ['ionic']);
/*
signup.config(function($routeProvider) {
    $routeProvider
    .when('/photos/:id', {
        controller: 'PhotoController',
        templateUrl: 'index.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});
*/

user.controller('SignUpController', ['$scope', '$http', '$window', function($scope, $http, $window) {
  $scope.signup = function() {
    if ($scope.password !== $scope.confirm_password) {
      $scope.message = "password not match";
    }
    else {
      $scope.message = "";
      $http.post('http://research27.ml:1103/signup', { 
        "username": $scope.username, 
        "email": $scope.email, 
        "password": $scope.password 
      })
      .success(function(data) {
          //$scope.message = data;
          if (data == 'signup')
            $window.location.href = 'login.html';
      });
    }
  };  
}]);

user.controller('LoginController', ['$scope', '$http', '$window', function($scope, $http, $window) {
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