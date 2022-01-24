
angular.module('marvelApp')
  .component('login', {
    templateUrl: '../login/login.component.html',
    controller: ['AutenticationService', '$location',LoginController],
  })

function LoginController(AutenticationService, $location){
  this.autenticationService = AutenticationService
  this.user = new User("felipemrodrigues26@gmail.com", "123456");
  this.alertVisible = false;
 
  this.signIn =  async function() {  
    response = await this.autenticationService.signIn(this.user.email, this.user.pass)
     
        this.alertVisible = true;
        this.msgSucessError = 'Autenticado com sucesso.'; 
        this.alertType = 'alert-success';
        console.log(this.msgSucessError)
        console.log(this.alertType);
       // setTimeout(function(){
        // $location.path('/personagem/lista');
        //   window.location.reload();
        //}, 4000)
        console.log('entrou')
     
        console.log('error')
        this.alertVisible = true;
        this.alertType = 'alert-danger';
        this.msgSucessError = 'Autenticação falhou.';
        // console.log("Erro ao logar" + error)
         
      

      console.log("dsdss"+response)
      return response
  }
  
  this.signOut = function(){
    this.autenticationService.signOut();
  }

}
