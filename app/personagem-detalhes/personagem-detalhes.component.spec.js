
describe('personagemDetalhesComponent', function() {

  beforeEach(module('marvelApp'));
  describe('PersonagemDetalhesController', function() {
    var $httpBackend, ctrl
    beforeEach(function() {
      jasmine.addCustomEqualityTester(angular.equals);
    });
   
    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    beforeEach(inject(function($componentController, _$httpBackend_, PersonagemService) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('https://gateway.marvel.com/v1/public/characters/1011334?apikey=5a237863b3cc2061003cbbc4fe20dc06&hash=bd4b447a65ef5d6b174f87cf9db6d2db&ts=1', {'accept':'*/*'}, null)
      .respond({
        data: {
          results:[
            { 
              id: 1011334,
              nome:'3-D Man',
              thumbnail: {
                path:'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
                extension: 'jpg'
              }
            }
          ]
        }})
      ctrl = $componentController('personagemDetalhesComponent');
      ctrl.getPersonagemById(1011334);
    }));

    it('teste get personagem by id',function() {
      expect(ctrl.personagem).toBeUndefined();
      $httpBackend.flush();
      expect(ctrl.personagem.nome).toEqual('3-D Man');
      
    });

  })

});