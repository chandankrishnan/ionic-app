angular.module('myApp', [])
.controller('homeCtrl', function($scope){
  console.log('inside controller');
      $scope.add=function(){
        console.log('inside add');
        $scope.add=parseInt($scope.n1)+parseInt($scope.n2);
      }
      $scope.sub=function(){
        console.log('inside sub')
        $scope.sub=parseInt($scope.n1)-parseInt($scope.n2);
        $scope.n1='';
        $scope.n2='';
      }
    });
