(function () {
  'use strict';

  
  
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
  .filter('dollar', DollarFilter);
  
  
  
  
  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var showList = this;
  
    showList.items = ShoppingListCheckOffService.getItems();
    showList.addItem = function (ItemIndex) {
      ShoppingListCheckOffService.addItem(ItemIndex);
     }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var showBoughtList = this;
  
    showBoughtList.items = ShoppingListCheckOffService.getBoughtItems();
    //  itemAdder.addItem = function () {
    //    ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
    //  }
  }
  
  
  function ShoppingListCheckOffService() {
    var service = this;
  
    // List of shopping items
    var toBuyitems = [
      {
        name: "Milk Containers",
        quantity: "2",
        pricePerItem: "3"
      },
      {
        name: "Donuts",
        quantity: "8",
        pricePerItem: "1"
      },
      {
        name: "Cookies",
        quantity: "10",
        pricePerItem: "2"
      },
      {
        name: "Bag of Chips",
        quantity: "3",
        pricePerItem: "4"
      },
      {
        name: "Water Bottles",
        quantity: "4",
        pricePerItem: "4"
      }
    ];

    var boughtitems = [];
  
    service.addItem = function (itemIndex) {
      
      
      var boughtItem = {
        name: toBuyitems[itemIndex].name,
        quantity: toBuyitems[itemIndex].quantity,
        pricePerItem: toBuyitems[itemIndex].pricePerItem
      };
      boughtitems.push(boughtItem);
      toBuyitems.splice(itemIndex, 1);
    };
  
    service.getItems = function () {
      return toBuyitems ;
    };

    service.getBoughtItems = function () {
      return boughtitems ;
    };
  }
  
  function DollarFilter() {
    return function (input, target, replace) {
      input = input || "";
      input = input.replace(target, replace);
      return input;
    }
  }

  })();
  