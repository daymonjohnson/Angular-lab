"use strict";
{
  function list() {
    let vm = this;
    vm.chores = ["Clean", "Read", "Pack", "Laundry"];
  }

   

  angular
    .module("todoapp")
    .controller("list", list);
};

function taskcompleted(){
    console.log("puppy");
}
