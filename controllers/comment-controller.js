var CommentController = App.controller("CommentController", function ($scope, $http, $routeParams, $cookies, $rootScope) {
  $scope.comments = [];
  $scope.postId = $routeParams.postId;
  $scope.userId = '';

  $http.get($rootScope.apiUrl + '/comments?postId=' + $scope.postId, {})
    .then(function (commentDataResponse) {
      $scope.comments = commentDataResponse.data;
    });

  $http.get($rootScope.apiUrl + '/postUserId?postId=' + $scope.postId, {})
    .then(function (postUserIdResponse) {
      $scope.userId = postUserIdResponse.data[0].userId;
    });
});
