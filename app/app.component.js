angular.module('marvelApp')
.component('app', {
  templateUrl: 'app.component.html',
  controller: ['$location','AutenticationService', AppComponent],
});


function AppComponent($location, AutenticationService){
  
  this.userLogged = async function (){
    return await AutenticationService.userLogged();
  }
  
  this.$onInit = function() {
    this.userLogged();
  }

  this.logout = function () {
    AutenticationService.signOut();
    this.userLogged = false;
    $location.path('/'); 
  }


} 