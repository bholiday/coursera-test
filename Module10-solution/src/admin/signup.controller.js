(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignupController', SignupController);
    
SignupController.$inject = ['$scope','MenuService'];
// SignupController.$inject = [];
function SignupController($scope, MenuService) {
  //var menu = this;

  $scope.errorMessage = "";
  $scope.saveMessage = "";
    
  $scope.checkMenuNum = function() {
   
    var promise = MenuService.getMenuItem($scope.menunum);

    promise.then(function (response) {
      
      $scope.errorMessage = ""; 
    })
    .catch(function (error) {
      $scope.errorMessage = "No such menu number exists"; 
      console.log("No such menu number exists");
    });
  };

  $scope.submit = function() {
    
  var promise = MenuService.getMenuItem($scope.menunum);

  promise.then(function (response) {
    response.data;
    
    MenuService.setUserSaved($scope.firstname, $scope.lastname, $scope.email, 
                                  $scope.phone, $scope.menunum, response.data.name, response.data.description );
    $scope.saveMessage = "Your information has been saved.";

  })
  .catch(function (error) {
    $scope.errormessage = "No such menu number exists"; 
    console.log("No such menu number exists");
  });
};

  
};

    
    
    
})();
    