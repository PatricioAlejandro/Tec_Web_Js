import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title:string = "Hola Amigos";
  nombre:string="";
  apellido:string="";
  colorBackGround="background-color: red;";
  constructor(){
    this.nombre="Pato";
    this.apellido="Chavez";
    console.log("Inicio Constructor");
  }
  ngOnInit(){
    this.nombre="Alejo";
    this.apellido="Melo";
    console.log("Inicio OnInit");
  }
  nombreCompleto():string{
    return `${this.nombre} - ${this.apellido}`
  }

  hizoClick(){
    console.log("Hizo CLick");

  }
  hizoFocus(){
    console.log("Hizo focus");
  }
  cambiarC
}
