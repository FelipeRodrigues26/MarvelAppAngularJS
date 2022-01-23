
angular.module('marvelApp')
.component('listaPersonagensComponent', {
  templateUrl: '../lista-personagens/lista-personagens.component.html',
  controller: ['PersonagemService', ListaPersonagensController],
});

function ListaPersonagensController(PersonagemService){
  subscriptionPersonagens = null;
  this.personagem;
  this.personagens = [];
  this.results = null;
  this.searchName = '';
  
  this.$onInit = function() {
    this.getPersonagens();
  };

  this.getPersonagens = function(){
      subscriptionPersonagens = PersonagemService.getPersonagens().subscribe((response) => {
      this.personagens = response.data.results
      this.results = this.personagens.length;
    });
  }

  this.getPersonagensByName = function() {
    
    if (this.searchName == '')
      return this.getPersonagens();

    subscriptionPersonagens = PersonagemService.getPersonagensByName(this.searchName).subscribe((response) => {
    this.personagens = response.data.results
    this.results = this.personagens.length;
    
    });
    this.searchName = '';

  }
 

}
