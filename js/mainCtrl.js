angular.module('app').controller('mainCtrl', function($scope, mainService){
    $scope.test = 'ae'
    $scope.test1 = mainService.test1;
})