// Tipos
var batman = "Bruce";
var superman = "Clark";
var existe = false;
// Tuplas
var parejaHeroes = [batman, superman];
var villano = ["Lex Lutor", 5, true];
// Arreglos
var aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
//Enumeraciones
var Fuerza;
(function (Fuerza) {
    Fuerza[Fuerza["Acuaman"] = 0] = "Acuaman";
    Fuerza[Fuerza["Batman"] = 1] = "Batman";
    Fuerza[Fuerza["Flash"] = 5] = "Flash";
    Fuerza[Fuerza["Superman"] = 100] = "Superman";
})(Fuerza || (Fuerza = {}));
var fuerzaFlash = Fuerza.Flash;
var fuerzaSuperman = Fuerza.Superman;
var fuerzaBatman = Fuerza.Batman;
var fuerzaAcuaman = Fuerza.Acuaman;
// Retorno de funciones
function activar_batiseñal() {
    return "activada";
}
function pedir_ayuda() {
    console.log("Auxilio!!!");
}
// Aserciones de Tipo
var poder = 100;
var largoDelPoder = poder.toString().length;
console.log(largoDelPoder);
var x = "Juan";
.x.length; //asi le doy un tipo string y puedo uusar sus metodos
