
angular.module('marvelApp')
  .component('login', {
    templateUrl: '../login/login.component.html',
    controller: ['AutenticationService', '$location','$routeParams','$route',LoginController],
  })

function LoginController(AutenticationService, $location){
  this.autenticationService = AutenticationService
  this.user = new User("felipemrodrigues26@gmail.com", "123456");
 
  this.signIn = async function() {  
    try {
      let response = await this.autenticationService.signIn(this.user.email, this.user.pass)
      window.alert('Login realizado com sucesso!')
      window.location.replace('/')
      this.alertVisible = true; 
    } catch (error) {
      window.alert('Erro ao logar! Tente novamente...')
    } 
  }
  
  this.signOut = function(){
    this.autenticationService.signOut();
  }

}
