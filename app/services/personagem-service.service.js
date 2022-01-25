angular.
  module('marvelApp').
  service('PersonagemService', ['$http','rx', PersonagemService ]);

function PersonagemService($http, rx) {

  const PUBLIC_KEY = '5a237863b3cc2061003cbbc4fe20dc06';
  const TS = '1'
  const HASH = 'bd4b447a65ef5d6b174f87cf9db6d2db';
        
  const url = 'https://gateway.marvel.com/v1/public/characters'; // api rest

  
  const headers = {'Content-Type': 'application/json',  'accept':'*/*'}
  const params =  {
    'apikey': PUBLIC_KEY,
    'ts': TS,
    'hash': HASH
  }
 
 
  // Obtem todos os personagens
  this.getPersonagens = function(page) {
    var offSet = page*20;
    var req = {
      method: 'GET',
      url: url,
      headers: headers,
      params: {...params, 'offset': offSet}
     } 

     return rx.Observable
     .fromPromise(
       $http(req)
     )
     .map(function(response){
        return response.data
      });  
  }
 
  // Obtem todos os por nome
  this.getPersonagensByName = function(name, page) {
    var offSet = page*20;
    var req = {
      method: 'GET',
      url: url,
      headers: headers,
      params: {...params, ...{'nameStartsWith':name, 'offset': offSet } }
    }
     
    return rx.Observable
    .fromPromise(
      $http(req)
    )
    .map(function(response){ return response.data});  
  }
 
  // Obtem um personagem pelo id
  this.getPersonagemById = function(id, page){
    var offSet = page*20
    var req = {
      method: 'GET',
      url: url+"/"+id,
      headers: headers,
      params: {...params, 'offset': offSet }
    }
     
    return rx.Observable
    .fromPromise(
      $http(req)
    )
    .map(function(response){ return response.data});  
  }
 
  this.getQuadrinhosById = function(id, page){
    var offSet = page*20
    var req = {
      method: 'GET',
      url: url+ '/' + id+'/comics',
      headers: headers,
      params: {...params, 'offset': offSet }
    }
     
    return rx.Observable
    .fromPromise(
      $http(req)
    )
    .map(function(response){ return response.data});  
  }
 
  this.getSeriesQuadrinhosById = function(id, page) {
    var offSet = page*20
    var req = {
      method: 'GET',
      url: url+ '/' + id+'/series',
      headers: headers,
      params: {...params, 'offset': offSet }
    }
     
    return rx.Observable
    .fromPromise(
      $http(req)
    )
    .map(function(response){ return response.data});  
    
  }
  
 
  this.getHistoriasQuadrinhosById = function(id, page) {
    var offSet = page*20
    var req = {
      method: 'GET',
      url: url+ '/' + id+'/stories',
      headers: headers,
      params: {...params, 'offset': offSet }
    }
     
    return rx.Observable
    .fromPromise(
      $http(req)
    )
    .map(function(response){ return response.data});  
  
  }


}
