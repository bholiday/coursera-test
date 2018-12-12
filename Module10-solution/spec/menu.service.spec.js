describe('Test Menu Item', function () {

  var menuservice;
  var $httpBackend;
  var ApiPath;

  beforeEach(function () {
    module('common');

    inject(function ($injector) {
      menuservice = $injector.get('MenuService');
      $httpBackend = $injector.get('$httpBackend');
      ApiPath = $injector.get('ApiPath');
    });
  });

  it('It should return menuItem', function() {
    $httpBackend.whenGET(ApiPath + '/menu_items/A1.json').respond(['1', 'Won Ton Soup with Chicken']);
    menuservice.getMenuItem('A1').then(function(response) {
      expect(response.data[0]).toEqual('1');
      expect(response.data[1]).toEqual('Won Ton Soup with Chicken');

    });
    $httpBackend.flush();
  });

});
