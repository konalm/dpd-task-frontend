var userController = App.controller("UserController", function ($scope, $http, $rootScope) {
  $scope.users = [];

  $http.get($rootScope.apiUrl + '/users', {})
    .then(function (userDataResponse) {
      $scope.users = userDataResponse.data;
    });
});
