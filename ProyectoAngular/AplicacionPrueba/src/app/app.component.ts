import {Component, OnInit} from '@angular/core';
import {Http, Response} from "@angular/http";
import {MasterURLService} from "./services/master-url.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = "Bienvenido a Ingresar Tiendas";
  nuevaTienda: any = {};
  error: string = "No hay errores";
  tiendas = [];
  disabledButtons = {
    NuevaTiendaFormSubmitButton: false
  }

  constructor(private _http: Http, private _masterURL: MasterURLService) {
  }

  ngOnInit() {
    this._http.get(this._masterURL.url + "Tienda")
      .subscribe(
        (res: Response) => {
          this.tiendas = res.json()
            .map((value)=>{
            value.formularioCerrado = true;
            return value;
            });
        },
        err => {
          console.log('Error: ', err)
        },
        () => {
          console.log("Se completo la accion")
        }
      )
  }

  crearTienda(formulario) {
    this.disabledButtons.NuevaTiendaFormSubmitButton = true;
    this._http
      .post(this._masterURL.url + "Tienda", {
        nombre: formulario.value.nombre
      })
      .subscribe(
        res => {
          console.log('No hubo errores: ', res);
          this.tiendas.push(res.json());
          this.nuevaTienda = {};
          this.disabledButtons.NuevaTiendaFormSubmitButton = false;
        },
        err => {
          console.log('Error: ', err)
          this.disabledButtons.NuevaTiendaFormSubmitButton = false;
        },
        () => {
          console.log("Se completo la accion")
        }
      );
  }

  borrarTienda(id: number) {
    let parametros = {
      id: id
    }
    this._http.delete(this._masterURL.url + "Tienda/" + parametros.id)
      .subscribe(
        res => {
          let tiendaBorrada = res.json();
          this.tiendas = this.tiendas.filter(value => tiendaBorrada.id != value.id);
        },
        err => {
          console.log('Error: ', err)
        },
        () => {
          console.log("Se completo la accion")
        }
      );
  }

  actualizarTienda(tienda: any) {
    let parametros = {
      nombre: tienda.nombre
    }
    this._http.put(this._masterURL.url + "Tienda/" + tienda.id, parametros).subscribe(
      (res)=>{
        tienda.formularioCerrado = !tienda.formularioCerrado;
        console.log("Respuesta: ",res.json());
      },
      (err)=>{
        console.log("Error: ",err);
      }
    )
  }
}
