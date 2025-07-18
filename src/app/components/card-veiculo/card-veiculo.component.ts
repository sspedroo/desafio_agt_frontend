import { Component, Input, input } from '@angular/core';
import { Veiculo } from '../../interfaces/veiculo.model';

@Component({
  selector: 'app-card-veiculo',
  imports: [],
  templateUrl: './card-veiculo.component.html',
  styleUrl: './card-veiculo.component.scss'
})
export class CardVeiculoComponent {

  @Input({required: true}) veiculo!: Veiculo;

  
}
