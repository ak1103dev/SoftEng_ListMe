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

user.controller('SignUpController', ['$scope', '$http', function($scope, $http) {
  $scope.signup = function() {
    if ($scope.password !== $scope.confirm_password) {
      $scope.message = "password not match";
    }
    else {
      $http.post('http://research27.ml:1103/signup', { 
        "username": $scope.username, 
        "email": $scope.email, 
        "password": $scope.password 
      })
      .success(function(data) {
          console.log(data);
          $scope.message = data;
      });
    }
  };
  
}]);

user.controller('LoginController', ['$scope', 'user', function($scope) {
  $scope.signup = function() {
    user = {
      email: $scope.email,
      password: $scope.password
    }
  };
}]);

user.factory('user', ['$http', function($http) {
  return $http.post('https://research27.ml:1103/login')
    .success(function(data) {
      return data;
    })
    .error(function(data) {
      return data;
    });
}]);


// signup.controller('PhotoController', ['$scope', 'photos', '$routeParams', function($scope, photos, $routeParams) {
//     photos.success(function(data) {
//         $scope.detail = data;
//     });
// }]);

// signup.factory('photos', ['$http', function($http) {
//   return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json')
//     .success(function(data) {
//       return data;
//     })
//     .error(function(data) {
//       return data;
//     });
// }]);
