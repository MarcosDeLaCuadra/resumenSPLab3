var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Motor = (function () {
    function Motor(pontencia, tipo) {
        this.potencia = pontencia;
        this.tipo = tipo;
    }
    Motor.prototype.encender = function (callback) {
        var _this = this;
        window.setTimeout(function () { callback(true, _this.tipo); }, 3000);
    };
    return Motor;
}());
var Accesorio = (function () {
    function Accesorio(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
    return Accesorio;
}());
var Vehiculo = (function (_super) {
    __extends(Vehiculo, _super);
    function Vehiculo(pontencia, tipo, precioBase, motor, marca, modelo) {
        var _this = _super.call(this, pontencia, tipo) || this;
        _this._motor = motor;
        _this._precioBase = precioBase;
        _this.marca = marca;
        _this.modelo = modelo;
        return _this;
    }
    Vehiculo.prototype.precio = function () {
        return this._precioBase;
    };
    Vehiculo.prototype.motor = function () {
        return this._motor;
    };
    Vehiculo.prototype.ListaAccessorios = function () {
        return this.listaAccessorios;
    };
    return Vehiculo;
}(Motor));
///////////////////////ejemplooo enum , type , tuplaa ///////////////
var Numeros;
(function (Numeros) {
    Numeros[Numeros["asd"] = 2] = "asd";
    Numeros[Numeros["qwe"] = 3] = "qwe";
})(Numeros || (Numeros = {}));
var datos = { nombre: 'asd', apellido: 'qwe' };
var dat = [{ nombre: 'asd', apellido: 'qwe' },
    { nombre: 'wertet', apellido: 'bvcbvb' }
];
var tupla;
tupla = [1234, 345];
tupla = "dgdfghdfhfg";
var objFuncion = { nombre: 'ricardo',
    getNombre: function () { return "asfsdf"; }
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
funciones.Traernomber = function () {
    return data
        .map(function (tupla) {
        return "asd";
    });
};
