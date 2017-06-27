class Motor{

 potencia:string;
     tipo:string;
    constructor(pontencia:string , tipo:string){
        this.potencia = pontencia;
        this.tipo = tipo;
    }

    encender(callback:(estado:boolean , tipo:string)=>void  ):void{
        window.setTimeout(() => {callback(true, this.tipo);}, 3000);
    }



}

class Accesorio{

     id:number;
     nombre:string;

      constructor(id:number , nombre:string){
        this.id = id;
        this.nombre = nombre;
    }

}
 

class Vehiculo extends Motor{

    	private _precioBase: number;
        private _motor: Motor;
        marca: string;
        modelo: string;
        private listaAccessorios: string;


         constructor(pontencia:string , tipo:string ,precioBase: number, motor: Motor, marca: string, modelo: string){
             super(pontencia , tipo);
            this._motor = motor;
            this._precioBase = precioBase;
            this.marca = marca;
            this.modelo = modelo;
    }

     precio():number{
        return this._precioBase;
    }
    motor():Motor{
        return this._motor;
    }
    ListaAccessorios():string{
        return this.listaAccessorios;
    }
    
    
  
}   

    ///////////////////////ejemplooo enum , type , tuplaa ///////////////

 enum Numeros{
        asd =2,
        qwe =3
    }

 type algo = {nombre:string , apellido:string};
 let datos:algo = {nombre : 'asd', apellido: 'qwe'};

 let dat:algo[] = [{nombre : 'asd', apellido: 'qwe'},
                    {nombre : 'wertet', apellido: 'bvcbvb'}
                    ];
let tupla: string | number[];
    tupla = [1234 , 345];
    tupla = "dgdfghdfhfg";


  type algoConFuncion = {nombre:string , getNombre:()=>string};

  let objFuncion = {nombre : 'ricardo', 
                    getNombre(){return "asfsdf";}
                    };  
/*
window.onload = function () {
    let camion = new Camion(40000, new Motor(300, 'V8'), 'Chevy', 'Silverado',
                         'Largo', true);

    camion.agregarAccesorios(new Accesorio(1234, 'Techo Solar'), new Accesorio(4321, 'Equipo de Remolque'));
    camion.motor.encender((status: boolean, tipo: string) => {
        alert(tipo + ' fue encendido');

        camion.motor.detener((status: boolean, tipo: string) => {
            alert(tipo + ' fue apagado');
        });
    });
    document.getElementById("content").innerHTML = camion.getAccesorioList() + '</br> Precio Total = '+camion.calcularPrecioTotal();
};*/
 var funciones;
 funciones.Traernomber = function(){
     return data     
     .map(function(tupla){
        return "asd";
    })
};