var MAIN = (function (DATA) {

  var lib = {};

  /*
    realizar las operaciones usando los metosos map,  reduce y filter y combinaciones entre ellos
  */

  // Retornar una array de strings (el nombre de los usarios de sexo femenino)
  lib.femaleUsers = function () {
    return DATA
      .filter(function (user) {
        return user.gender === 'female';
      })
      .map(function (user) {
        return user.name;
      });
  };
  console.log(lib.femaleUsers(DATA));
  // Retornar una array de strings (el email de los usarios de sexo masculino)
  lib.maleUsersEmails = function () {
    return DATA 
     .filter(function(user){
      if(user.gender == 'male'){
        return user;
      }

     })
     .map(function(user){
      return user.email;
     });

  };
   console.log(lib.maleUsersEmails(DATA));

  // Retornar un array de objetos que solo contengan las claves name, email y age, de todos los usuarios mayores que 'age'
  lib.userOlderThan = function (age) {
    return DATA
    .filter(function(user){
      return  user.age > age;      
      
    })
    .map(function(user){
       var asd= [{'name': user.name , 'email': user.email , 'age': user.age}];
       return JSON.stringify(asd) ;
    });
  };
   console.log(lib.userOlderThan(32, (DATA) ));
   

  // Retornar un objeto que contenga solo el nombre y la edad (name y age) del usuario mas grande.
  lib.olderUser = function (age) {
    return DATA
    
    .reduce(function(anterior , posterior, indice, vector){
      
     /* if( anterior == 0) {
        anterior= posterior.age;     
       
    }
    if(anterior < posterior.age && anterior != 0) {
        anterior= posterior.age;
      } */
      return anterior;
    })

   

  };
   console.log(lib.olderUser(35,(DATA) ));

  // Retornar el promedio de edad de los usuarios (number)
  lib.userAgeAverage = function (age) {
    return DATA
    .map(function(user){
     
      return user.age;
    })
   .reduce(function(anterior , posterior, indice, vector){
      if(indice == (vector.length - 1) ){
        return (anterior + posterior)/ indice;
      }
      return (anterior + posterior);
    })
  };
  console.log(lib.userAgeAverage(30,(DATA) ));

  // Retornar el promedio de edad de los usuarios hombres (number)
  lib.userMaleAgeAverage = function (age) {
    return DATA
      .filter(function(user){
        return user.gender == 'male';
      })
     .map(function(user){
     
      return user.age;
    })
   .reduce(function(anterior , posterior, indice, vector){
      if(indice == (vector.length - 1) ){
        return (anterior + posterior)/ indice;
      }
      return (anterior + posterior);
    })
  
  };

 console.log(lib.userMaleAgeAverage(30,(DATA) ));

  // Retornar el promedio de edad de los usuarios mujeres (number)
  lib.userFemaleAgeAverage = function (age) {
    return DATA
      .filter(function(user){
        return user.gender == 'female';
      })
     .map(function(user){     
      return user.age;
    })
   .reduce(function(anterior , posterior, indice, vector){
      if(indice == (vector.length - 1) ){
        return (anterior + posterior)/ indice;
      }
      return (anterior + posterior);
    })
  };

  console.log(lib.userFemaleAgeAverage(30,(DATA) ));

  // Retornar un objeto  de etiquetas (tags)
  // cada property del objeto es el nombre de una etiqueta
  // y el value es la cantidad de usuarios que tienene esa etiqueta
  lib.tagCloud = function (age) {
    
  };

  return lib;

})(DATA);
