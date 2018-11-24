(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$http']
function MenuDataService($http) {
  var service = this;
  var categories = [];
  var items = [];

  service.getAllCategories = function () {
    
    var promise = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/categories.json")
    });

    
    return promise;
  };


  service.getItemsForCategory = function (categoryShortName) {
    
    var promise2 = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
      params: {
        category: categoryShortName
      }
     
    });

    // promise2.then(function (response) {
    //   items = response.data;
    // })
    // .catch(function (error) {
    //   console.log("Something went terribly wrong.");
    // });
    return promise2;
  };
}

})();
