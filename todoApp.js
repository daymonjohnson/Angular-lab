"use strict";
{
  function list() {
    let vm = this;
    vm.chores = ["Clean", "Read", "Pack", "Laundry"]
    
};

var fetch = angular.module('todoapp', []);

   fetch.controller('complete', ['$scope', '$http', function ($scope, $http) {
     $scope.completeClass = false;
     // Add red remove
     $scope.taskCompleted = function(){
         console.log("yassssssss");
       $scope.completeClass = true;

     }
   }]);

   fetch.controller('remove', ['$scope', '$http', function ($scope, $http) {
   // $scope.completeClass = false;
    //  remove task
     $scope.removeTask = function(){
         console.log("pawg");
         $scope.removeTask = true;
    //     console.log("yassssssss");
    //   $scope.completeClass = true;

    }
  }]); 

   

  angular
    .module("todoapp")
    .controller("list", list);
};



