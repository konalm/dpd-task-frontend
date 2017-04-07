var PostController = App.controller("PostController", function($rootScope, $scope, $location, $routeParams, $http, $cookies) {
  $scope.posts = [];
  $scope.userId = $routeParams.userId;

  $http.get($rootScope.apiUrl + '/posts?userId=' + $scope.userId, {})
    .then(function (postDataResponse) {
      $scope.posts = postDataResponse.data;
    });
});
