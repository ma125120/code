angular.module('myApp',[])
        .controller('myController',['$scope','$http',
      function($scope,$http) {
        $http.get('/user/profile')
        .then(function(res) {
          $scope.user=res.data;
          $scope.error='';
        })
        .catch(function(res) {
          $scope.user={};
          $scope.error=res.data;
        });
      }]);
