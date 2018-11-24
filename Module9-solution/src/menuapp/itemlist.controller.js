(function () {
'use strict';

angular.module('data')
.controller('ItemListController', ItemListController);


// MainShoppingListController.$inject = ['ShoppingListService'];
// function MainShoppingListController(ShoppingListService) {
ItemListController.$inject = ['items'];
function ItemListController(items) {
  var itemList = this;
  itemList.items = items;

 
}

})();
