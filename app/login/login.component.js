
angular.module('marvelApp')
  .component('login', {
    templateUrl: '../login/login.component.html',
    controller: ['AutenticationService', '$location',LoginController],
  })

function LoginController(AutenticationService, $location){
  this.autenticationService = AutenticationService
  this.user = new User("felipemrodrigues26@gmail.com", "123456");
 
  this.signIn =  function() {  
    this.autenticationService.signIn(this.user.email, this.user.pass)
      .then((result) => {
        this.alertVisible = true;
        this.msgSucessError = 'Autenticado com sucesso.'; 
        this.alertType = 'alert-success';
        console.log('teste'+this.msgSucessError)
       
        // setTimeout(function(){
        //   $location.path('/personagem/lista');
        //   window.location.reload();
        // }, 6000)
      }) 
      .catch( (error)  => {
        this.alertVisible = true;
        this.alertType = 'alert-danger';
        this.msgSucessError = 'Autenticação falhou.';
         console.log("Erro ao logar" + error)
      });

  }

  this.signOut = function(){
    this.autenticationService.signOut();
  }

}
