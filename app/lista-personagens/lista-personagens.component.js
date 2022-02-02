
angular.module('marvelApp')
.component('listaPersonagensComponent', {
  templateUrl: '../lista-personagens/lista-personagens.component.html',
  controller: ['PersonagemService', ListaPersonagensController],
})

function ListaPersonagensController(PersonagemService){

  subscriptionPersonagens = null;
  this.personagem;
  this.personagens = [];
  this.results = null;
  this.searchName = '';
  this.totalPages = 0
  this.currentPage = 0;
  
  this.$onInit = function() {
    this.getPersonagensByName(this.searchName, this.currentPage);
  };

  this.search = function(){
    this.currentPage = 0;
    this.getPersonagensByName(this.currentPage);   
  }

  this.getPersonagens = function(page){
      subscriptionPersonagens = PersonagemService.getPersonagens(page).subscribe((response) => {
      this.personagens = response.data.results
      this.results = response.data.total;
      this.totalPages = Math.ceil(this.results/20)
    });
  }

  this.getPersonagensByName = function(page) {
    
    if (this.searchName == '')
      return this.getPersonagens(page);

    subscriptionPersonagens = PersonagemService.getPersonagensByName(this.searchName, page).subscribe((response) => {
    this.personagens = response.data.results
    this.results = response.data.total;
    this.totalPages = Math.ceil(this.results/20)
    
    });
  }
  this.nextPage = function(){
    if(this.currentPage+1 >=  this.totalPages)
      return;
    this.currentPage = this.currentPage+1;
    this.getPersonagensByName(this.currentPage)
  }
  this.previousPage = function(){
    if(this.currentPage<1)
      return;

    this.currentPage = this.currentPage-1;
    this.getPersonagensByName(this.currentPage)
  }

}
