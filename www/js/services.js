angular.module('ListMe.service', [])
.factory('Projects', function($http) {
  var host = 'http://research27.ml:1103'
  return {
    
    // get: function() {
    //   return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json')
    //     .success(function(data) {
    //       return data;
    //     });
    // },

    logout: function() {
      return $http.get(host + '/logout')
        .success(function(data) {
          return data;
        });
    },

    username: function() {
      var username = window.localStorage.username;
      if(username) {
        return username;
      }
      return {};
    },

    all: function() {
      // return $http.get(host + '/all')
      //   .success(function(data) {
      //     window.localStorage['projects'] = data;
      //     var projectString = window.localStorage['projects'];
      //     if(projectString) {
      //       return angular.fromJson(projectString);
      //     }
      //     return [];
      // })
      var projectString = window.localStorage['projects'];
      if(projectString) {
        return angular.fromJson(projectString);
      }
      return [];
    },
    save: function(projects) {
      // console.log(projects);
      window.localStorage['projects'] = angular.toJson(projects);
    },
    newProject: function(projectTitle) {
      // Add a new project
      return {
        title: projectTitle,
        tasks: [],
        active:true
      };
    },
    getLastActiveIndex: function() {
      return parseInt(window.localStorage['lastActiveProject']) || 0;
    },
    setLastActiveIndex: function(index) {
      window.localStorage['lastActiveProject'] = index;
    }
  }
});
