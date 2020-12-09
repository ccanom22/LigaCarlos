import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  disabledSiguiente:boolean=false;
  disabledAnterior:boolean=true;
  contador:number=0;
  jornada: Array<String>= ["1", "2", "3", "4","5","6", "7", "8", "9","10", "11", "12", "13", "14","15","16", "17", "18"];
   bloqueUno: Array<String>= ["Equipo 1", "Equipo 2", "Equipo 3", "Equipo 4","Equipo 5"];
   bloqueDos: Array<String> = ["Equipo 6", "Equipo 7", "Equipo 8", "Equipo 9","Equipo 10"];
   auxiliar1:Array<String>=[];
   auxiliar2:Array<String>=[];
   goles: Array<String>= ["0", "1", "2", "3", "4", "5"];
   golesMarcados:String;
   constructor() {
  }
  generarGoles(){
    this.golesMarcados= this.goles[Math.floor(Math.random()*this.goles.length)];;
  }
  siguiente(){
    this.auxiliar1=this.auxiliar1.concat(this.bloqueDos.slice(1),this.bloqueUno.slice(4))
    this.auxiliar2=this.auxiliar2.concat(this.bloqueUno.slice(0,1),this.bloqueDos.slice(0,1),this.bloqueUno.slice(1))
    this.auxiliar2.pop()
    this.bloqueUno=this.auxiliar2;
    this.bloqueDos=this.auxiliar1;
    this.auxiliar1=[];
    this.auxiliar2=[];
    this.incrementador();
  }
  anterior(){
   this.auxiliar1=this.auxiliar1.concat(this.bloqueUno.slice(1,2),this.bloqueDos.slice(0));
    this.auxiliar1.pop();
    this.auxiliar2=this.auxiliar2.concat(this.bloqueUno.slice(0,1),this.bloqueUno.slice(2), this.bloqueDos.slice(4));
    this.bloqueUno=this.auxiliar2;
    this.bloqueDos=this.auxiliar1;
    this.auxiliar1=[];
    this.auxiliar2=[];
    this.decrementador();
  }
  incrementador(){
    this.contador++;
    if(this.contador==17){
      this.disabledSiguiente=true;
    }
    if(this.contador>=0){
      this.disabledAnterior=false;
    }
    }
    decrementador(){
      this.contador--;
      if(this.contador==0){
        this.disabledAnterior=true;
    }
    if(this.contador>=0){
      this.disabledSiguiente=false;
  }

  }

}

class partido{
  private _equipoLocal: String;
  private _equipoVisitante: String;
  private _golesLocal: String;
  private _golesVisitante: String;
  private _minutos: number;

  constructor(local:String, visitante:String, golesLocal:String, golesVisitante:String, min:number){
      this._equipoLocal=local;
      this._equipoVisitante=visitante;
      this._golesLocal=golesLocal;
      this._golesVisitante=golesVisitante;
      this._minutos=min;
  }
public get equipoLocal(): String {
  return this._equipoLocal;
}
public set equipoLocal(value: String) {
  this._equipoLocal = value;
}
  
public get equipoVisitante(): String {
  return this._equipoVisitante;
}
public set equipoVisitante(value: String) {
  this._equipoVisitante = value;
}
  
public get golesLocal(): String {
  return this._golesLocal;
}
public set golesLocal(value: String) {
  this._golesLocal = value;
}

public get golesVisitante(): String {
  return this._golesVisitante;
}
public set golesVisitante(value: String) {
  this._golesVisitante = value;
}

public get minutos(): number {
  return this._minutos;
}
public set minutos(value: number) {
  this._minutos = value;
}
public jugarPartido(local:string,visitante:string){
  
    //  let local="Real Madrid";
  //    let visitante="Barcelona"
      let minutos=0;
      const probabilidadGolLocal:number=1000;
      const probabilidadGolVisitante:number=1000;
      let contadorLocal=0;
      let contadorVisitante=0;
      for (let step = 0; step < 90; step++) {
          let eventoLocal = Math.floor(probabilidadGolLocal*Math.random());
           let eventoVisitante = Math.floor(probabilidadGolVisitante*Math.random());
            minutos=minutos+1;
           if(eventoLocal<10){
               console.log("Gol local en el minuto "+minutos);
                contadorLocal=contadorLocal+1;
           }
           if(eventoVisitante<10){
               console.log("Gol visitante en el minuto"+minutos);
              contadorVisitante=contadorVisitante+1;
           }
}
      console.log("El equipo local ha metido:" +contadorLocal+ " goles")
       console.log("El equipo visitante ha metido:" +contadorVisitante+ " goles")
       if(contadorLocal>contadorVisitante){
         console.log("Enhorabuena equipo Local");
       }
        if(contadorLocal<contadorVisitante){
         console.log("Enhorabuena equipo visitante");
       }
       if(contadorLocal==contadorVisitante){
         console.log("El encuentro terminó empate");
       }
  }
}



