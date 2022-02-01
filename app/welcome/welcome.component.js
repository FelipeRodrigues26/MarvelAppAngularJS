angular.module('marvelApp')
.component('welcomeComponent', {
  templateUrl: '../welcome/welcome.component.html',
  controller: function WelcomeController(AutenticationService){
    
    this.onViewWelcome = function () {
      this.userLogged = AutenticationService.userLogged();
    }
  
  },
});