var app = angular.module('myModule', []);

app.controller('myController', function($scope){
  $scope.emptyList=[];
  $scope.wordList=["cat","dog","cow","pig","horse","chicken","goat"];
  $scope.clicked 

});




$scope.clicked = function() {
    if ($scope.emptyList) {
      $scope.wordList.push(wordList);
