(function () {
'use strict';

angular.module('data')
.controller('CategoryListController', CategoryListController);


// MainShoppingListController.$inject = ['ShoppingListService'];
// function MainShoppingListController(ShoppingListService) {
CategoryListController.$inject = ['items'];
function CategoryListController(items) {
  var categoryList = this;
  categoryList.items = items;

 
}

})();
