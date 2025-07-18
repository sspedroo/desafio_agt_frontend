import { Component, Input } from '@angular/core';
import { RegistroViagem } from '../../interfaces/registro-viagem.model';

@Component({
  selector: 'app-card-registro-viagem',
  imports: [],
  templateUrl: './card-registro-viagem.component.html',
  styleUrl: './card-registro-viagem.component.scss'
})
export class CardRegistroViagemComponent {

  @Input({required: true}) registroViagem!: RegistroViagem;
}
