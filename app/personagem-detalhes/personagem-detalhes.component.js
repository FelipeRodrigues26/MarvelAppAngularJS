angular.module('marvelApp')
.component('personagemDetalhesComponent', {
  templateUrl: '../personagem-detalhes/personagem-detalhes.component.html',
  controller: ['PersonagemService','$routeParams','$uibModal', function PersonagemDetalhesController(PersonagemService,$routeParams, $uibModal){
    var subscriptionPersonagens = null;
    
    this.$onInit = function() {
      var id = $routeParams.id
      this.getPersonagemById(Number.parseInt(id));
    }
  
    this.getPersonagemById = function(id){
        subscriptionPersonagens = PersonagemService.getPersonagemById(id).subscribe( (response) => {
        this.personagem = response.data.results[0]  
        this.imageUrl = this.personagem.thumbnail.path+"."+this.personagem.thumbnail.extension

      });
    }
  
    this.open = function (size) {
      var personagem = this.personagem;
      var modalInstance = $uibModal.open(
        {
        animation: this.animationsEnabled,
        component: 'modalComponent',
        resolve: {
          personagem: function () {
            return personagem;
          }
        }
        
      });
  
    }
  
  }],
  
})

.component('modalComponent', {
  template:
  '<div class="info-modal">'+
    '<div class="modal-header">' +
      '<h4 class="modal-title" id="modal-basic-title">{{$ctrl.personagem.name}}</h4>' +
    '</div>' +

    '<div class="modal-body">' +
      '<h4 class="modal-title" id="modal-basic-title">Séries</h4>' +
      
       '<ul class="list-group" ng-repeat="item in $ctrl.series">'+
         '<li class="list-group-item ">' +
         ' {{item.title}}' +
         '</li>' +
       '</ul>'+
      '<span ng-if="!$ctrl.resultsSeries">Sem resultados de séries</span>'+
      '<div class="d-flex flex-wrow align-items-center justify-content-center">'+
      '<strong ng-if="$ctrl.resultsSeries"> Página {{$ctrl.currentPageSeries+1}} de {{$ctrl.totalPagesSeries}} </strong>'+
      '<button ng-show="$ctrl.resultsSeries" class="btn btn-dark" style="margin-left: .3rem;" ng-click="$ctrl.previousPageSeries()">anterior</button>'+
      '<button  ng-show="$ctrl.resultsSeries" class="btn btn-dark" style="margin-left: .1rem;" ng-click="$ctrl.nextPageSeries()">próxima</button>'+
      '</div>'+

      '<h4 class="modal-title" style="margin-top:1rem" id="modal-basic-title">Histórias</h4>' +
      '<ul class="list-group" ng-repeat="item in $ctrl.stories">'+
       '<li class="list-group-item ">' +
        ' {{item.title}}' +
       '</li>' +
      '</ul>'+
      '<span ng-show="!$ctrl.resultsStories">Sem resultados de stories</span>'+
      '<div class="d-flex flex-wrow align-items-center justify-content-center">'+
      '<strong ng-show="$ctrl.resultsStories">Página {{$ctrl.currentPageStories+1}} de {{$ctrl.totalPagesStories}}</strong>'+
      '<button ng-if="$ctrl.resultsStories" class="btn btn-dark" style="margin-left: .3rem;" ng-click="$ctrl.previousPageStories()">anterior</button>'+
      '<button ng-if="$ctrl.resultsStories" class="btn btn-dark" style="margin-left: .1rem;" ng-click="$ctrl.nextPageStories()">próxima</button>'+
      '</div>'+
    '</div>' +

    '<div class="modal-footer">' +
      '<button class="btn btn-dark" type="button" ng-click="$ctrl.ok(sm)"> Close info </button>' +
    '</div>'+
  '</div>',
  bindings: {
    resolve: '<',
    close: '&', 
    dismiss: '&'
  },
  controller: ['PersonagemService', '$routeParams', function ModalController(PersonagemService, $uibModalInstance) {
    this.series = [];
    this.stories = [];
    this.resultsSeries = null;
    this.resultsStories = null;
    this.totalPagesSeries = 0;
    this.totalPagesStories = 0;
    this.currentPageSeries = 0;
    this.currentPageStories = 0;
    
    this.$onInit = function () {
      this.personagem = this.resolve.personagem;
      this.getSeriesById(Number.parseInt(this.personagem.id));
      this.getStoriesById(Number.parseInt(this.personagem.id));
    }

    this.getSeriesById = function (id) {
      subscriptionPersonagens = PersonagemService.getSeriesQuadrinhosById(id, this.currentPageSeries).subscribe((response) => {
        this.series = response.data.results
        this.resultsSeries = response.data.total;
        this.totalPagesSeries = Math.ceil(this.resultsSeries/20)
      });
    }

    this.getStoriesById = function (id) {
      subscriptionPersonagens = PersonagemService.getHistoriasQuadrinhosById(id, this.currentPageStories).subscribe((response) => {
        this.stories = response.data.results
        this.resultsStories = response.data.total;
        this.totalPagesStories = Math.ceil(this.resultsStories/20)
      });
    }

    this.ok = function () {
      this.close({$value: 'ok'});
    };

    this.cancel = function () {
      this.dismiss({$value: 'cancel'});
    };

    this.nextPageSeries = function(){
      if(this.currentPageSeries+1 >= this.totalPagesSeries)
        return;
      this.currentPageSeries = this.currentPageSeries+1;
      this.getSeriesById(this.personagem.id)
    }
    this.previousPageSeries = function(){
      if(this.currentPageSeries<1)
        return;
      this.currentPageSeries = this.currentPageSeries-1;
      this.getSeriesById(this.personagem.id)
    }

    this.nextPageStories = function(){
      if(this.currentPageStories+1 >= this.totalPagesStories)
        return;
      this.currentPageStories = this.currentPageStories+1;
      this.getStoriesById(this.personagem.id)
    }
    this.previousPageStories = function(){
      if(this.currentPageStories<1)
        return;
      this.currentPageStories = this.currentPageStories-1;
      this.getStoriesById(this.personagem.id)
    }
  }]
});

