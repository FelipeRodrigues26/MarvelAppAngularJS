angular.module('marvelApp')
.component('app', {
  templateUrl: 'app.component.html',
  controller: ['$location','AutenticationService', AppComponent],
});

function AppComponent($location, AutenticationService){
  
  this.$onInit = function () {
    this.userLogged = window.sessionStorage.getItem('user');
    console.log(this.userLogged)
  }
  
  this.logout = function () {
    AutenticationService.signOut();
    this.userLogged = null
    $location.path('/'); 
  }


} 