'use strict';

angular.module('myApp.view1', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
  }])
  .controller('View1Ctrl', function () {
  }
  )



  // add class active

  //add new Task


  .controller('addNewTask', ['$scope', function ($scope, $localStorage, $sesionStorage) {
    $scope.todos = [
      { 'title': '', 'done': false }
    ];
    $scope.addTodo = function () {
      $scope.todos.push({ 'title': $scope.newTodo, 'done': false })
    }

    //remove task 

    $scope.removeTask = function (item) {
      $scope.todos.splice(item, 1)
    }
  }])


  //localStorage
