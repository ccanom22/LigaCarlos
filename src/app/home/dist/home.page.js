"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomePage = void 0;
var core_1 = require("@angular/core");
var HomePage = /** @class */ (function () {
    function HomePage() {
        this.disabledSiguiente = false;
        this.disabledAnterior = true;
        this.contador = 0;
        this.jornada = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"];
        this.bloqueUno = ["Equipo 1", "Equipo 2", "Equipo 3", "Equipo 4", "Equipo 5"];
        this.bloqueDos = ["Equipo 6", "Equipo 7", "Equipo 8", "Equipo 9", "Equipo 10"];
        this.auxiliar1 = [];
        this.auxiliar2 = [];
        this.goles = ["0", "1", "2", "3", "4", "5"];
    }
    HomePage.prototype.generarGoles = function () {
        this.golesMarcados = this.goles[Math.floor(Math.random() * this.goles.length)];
        ;
    };
    HomePage.prototype.siguiente = function () {
        this.auxiliar1 = this.auxiliar1.concat(this.bloqueDos.slice(1), this.bloqueUno.slice(4));
        this.auxiliar2 = this.auxiliar2.concat(this.bloqueUno.slice(0, 1), this.bloqueDos.slice(0, 1), this.bloqueUno.slice(1));
        this.auxiliar2.pop();
        this.bloqueUno = this.auxiliar2;
        this.bloqueDos = this.auxiliar1;
        this.auxiliar1 = [];
        this.auxiliar2 = [];
        this.incrementador();
    };
    HomePage.prototype.anterior = function () {
        this.auxiliar1 = this.auxiliar1.concat(this.bloqueUno.slice(1, 2), this.bloqueDos.slice(0));
        this.auxiliar1.pop();
        this.auxiliar2 = this.auxiliar2.concat(this.bloqueUno.slice(0, 1), this.bloqueUno.slice(2), this.bloqueDos.slice(4));
        this.bloqueUno = this.auxiliar2;
        this.bloqueDos = this.auxiliar1;
        this.auxiliar1 = [];
        this.auxiliar2 = [];
        this.decrementador();
    };
    HomePage.prototype.incrementador = function () {
        this.contador++;
        if (this.contador == 17) {
            this.disabledSiguiente = true;
        }
        if (this.contador >= 0) {
            this.disabledAnterior = false;
        }
    };
    HomePage.prototype.decrementador = function () {
        this.contador--;
        if (this.contador == 0) {
            this.disabledAnterior = true;
        }
        if (this.contador >= 0) {
            this.disabledSiguiente = false;
        }
    };
    HomePage = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss']
        })
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
var partido = /** @class */ (function () {
    function partido(local, visitante, golesLocal, golesVisitante, min) {
        this._equipoLocal = local;
        this._equipoVisitante = visitante;
        this._golesLocal = golesLocal;
        this._golesVisitante = golesVisitante;
        this._minutos = min;
    }
    Object.defineProperty(partido.prototype, "equipoLocal", {
        get: function () {
            return this._equipoLocal;
        },
        set: function (value) {
            this._equipoLocal = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(partido.prototype, "equipoVisitante", {
        get: function () {
            return this._equipoVisitante;
        },
        set: function (value) {
            this._equipoVisitante = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(partido.prototype, "golesLocal", {
        get: function () {
            return this._golesLocal;
        },
        set: function (value) {
            this._golesLocal = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(partido.prototype, "golesVisitante", {
        get: function () {
            return this._golesVisitante;
        },
        set: function (value) {
            this._golesVisitante = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(partido.prototype, "minutos", {
        get: function () {
            return this._minutos;
        },
        set: function (value) {
            this._minutos = value;
        },
        enumerable: false,
        configurable: true
    });
    partido.prototype.jugarPartido = function (local, visitante) {
        //  let local="Real Madrid";
        //    let visitante="Barcelona"
        var minutos = 0;
        var probabilidadGolLocal = 1000;
        var probabilidadGolVisitante = 1000;
        var contadorLocal = 0;
        var contadorVisitante = 0;
        for (var step = 0; step < 90; step++) {
            var eventoLocal = Math.floor(probabilidadGolLocal * Math.random());
            var eventoVisitante = Math.floor(probabilidadGolVisitante * Math.random());
            minutos = minutos + 1;
            if (eventoLocal < 10) {
                console.log("Gol local en el minuto " + minutos);
                contadorLocal = contadorLocal + 1;
            }
            if (eventoVisitante < 10) {
                console.log("Gol visitante en el minuto" + minutos);
                contadorVisitante = contadorVisitante + 1;
            }
        }
        console.log("El equipo local ha metido:" + contadorLocal + " goles");
        console.log("El equipo visitante ha metido:" + contadorVisitante + " goles");
        if (contadorLocal > contadorVisitante) {
            console.log("Enhorabuena equipo Local");
        }
        if (contadorLocal < contadorVisitante) {
            console.log("Enhorabuena equipo visitante");
        }
        if (contadorLocal == contadorVisitante) {
            console.log("El encuentro terminó empate");
        }
    };
    return partido;
}());
