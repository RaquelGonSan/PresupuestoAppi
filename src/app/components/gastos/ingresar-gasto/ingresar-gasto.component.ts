import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent implements OnInit{

  nombreGasto: string;
  cantidad: number;
  formularioIncorrecto: boolean;
  textoIncorrecto: string;

  constructor(private _presupuestoservice: PresupuestoService){
    this.nombreGasto = '';
    this.cantidad = 0,
    this.formularioIncorrecto = false;
    this.textoIncorrecto= '';
  

  }

  ngOnInit(): void {
    
  }

  agregarGasto(){

    if(this.cantidad > this._presupuestoservice.restante){
      this.formularioIncorrecto= true;
      this.textoIncorrecto = 'Cantidad Ingresada es mayor al restante';
      return;
    }

    if(this.nombreGasto === '' || this.cantidad <= 0){
      this.formularioIncorrecto= true;
      this.textoIncorrecto = 'Nombre gasto o cantidad incorrecta';
    } else{

      //creamos el objeto
      const gasto = {
        nombre: this.nombreGasto,
        cantidad: this.cantidad,


      }

      //enviamos el objeto a los suscriptores via subject
      this._presupuestoservice.agregarGasto(gasto) 

      //reseteamos formulario
      this.formularioIncorrecto = false;
      this.nombreGasto = '';
      this.cantidad = 0;
    }

    console.log(this.cantidad);

  }

}
