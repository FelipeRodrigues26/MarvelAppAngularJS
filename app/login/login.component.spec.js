
describe('login', function() {

    beforeEach(module('marvelApp'));
    describe('LoginController', function() {
      var ctrl, isUserLogged, rootScope
      beforeEach(function() {
        jasmine.addCustomEqualityTester(angular.equals);
      });
  
      beforeEach(inject(function($componentController) {
        ctrl = $componentController('login');
      }));
  
      it('teste login user sucess and fail', async function() {
          const result = await ctrl.autenticationService.signIn('felipemrodrigues26@gmail.com','123456'); // correct user
          expect(result).toBeDefined()
      });  
      
    })
  
});