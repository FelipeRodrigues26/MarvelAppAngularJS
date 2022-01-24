
angular.
  module('marvelApp').
  service('AutenticationService',['$firebaseAuth', 'rx', AutenticationService]);

function AutenticationService($firebaseAuth,rx) {  

  const initializeApp = {

    apiKey: "AIzaSyAOKzfvrTwRWsmUxG7LJPBdQcEDsCKFbuM",
    authDomain: "authmarvel.firebaseapp.com",
    projectId: "authmarvel",
    storageBucket: "authmarvel.appspot.com",
    messagingSenderId: "503133354528",
    appId: "1:503133354528:web:aa8332145b856c1dd8da45",
    measurementId: "G-8XH8HQPM62",

  };
  firebase.initializeApp(initializeApp);

  this.signIn = function (email, password) {
     try {     
        return firebase.auth().signInWithEmailAndPassword(email, password)
     } catch (error) {
      window.alert('Falha no login!')
     }
  }

  this.signOut = function () {
    firebase.auth().signOut().then(
      () => { console.log("Usuario logout sucess") }
    ).catch(error =>
      console.log("Erro ao deslogar" + error)
    )
  }

  this.isUserLogged = function () {
    
    const auth = firebase.auth();
    if (auth.currentUser) {
      console.log(auth.currentUser)
      return true;
    } else {
      console.log(auth.currentUser)
      return false;
    }
  }

  this.userLogged = function () {
    return firebase.auth().currentUser;
  }
}
