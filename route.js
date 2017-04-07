var App = angular.module("App", ["ngRoute", "ngCookies"]);

App.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
  $routeProvider.when('/users', {
    templateUrl: 'views/user.html',
    controller: 'UserController',
  })
  .when('/posts', {
    templateUrl: 'views/post.html',
    controller: 'PostController',
  })
  .when('/comments', {
    templateUrl: 'views/comment.html',
    controller: 'CommentController'
  })
  .otherwise({
    redirectTo: '/users'
  });

  $locationProvider.html5Mode(true);
}]);

App.run(['$rootScope', function ($rootScope) {
  $rootScope.baseUrl = '/dpd-task-frontend';
  // $rootScope.apiUrl = 'jsonplaceholder.typicode.com';
  $rootScope.apiUrl = 'http://localhost:8080';
}]);
