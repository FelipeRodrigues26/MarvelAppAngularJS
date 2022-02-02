
angular.module('marvelApp')
  .component('login', {
    templateUrl: '../login/login.component.html',
    controller: ['AutenticationService', '$location','$routeParams','$route',LoginController],
  })

function LoginController(AutenticationService, $location){

  this.user = new User("felipemrodrigues26@gmail.com", "123456");
 
  this.signIn = async function() {  
    try {
      let response = await AutenticationService.signIn(this.user.email, this.user.pass)
      window.sessionStorage.setItem('user', AutenticationService.userLogged().email);
      window.alert('Login realizado com sucesso!')
      window.location.replace('/')
      this.alertVisible = true; 
    } catch (error) {
      window.alert('Erro ao logar! Tente novamente...')
    } 
  }

}
