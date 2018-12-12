(function () {
    "use strict";
    
    angular.module('public')
    .controller('MyinfoController', MyinfoController);
   
        
 MyinfoController.$inject = ['$scope','MenuService', 'ApiPath'];
// MyinfoController.$inject = [];
function MyinfoController($scope, MenuService, ApiPath) {
  var myinfo = this;
  myinfo.apiPath = ApiPath;

  $scope.menuNumSaved = "";
  
  
  var userSaved = MenuService.getUserSaved();
    $scope.firstNameSaved = userSaved.firstname;
    $scope.lastNameSaved = userSaved.lastname;
    $scope.emailSaved = userSaved.email;
    $scope.phoneSaved = userSaved.phone;

    $scope.menuItemTitle = userSaved.menuitemtitle;
    $scope.menuItemDesc = userSaved.menuitemdesc;
    $scope.menuNumSaved = userSaved.menuitem;
    $scope.registered = userSaved.registered;

  };

     
    
    })();
    