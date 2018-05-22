"use strict";
{
  function list() {
    let vm = this;
    vm.chores = ["Clean", "Read", "Pack", "Laundry",]
    vm.add = function(chore){
      console.log(vm.chores);
      let y = {chore};
    vm.chores.push(chore);
    console.log(vm.chores);
    };
    vm.removeTask = function(){
      console.log(vm.chores);
    vm.chores.splice($index ,1);
    };

 }

 var fetch = angular.module('todoapp', []);

   fetch.controller('complete', ['$scope', '$http', function ($scope, $http) {
     $scope.completeClass = false;
     // Add red remove
     $scope.taskCompleted = function(){
         console.log("yassssssss");
     $scope.completeClass = true;
     }

    // $scope.removeTask = false;
    //  $scope.removeTask = function(){
    //     console.log("vm.chores.splice(2)");
    //   chores.splice($index,1);
    //  $scope.removeTask = true;
    //  }
   }   
  ]); 
  angular
    .module("todoapp")
    .controller("list", list);
};
