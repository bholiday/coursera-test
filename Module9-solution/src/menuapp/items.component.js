(function () {
'use strict';

angular.module('data')
.component('items', {
  templateUrl: 'src/menuapp/templates/itemList.template.html',
  bindings: {
    items: '<'
  }
});



})();
