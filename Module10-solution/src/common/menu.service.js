(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  
  // var firstNameSaved = "";
  // var lastNameSaved = "";
  // var emailSaved= "";
  // var phoneSaved = "";
  // var menunumSaved = "";

  var userSaved = {};

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getMenuItem = function (menuitem) {
   

    var promise = $http.get(ApiPath + '/menu_items/' + menuitem + '.json')
    return promise;

  };

  service.setUserSaved = function(firstname, lastname, email, phone, menuitem, title, description){
    
    userSaved.firstname = firstname;
    userSaved.lastname = lastname;
    userSaved.email = email;
    userSaved.phone = phone;
    userSaved.menuitem = menuitem;
    userSaved.menuitemtitle = title;
    userSaved.menuitemdesc = description;


    userSaved.registered = true;


    
  }

  service.getUserSaved = function(){
    return userSaved;
  }

}



})();
