class Motor{

    protected potencia:number;
    protected tipo:string;

    constructor(potencia:number , tipo:string ){
        this.potencia = potencia;
        this.tipo = tipo;
    }

     encender(callback:(bool:boolean , tipo:string)=>void):void{

        window.setTimeout(() => {callback(true, this.tipo);}, 3000);
        

    }
      apagar(callback:(bool:boolean , tipo:string)=>void):void{
         
          window.setTimeout(() => {callback(true, this.tipo);}, 3000);
    }

}

 class Accesorio{

        private nombre:string;
        private id:number;

        constructor(nombre:string , id:number){

            this.nombre= nombre;
            this.id = id;
        }
    }

class Vehiculo  {

	private _precioBase: number;
    private _motor: Motor;
    public  marca: string;
    public modelo: string;
	private listaAccessorios: string;

    constructor(precioBase:number, marca:string, modelo:string ,lista:string ,motor:Motor){
       
      
        this._precioBase= precioBase;
        this.marca = marca;
        this.modelo = modelo;
        this.listaAccessorios = lista;
        this._motor = motor;
        
    }

   get PrecioBase(){
        return this._precioBase;   
    }

    set PrecioBase(precio:number){
        this._precioBase = precio;
    }

     get Motor(){
        return this._motor;   
    }

    set Motor(motor:Motor){
        this._motor = motor;
    }

     precioConImpuesto(precioBase:number):number{

        return precioBase + ((precioBase * 100) / 8 );

    }
     AgregarAccesorios(...accessorios:Accesorio[]):void{
        for (let entry of accessorios) {
           this.listaAccessorios = this.listaAccessorios + entry.nombre;
        }
    }



}

class Camion extends Vehiculo{

    public Largo:string;
    public cuatroXcuatro:boolean;

    constructor(largo:string , cXc:boolean, precioBase:number, marca:string, modelo:string ,lista:string , motor:Motor){
        super(precioBase , marca, modelo, lista, motor);
        this.Largo = largo;
        this.cuatroXcuatro = cXc;
    }



}

window.onload = function () {
//1)Instanciar un camion
   // let objCamion = new Camion("largo",true, 3453553 , "vw" , "asd1","lista" , new Motor(33245,"asdsa"));
    let objCamion = new Camion("asd", true , 1234 ,"asd ", "asdf", "sdgdf",  new Motor(33245,"asdsa"))	;
	//2)Agregarle al menos 2 accesorios.

    let accesorio1 = new Accesorio("aleron", 1);    
    let accesorio2 = new Accesorio("polarizado", 2);
    let accesorios = new Array();
    accesorios.push(accesorio1);
    accesorios.push(accesorio2);
   objCamion.AgregarAccesorios(accesorios);   
   

	//3)encender el camión mostrando que se encendió por pantalla.

       objCamion.Motor.encender(123 ,"asdf");

	//4)Mostrar los accesorios por pantalla.
//5)Mostrar el valor total del camión por pantalla.
	//6)Apagar el motor mostrando que se apagó por pantalla.
};
