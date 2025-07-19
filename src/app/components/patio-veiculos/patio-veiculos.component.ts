import { Component, inject, Input, OnInit } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { VeiculoService } from '../../services/veiculo.service';
import { Veiculo } from '../../interfaces/veiculo.model';
import { CardVeiculoComponent } from "../card-veiculo/card-veiculo.component";

@Component({
  selector: 'app-patio-veiculos',
  imports: [
    DividerModule,
    CardVeiculoComponent
],
  templateUrl: './patio-veiculos.component.html',
  styleUrl: './patio-veiculos.component.scss'
})
export class PatioVeiculosComponent {
  @Input({required: true}) veiculosNoPatio: Veiculo[] = [];
  @Input({required: true}) veiculosEmViagem: Veiculo[] = [];
}
