// Tipos
let batman:string = "Bruce";
let superman:string = "Clark";

let existe = false;

// Tuplas
let parejaHeroes:string[] = [batman,superman];
let villano:[string, number, boolean] = ["Lex Lutor",5,true];

// Arreglos
let aliados:string[] = ["Mujer Maravilla","Acuaman","San", "Flash"];

//Enumeraciones
enum Fuerza{
  Acuaman= 0,
  Batman = 1,
  Flash = 5,
  Superman = 100

}
let fuerzaFlash = Fuerza.Flash;
let fuerzaSuperman = Fuerza.Superman;
let fuerzaBatman = Fuerza.Batman;
let fuerzaAcuaman = Fuerza.Acuaman;

// Retorno de funciones
function activar_batiseñal():string{
  return "activada";
}

function pedir_ayuda():void{
  console.log("Auxilio!!!");
}

// Aserciones de Tipo
let poder = 100;
let largoDelPoder = poder.toString().length;
console.log( largoDelPoder );

let x:any ="Juan";

(<string>.x).length; //asi le doy un tipo string y puedo uusar sus metodos

