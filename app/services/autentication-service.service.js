
angular.
  module('marvelApp').
  factory('AutenticationService', ['$firebaseAuth', 'rx', AutenticationService]);

function AutenticationService($firebaseAuth, rx) {

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
  return {
    signIn : function (email, password) {
      try {
        return firebase.auth().signInWithEmailAndPassword(email, password)
      } catch (error) {
        window.alert('Falha no login!')
      }
    },

    signOut : function () {
      firebase.auth().signOut().then(
        () => { 
          console.log("Usuario logout sucess") 
          window.localStorage.removeItem('user')
        }
      ).catch(error =>
        console.log("Erro ao deslogar" + error)
      )
    },

    userLogged : function () {
     return firebase.auth().currentUser
    }

  }
}
