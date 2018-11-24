(function () {
'use strict';

angular.module('data')
.component('categories', {
  templateUrl: 'src/menuapp/templates/categoryList.template.html',
  bindings: {
    items: '<'
  }
});



})();
