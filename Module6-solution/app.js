(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);
 
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
  $scope.lunchList = "";
  $scope.message = "";
  $scope.tempPlaceHolder = "list comma separated dishes you usually have for lunch";
  $scope.spancolor = "";
  $scope.bordercolor = "";
  
  
  $scope.displayMessage = function () {
    var messageVar = countLunchListNumericForString($scope.lunchList);
    $scope.message = messageVar;
  };


  function countLunchListNumericForString(string) {

    var message = "";
    if (string.length == 0){
      message = "Please enter data first!";
      $scope.spancolor = "red";
      $scope.bordercolor = "red";
      return message;
    }
    var lunchListArr = string.split(",");

    var counter = 0;
    for (var i = 0; i < lunchListArr.length; i++) {
      var lunchValue = lunchListArr[i].trim(); 
      if(lunchValue != 0){
        counter++;
      }
    }
      
    if(counter == 0){
      message = "Please enter data first!";
      $scope.spancolor = "red";
      $scope.bordercolor = "red";
      return message;
    }
    $scope.spancolor = "green";
    $scope.bordercolor = "green";
    if (counter <= 3){
      message = "Enjoy!"
    } else{
      message = "Too much!"
    }
   
    console.log("Counter: "+counter);
    return message;
  }
}

})();
