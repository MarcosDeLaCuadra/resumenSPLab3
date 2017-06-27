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
    function Motor(potencia, tipo) {
        this.potencia = potencia;
        this.tipo = tipo;
    }
    Motor.prototype.encender = function (callback) {
        var _this = this;
        window.setTimeout(function () { callback(true, _this.tipo); }, 3000);
    };
    Motor.prototype.apagar = function (callback) {
        var _this = this;
        window.setTimeout(function () { callback(true, _this.tipo); }, 3000);
    };
    return Motor;
}());
var Accesorio = (function () {
    function Accesorio(nombre, id) {
        this.nombre = nombre;
        this.id = id;
    }
    return Accesorio;
}());
var Vehiculo = (function () {
    function Vehiculo(precioBase, marca, modelo, lista, motor) {
        this._precioBase = precioBase;
        this.marca = marca;
        this.modelo = modelo;
        this.listaAccessorios = lista;
        this._motor = motor;
    }
    Object.defineProperty(Vehiculo.prototype, "PrecioBase", {
        get: function () {
            return this._precioBase;
        },
        set: function (precio) {
            this._precioBase = precio;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vehiculo.prototype, "Motor", {
        get: function () {
            return this._motor;
        },
        set: function (motor) {
            this._motor = motor;
        },
        enumerable: true,
        configurable: true
    });
    Vehiculo.prototype.precioConImpuesto = function (precioBase) {
        return precioBase + ((precioBase * 100) / 8);
    };
    Vehiculo.prototype.AgregarAccesorios = function () {
        var accessorios = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            accessorios[_i] = arguments[_i];
        }
        for (var _a = 0, accessorios_1 = accessorios; _a < accessorios_1.length; _a++) {
            var entry = accessorios_1[_a];
            this.listaAccessorios = this.listaAccessorios + entry.nombre;
        }
    };
    return Vehiculo;
}());
var Camion = (function (_super) {
    __extends(Camion, _super);
    function Camion(largo, cXc, precioBase, marca, modelo, lista, motor) {
        var _this = _super.call(this, precioBase, marca, modelo, lista, motor) || this;
        _this.Largo = largo;
        _this.cuatroXcuatro = cXc;
        return _this;
    }
    return Camion;
}(Vehiculo));
window.onload = function () {
    //1)Instanciar un camion
    var objCamion = new Camion("largo", true, 3453553, "vw", "asd1", "lista", new Motor(33245, "asdsa"));
    //2)Agregarle al menos 2 accesorios.
    var accesorio1 = new Accesorio("aleron", 1);
    var accesorio2 = new Accesorio("polarizado", 2);
    var accesorios = new Array();
    accesorios.push(accesorio1);
    accesorios.push(accesorio2);
    objCamion -  > AgregarAccesorios(accesorios);
    //3)encender el camión mostrando que se encendió por pantalla.
    objCamion.Motor -  > encender(123, "asdf");
    //4)Mostrar los accesorios por pantalla.
    //5)Mostrar el valor total del camión por pantalla.
    //6)Apagar el motor mostrando que se apagó por pantalla.
};
