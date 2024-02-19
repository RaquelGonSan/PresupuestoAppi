import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-presupuesto',
  templateUrl: './ingresar-presupuesto.component.html',
  styleUrls: ['./ingresar-presupuesto.component.css']
})
export class IngresarPresupuestoComponent implements OnInit {

  cantidad: number;
  cantidadCorrecta: boolean;

  constructor( private _presupuestoservice: PresupuestoService, private router: Router){
    this.cantidad = 0;
    this.cantidadCorrecta = true;

  }

  ngOnInit(): void {
    
  }

  agregar(){
    if(this.cantidad > 0){
      this.cantidadCorrecta = true;
      this._presupuestoservice.presupuesto = this.cantidad;
      this._presupuestoservice.restante = this.cantidad;
      this.router.navigate(['/gastos']);
    }else{
      this.cantidadCorrecta = false;
    }
  }

}
