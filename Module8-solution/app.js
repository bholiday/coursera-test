(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/menu_items.json")
.directive('foundItems', FoundItemsDirective);



function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: NarrowItDownDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };
  return ddo;
}

function NarrowItDownDirectiveController() {
  var list = this;

  list.emptyList = function () {
    for (var i = 0; i < list.items.length; i++) {
      var name = list.items[i].name;
      if (list.items.length = 0) {
        return true;
      } else {
        return false;
      }
    }

    
  };
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;
 
  list.items = MenuSearchService.getItems();
      
  list.searchTerm = "";

  list.search = function () {
    
    // MenuSearchService.eraseFound();
    if(list.searchTerm != ''){
      var promise = MenuSearchService.getMatchedMenuItems(list.searchTerm);
    }
    console.log(promise);
  };

  list.removeItem = function (itemIndex) {
    console.log("'this' is: ", this);
    
    MenuSearchService.removeItem(itemIndex);
    
  };

}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;
  var found = [];
  

  service.getMatchedMenuItems = function (searchTerm) {
    var promise = $http({
      method: "GET",
      url: (ApiBasePath + "")
    });
    promise.then(
      function(response) {
        for (var i = 0; i < response.data.menu_items.length; i++) {
          var name = response.data.menu_items[i].name;
          
          if (name.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1) {
            found.push(response.data.menu_items[i]);
            
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      })
      ;
      
    return found;
  };

  service.removeItem = function (itemIndex) {
    found.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return found;
  };
  

 

}


})();
