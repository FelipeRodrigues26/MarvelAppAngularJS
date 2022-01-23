angular.module('marvelApp')
.component('app', {
  templateUrl: 'app.component.html',
  controller: ['$location','AutenticationService', AppComponent],
});

function AppComponent($location, AutenticationService){
  this.viewWelcome = true;

  this.onViewWelcome = function () {
    this.viewWelcome = false;
    this.userLogged = AutenticationService.userLogged();
    console.log(this.userLogged)
  }

  this.logout = function () {
    AutenticationService.signOut();
    this.viewWelcome = true;
    this.userLogged = false;
    $location.path('/'); 
  }

} 