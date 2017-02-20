var buy= angular.module('toDoList', []);
buy.controller('myController', function($scope){
  $scope.todo = ['Buy milk', 'Finish lab', 'Clean car', 'Water plants', 'Read book'];
  console.log($scope.todo);

 $scope.addItem = function () {
  $scope.todo.push($scope.stuff)};
});
