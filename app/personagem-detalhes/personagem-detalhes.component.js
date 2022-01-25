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
    '<div class="modal-header">' +
    '<h4 class="modal-title" id="modal-basic-title">{{$ctrl.personagem.name}}</h4>' +
    '</div>' +
    '<div class="modal-body">' +
    '<h6 class="modal-title" id="modal-basic-title">Séries</h6>' +

    '<p ng-repeat="item in $ctrl.series">' +
    '- {{item.title}}' +
    '</p>' +

    ' <h6 class="modal-title" id="modal-basic-title">Histórias</h6>' +
    '<p ng-repeat="item in $ctrl.stories">' +
    '- {{item.title}}' +
    '</p>' +
    '</div>' +
    '<div class="modal-footer">' +
    '<button class="btn btn-dark" type="button" ng-click="$ctrl.ok(sm)">OK</button>' +
    '</div>' +
    '</div>',
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  controller: ['PersonagemService', '$routeParams', function ModalController(PersonagemService, $uibModalInstance) {
    this.series = [];
    this.stories = [];
    this.$onInit = function () {
      this.personagem = this.resolve.personagem;
      this.getSeriesById(Number.parseInt(this.personagem.id));
      this.getStoriesById(Number.parseInt(this.personagem.id));
    }

    this.getSeriesById = function (id) {
      subscriptionPersonagens = PersonagemService.getSeriesQuadrinhosById(id).subscribe((response) => {
        this.series = response.data.results


      });
    }

    this.getStoriesById = function (id) {
      subscriptionPersonagens = PersonagemService.getHistoriasQuadrinhosById(id).subscribe((response) => {
        this.stories = response.data.results
  
      });
    }

    this.ok = function () {
      this.close({$value: 'ok'});
    };

    this.cancel = function () {
      this.dismiss({$value: 'cancel'});
    };

  }]
});

